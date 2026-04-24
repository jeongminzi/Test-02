# 포토팟 디자인 시스템

이 문서는 디자이너가 Storybook과 Claude Code로 디자인 시스템을 직접 다루기 위한 핸드오프 문서입니다.

## 1. 스택

- **Framework**: Next.js 16 (App Router, Turbopack), React 19, TypeScript
- **Styling**: Tailwind CSS v4 (`@theme inline` in `app/globals.css`)
- **Icons**: `lucide-react`
- **Storybook**: 10.3 (react-vite framework, @tailwindcss/vite 플러그인 연결)
- **Package manager**: pnpm

## 2. 기존에 있던 것

진입 시점 상태:
- `app/globals.css`의 `@theme inline` 블록에 `--color-primary`, `--color-warning` 등 8개 토큰만 존재 — semantic layer 없음
- `.policy-badge`, `.badge-best`, `.keyword-pill`, `.cat-circle` 등 유틸리티 클래스가 전역 CSS로 정의됨
- 컴포넌트 디렉토리 없음 — `consumer/page.tsx` (2109줄), `business/page.tsx` (1855줄), `admin/page.tsx` (2147줄)에 JSX가 인라인으로 전개됨
- Storybook 없음

**분류: Partial.** 기존 `--color-primary`는 `bg-primary` 클래스로 페이지들이 참조하므로 이름을 보존했습니다 — 대신 값이 새 primitive `rose.600`을 가리키도록 재라우팅했습니다.

## 3. 토큰 계층

두 계층입니다. **UI 코드는 오직 semantic 토큰만 참조**합니다.

### Primitive (`tokens/primitive.ts` + CSS vars `--primitive-*`)
원시 ramp만 — gray 00–1000, rose 100–1000 (brand), red/green/amber/blue는 실제로 쓰이는 step만. 의미 없음.

### Semantic (`tokens/semantic.ts` + CSS vars `--fg-*`, `--bg-*`, `--stroke-*`)
의미 기반 매핑. 이름 규칙:

```
{property}.{role}-{variant}[-{state}]
   fg/bg/stroke
        └ layer | neutral | brand | informative | critical | positive | warning
                      └ solid | solid-muted | weak | muted | subtle | contrast | inverted
                                         └ pressed | focused (optional)
```

예시:
| Semantic | Primitive | 용도 |
|---|---|---|
| `fg.neutral-solid` | `gray.1000` | 본문 텍스트 |
| `fg.brand-solid` | `rose.600` | 브랜드 색 텍스트/아이콘 |
| `bg.brand-solid` | `rose.600` | 주요 CTA 배경 |
| `bg.brand-solid-pressed` | `rose.700` | 주요 CTA 눌림 상태 |
| `bg.critical-weak` | `red.100` | 에러 박스 배경 |
| `stroke.neutral-subtle` | `gray.200` | 카드 테두리 |

UI에서 primitive를 직접 쓰고 싶으면 그건 semantic이 빠졌다는 신호입니다 — semantic을 추가하세요. Foundations 스토리만 예외적으로 primitive를 렌더링합니다.

## 4. 컬러 팔레트 (Primitive)

