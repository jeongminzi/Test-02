/**
 * Primitive tokens — raw scales with no semantic meaning.
 * UI code must NOT import from this file directly.
 * Reference these only from semantic.ts.
 */

// ---------------------------------------------------------------------------
// Color — sourced from the funni-prototype draft (Photopot)
// Primary brand: #E85D93 (rose/pink)
// ---------------------------------------------------------------------------

export const color = {
  /** Neutral gray scale — 00 near-white to 1000 near-black */
  gray: {
    "00": "#ffffff",
    "100": "#f9fafb", // tailwind gray-50
    "200": "#f3f4f6", // gray-100
    "300": "#e5e7eb", // gray-200
    "400": "#d1d5db", // gray-300
    "500": "#9ca3af", // gray-400
    "600": "#6b7280", // gray-500
    "700": "#4b5563", // gray-600
    "800": "#374151", // gray-700
    "900": "#1f2937", // gray-800
    "1000": "#111827", // gray-900
  },

  /** Brand blue family — re-skinned from rose/pink to blue (primary: #2563eb) */
  brand: {
    "100": "#eff6ff",
    "200": "#dbeafe",
    "300": "#bfdbfe",
    "400": "#93c5fd",
    "500": "#60a5fa",
    "600": "#3b82f6",
    "700": "#2563eb",
    "800": "#1d4ed8",
    "900": "#1e40af",
    "1000": "#1e3a8a",
  },

  /** Critical / red — errors, cancel */
  red: {
    "100": "#fef2f2",
    "200": "#fee2e2",
    "300": "#fecaca",
    "400": "#fca5a5",
    "500": "#f87171",
    "600": "#ef4444",
    "700": "#dc2626",
    "800": "#b91c1c",
    "900": "#991b1b",
    "1000": "#7f1d1d",
  },

  /** Positive / green — confirmations, settlement complete */
  green: {
    "100": "#ecfdf5",
    "200": "#d1fae5",
    "300": "#a7f3d0",
    "400": "#6ee7b7",
    "500": "#34d399",
    "600": "#10b981",
    "700": "#059669",
    "800": "#047857",
    "900": "#065f46",
    "1000": "#064e3b",
  },

  /** Warning / amber — cancel-in-progress, notices */
  amber: {
    "100": "#fffbeb",
    "200": "#fef3c7",
    "300": "#fde68a",
    "400": "#fcd34d",
    "500": "#fbbf24",
    "600": "#f59e0b",
    "700": "#d97706",
    "800": "#b45309",
    "900": "#92400e",
    "1000": "#78350f",
  },

  /** Informative / blue — info banners, links */
  blue: {
    "100": "#eff6ff",
    "200": "#dbeafe",
    "300": "#bfdbfe",
    "400": "#93c5fd",
    "500": "#60a5fa",
    "600": "#3b82f6",
    "700": "#2563eb",
    "800": "#1d4ed8",
    "900": "#1e40af",
    "1000": "#1e3a8a",
  },

  /** Yellow (ratings/stars only) */
  yellow: {
    "400": "#facc15",
    "500": "#eab308",
  },

  /** Channel-specific brand colors (not part of the semantic system) */
  channel: {
    kakaoBg: "#fee500",
    kakaoFg: "#191919",
    naverBg: "#03c75a",
  },
} as const;

// ---------------------------------------------------------------------------
// Spacing (4-based scale)
// ---------------------------------------------------------------------------

export const space = {
  "0": "0px",
  "0.5": "2px",
  "1": "4px",
  "1.5": "6px",
  "2": "8px",
  "2.5": "10px",
  "3": "12px",
  "3.5": "14px",
  "4": "16px",
  "5": "20px",
  "6": "24px",
  "8": "32px",
  "10": "40px",
  "12": "48px",
  "14": "56px",
  "16": "64px",
} as const;

// ---------------------------------------------------------------------------
// Border Radius
// ---------------------------------------------------------------------------

export const radius = {
  none: "0px",
  sm: "4px",
  md: "8px",
  lg: "12px",
  xl: "16px",
  "2xl": "20px",
  "3xl": "28px",
  full: "9999px",
} as const;

// ---------------------------------------------------------------------------
// Shadow
// ---------------------------------------------------------------------------

export const shadow = {
  none: "none",
  sm: "0 1px 2px rgba(17, 24, 39, 0.04)",
  md: "0 4px 12px rgba(17, 24, 39, 0.06)",
  lg: "0 8px 24px rgba(17, 24, 39, 0.08)",
  xl: "0 20px 40px rgba(17, 24, 39, 0.12)",
  "2xl": "0 30px 60px rgba(17, 24, 39, 0.18)",
  focusRing: "0 0 0 3px rgba(37, 99, 235, 0.24)",
} as const;

// ---------------------------------------------------------------------------
// Typography
// ---------------------------------------------------------------------------

export const fontFamily = {
  sans: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Pretendard', sans-serif",
  mono: "ui-monospace, SFMono-Regular, Menlo, Monaco, 'Courier New', monospace",
} as const;

export const typeScale = {
  "display.md": { fontSize: "30px", fontWeight: "700", lineHeight: "1.2" },
  "heading.xl": { fontSize: "24px", fontWeight: "700", lineHeight: "1.3" },
  "heading.lg": { fontSize: "20px", fontWeight: "700", lineHeight: "1.3" },
  "heading.md": { fontSize: "18px", fontWeight: "700", lineHeight: "1.4" },
  "heading.sm": { fontSize: "16px", fontWeight: "700", lineHeight: "1.4" },
  "body.lg": { fontSize: "15px", fontWeight: "400", lineHeight: "1.5" },
  "body.md": { fontSize: "14px", fontWeight: "400", lineHeight: "1.5" },
  "body.sm": { fontSize: "13px", fontWeight: "400", lineHeight: "1.5" },
  "label.md": { fontSize: "12px", fontWeight: "500", lineHeight: "1.4" },
  "label.sm": { fontSize: "11px", fontWeight: "500", lineHeight: "1.3" },
  "caption.md": { fontSize: "10px", fontWeight: "500", lineHeight: "1.3" },
  "caption.sm": { fontSize: "9px", fontWeight: "600", lineHeight: "1.2" },
} as const;