| Family | 사용 범위 | Steps |
|---|---|---|
| `gray` | 배경·본문·보더 전반 | 00, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000 |
| `rose` | **브랜드** (#E85D93) | 100–1000 |
| `red` | critical, 취소, 노쇼 | 100, 200, 500, 600, 700, 800 |
| `green` | positive, 확정, 정산 완료 | 100, 200, 600, 700, 800 |
| `amber` | warning, 대기 상태 | 100, 200, 300, 600, 700, 800 |
| `blue` | informative (수기 예약 등) | 100, 700 |

## 5. Semantic 컬러 맵 (요약)

### Foreground (fg)
| Token | Primitive | 용도 |
|---|---|---|
| `fg.neutral-solid` | gray.1000 | 제목/본문 |
| `fg.neutral-muted` | gray.700 | 보조 텍스트 |
| `fg.neutral-subtle` | gray.500 | 플레이스홀더, 라벨 |
| `fg.neutral-inverted` | gray.00 | 다크 배경 위 텍스트 |
| `fg.brand-solid` | rose.600 | 브랜드 강조 |
| `fg.critical-solid` | red.600 | 취소/에러 텍스트 |
| `fg.positive-solid` | green.700 | 확정 상태 |
| `fg.warning-solid` | amber.700 | 대기/주의 |
| `fg.rating-solid` | yellow.400 | ★ 평점 |

### Background (bg)
| Token | Primitive | 용도 |
|---|---|---|
| `bg.layer-canvas` | rose.100 | 앱 전체 배경 (#fff7fa 대체) |
| `bg.layer-floating` | gray.00 | 카드·헤더·모달 |
| `bg.neutral-subtle` | gray.100 | 입력창, 보조 배경 |
| `bg.brand-solid` | rose.600 | 주요 CTA |
| `bg.brand-weak` | rose.100 | 브랜드 연한 배경 |
| `bg.critical-weak` | red.100 | 에러 박스 |
| `bg.positive-weak` | green.100 | 확정 배지 배경 |
| `bg.warning-weak` | amber.200 | 대기 배지 배경 |

### Stroke
| Token | Primitive | 용도 |
|---|---|---|
| `stroke.neutral-subtle` | gray.200 | 카드/리스트 구분선 |
| `stroke.neutral-muted` | gray.300 | 기본 보더 |
| `stroke.brand-solid` | rose.600 | 선택된 컨트롤 |
| `stroke.focused` | rose.600 | 인풋 포커스 |

## 6. 컴포넌트 인벤토리

### Atoms (12개 — `src/components/atoms/`)
| 컴포넌트 | variants / props | 용도 |
|---|---|---|
| `Button` | primary·secondary·ghost·outline·danger × sm·md·lg · fullWidth · icons | 모든 CTA |
| `IconButton` | solid·ghost·outline × sm·md·lg | 벨, 뒤로가기, 전화, 찜 |
| `Input` | invalid, leadingIcon, trailingIcon | 텍스트 필드 |
| `Textarea` | invalid | 리뷰, 스튜디오 소개 |
| `Badge` | tone × variant(weak/solid) | 상태 표시 (확정/취소/대기 등) |
| `Tag` | outlined·filled·subtle | 키워드 (#증명사진 등) |
| `Chip` | active | 필터 탭 (예정/완료/취소) |
| `Avatar` | sm·md·lg·xl | 프로필, 리뷰 |
| `StarRating` | value, reviewCount, size | ★ 평점 |
| `Divider` | solid·dashed × subtle·muted | 리스트 구분 |
| `BrandMark` | sm·md·lg + hideLabel | 로고 + 포토팟 텍스트 |
| `NotificationDot` | tone × visible (wraps any child) | 벨 위 빨간 점 |

### Molecules (10개 — `src/components/molecules/`)
| 컴포넌트 | 핵심 slot/variant | 용도 |
|---|---|---|
| `SearchBar` | Input + Search icon | 검색창 |
| `FilterChipGroup` | options/value/onChange | 필터 행 (가로 스크롤) |
| `SectionTitle` | headingOnly·captionAbove·withAction | 섹션 헤더 |
| `ListItem` | leading·title·subtitle·trailing | 설정, 마이페이지, 리스트 |
| `InfoRow` | label·value × emphasis | 영수증/예약 요약 |
| `InfoBox` | tone: neutral·warning·critical·positive·informative | 안내/경고 배너 |
| `KpiCard` | tone × sub | 대시보드 KPI |
| `StudioCard` | featured·compact·list × ribbon | 홈 추천·카테고리 리스트 |
| `ReviewCard` | + optional ownerReply | 리뷰 블록 |
| `PackageOption` | selected × originalPrice | 패키지 라디오 카드 |

### Organisms (6개 — `src/components/organisms/`)
| 컴포넌트 | 핵심 특징 |
|---|---|
| `AppHeader` | `variant="brand" \| "titled"` — Depth 1은 BrandMark, Depth 2+는 뒤로가기+제목 |
| `AppBottomTab` | **`depth` prop을 받아 Depth ≥ 2면 렌더링 안 됨** (GNB 규칙 내장). `tabs` prop으로 소비자/업체 앱에서 공용 |
| `ModalShell` | 오버레이 + 라운드 컨테이너 + header/body/footer slots (ESC 닫기) |
| `BottomSheet` | 하단 슬라이드 업, 드래그 핸들, footer 버튼 그룹 |
| `DatePicker` | 월 네비 · `availableDates`/`disabledDates` 조건부 스타일링 |
| `StatusBadge` | `ReservationStatusBadge`, `SettlementStatusBadge`, `StudioStatusBadge` — 도메인 상태를 적절한 Badge tone으로 매핑 |

## 7. 확장 방법

### 새 semantic 컬러 추가
1. `tokens/semantic.ts`에 role을 추가 (예: `bg.positive-muted`)
2. `src/styles/tokens.css`에 `--bg-positive-muted: var(--primitive-green-200);` 추가
3. `app/globals.css`의 `@theme inline`에 `--color-bg-positive-muted: var(--bg-positive-muted);` 추가
4. 컴포넌트에서 `bg-bg-positive-muted`로 사용

### Atom에 variant 추가 (예: Button에 "brandLight")
1. `Button.tsx`의 `ButtonVariant` 타입에 `"brandLight"` 추가
2. `variantClass` 맵에 매핑 추가
3. `Button.stories.tsx`에 `BrandLight` 스토리 추가

### 페이지 패턴을 molecule로 승격
1. `consumer/page.tsx` 등에서 반복되는 JSX 블록을 찾기 — 2번 이상 반복되면 승격 대상
2. `src/components/molecules/NewThing.tsx` 생성. props는 UI 차이(text/icon/state)만 남기고, 레이아웃 차이는 `variant` prop으로
3. 원본 페이지의 인라인 JSX를 `<NewThing ... />`으로 교체
4. `.stories.tsx` 추가 (최소 Default + 각 variant)

## 8. 의도적으로 유보된 항목 (Deferred)

다음은 이번 패스에서 생략했습니다 — 다음 패스 후보:

- **Admin 데스크톱 전용 컴포넌트**: `DataTable`, `AdminTopNav`, 2단 차트(월별 예약/매출), 환불율 매트릭스 편집기. 소비자/업체 모바일 앱과 공유되지 않고 3개 페이지에 흩어진 인라인 table이 10개 이상이라 체계적 설계가 필요.
- **카테고리 아이콘 선택기** (`IconPicker`): 현재 `app/lib/category-icons.ts`에 데이터만 있음. Atom화 가치 있음.
- **광고 배너 캐러셀** (`AdBannerCarousel`): `from-rose-100 to-pink-100` 계열 그라데이션 9종을 토큰화하지 않음 — 한정된 용도라 `tailwind.config.ts`에 `backgroundImage`로 옮기는 게 합당.
- **Motion 토큰**: skill 가이드 따라 의도적으로 skip.
- **소셜 로그인 버튼** (카카오/네이버/구글): `channel.kakao*`, `channel.naver*` primitive만 정의하고 컴포넌트는 만들지 않음. 쓰임이 로그인 화면 한 곳이라 인라인 유지.
- **원본 페이지 리팩토링**: `consumer/page.tsx` 등은 그대로입니다. `@theme inline`의 legacy alias(`--color-primary`→`rose.600` 등) 덕분에 기존 `bg-primary` 클래스는 여전히 동작. 점진적 교체 예정.

## 9. 디자이너 워크플로우

1. `pnpm install && pnpm storybook` → http://localhost:6007
2. 좌측 Sidebar에서 `Foundations`를 먼저 열어 토큰 팔레트를 확인합니다.
3. 원하는 컴포넌트로 이동 (예: `Molecules/StudioCard/ScrollRow`) → Controls 탭에서 props를 바꿔가며 확인.
4. 새 variant가 필요하면 Claude Code에 "StudioCard에 `huge` variant 추가해줘"처럼 지시. 해당 파일 + `.stories.tsx` 한 쌍만 수정되므로 리뷰 범위가 좁습니다.
5. 변경 후 `pnpm storybook`은 HMR로 즉시 반영.
