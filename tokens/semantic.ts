/**
 * Semantic tokens — meaning-bound mappings to primitives.
 * UI code imports ONLY from this file (never from primitive.ts).
 *
 * Naming: {property}.{role}-{variant}[-{state}]
 *   property: fg | bg | stroke
 *   role: layer | neutral | brand | informative | critical | positive | warning
 *   variant: solid | solid-muted | weak | muted | subtle | contrast | inverted
 *   state (optional): pressed | focused
 */

import { color, space, radius, shadow, typeScale, fontFamily } from "./primitive";

// ---------------------------------------------------------------------------
// Foreground (text, icons)
// ---------------------------------------------------------------------------

export const fg = {
  "neutral-solid": color.gray["1000"],
  "neutral-contrast": color.gray["900"],
  "neutral-muted": color.gray["700"],
  "neutral-subtle": color.gray["500"],
  "neutral-inverted": color.gray["00"],

  "brand-solid": color.rose["600"],
  "brand-contrast": color.rose["700"],
  "brand-muted": color.rose["500"],

  "critical-solid": color.red["600"],
  "critical-contrast": color.red["700"],
  "critical-muted": color.red["500"],

  "positive-solid": color.green["700"],
  "positive-contrast": color.green["800"],

  "warning-solid": color.amber["700"],
  "warning-contrast": color.amber["800"],

  "informative-solid": color.blue["700"],

  "rating-solid": color.yellow["400"],
} as const;

// ---------------------------------------------------------------------------
// Background (surfaces, fills)
// ---------------------------------------------------------------------------

export const bg = {
  /** Layer: page canvas and floating surfaces */
  "layer-default": color.gray["00"],
  "layer-canvas": color.rose["100"], // app background (#fff7fa from globals)
  "layer-floating": color.gray["00"],
  "layer-overlay": "rgba(0, 0, 0, 0.45)",

  /** Neutral fills */
  "neutral-solid": color.gray["1000"],
  "neutral-weak": color.gray["200"],
  "neutral-subtle": color.gray["100"],
  "neutral-muted": color.gray["300"],

  /** Brand fills */
  "brand-solid": color.rose["600"],
  "brand-solid-pressed": color.rose["700"],
  "brand-weak": color.rose["100"],
  "brand-weak-alt": color.rose["200"],

  /** Critical */
  "critical-solid": color.red["600"],
  "critical-weak": color.red["100"],
  "critical-muted": color.red["200"],

  /** Positive */
  "positive-solid": color.green["600"],
  "positive-weak": color.green["100"],
  "positive-muted": color.green["200"],

  /** Warning */
  "warning-weak": color.amber["200"],
  "warning-muted": color.amber["300"],

  /** Informative */
  "informative-weak": color.blue["100"],
} as const;

// ---------------------------------------------------------------------------
// Stroke (borders, dividers)
// ---------------------------------------------------------------------------

export const stroke = {
  "neutral-subtle": color.gray["200"],
  "neutral-muted": color.gray["300"],
  "neutral-solid": color.gray["500"],

  "brand-solid": color.rose["600"],
  "brand-muted": color.rose["300"],

  "critical-solid": color.red["600"],
  "positive-solid": color.green["600"],
  "warning-solid": color.amber["600"],

  focused: color.rose["600"],
} as const;

// ---------------------------------------------------------------------------
// Spacing
// ---------------------------------------------------------------------------

export const semanticSpace = {
  component: {
    xs: space["1"], // 4
    sm: space["2"], // 8
    md: space["3"], // 12
    lg: space["4"], // 16
    xl: space["5"], // 20
    "2xl": space["6"], // 24
  },
  layout: {
    sm: space["4"], // 16
    md: space["6"], // 24
    lg: space["8"], // 32
    xl: space["12"], // 48
  },
} as const;

// ---------------------------------------------------------------------------
// Radius
// ---------------------------------------------------------------------------

export const semanticRadius = {
  control: radius.md, // buttons, inputs
  pill: radius.full, // chips, badges
  card: radius.xl, // cards, modals body
  modal: radius["2xl"], // bottom sheet body
  sheet: radius["3xl"], // bottom sheet top handle
  full: radius.full,
} as const;

// ---------------------------------------------------------------------------
// Shadow
// ---------------------------------------------------------------------------

export const semanticShadow = {
  none: shadow.none,
  card: shadow.sm,
  popover: shadow.lg,
  modal: shadow.xl,
  frame: shadow["2xl"],
  focusRing: shadow.focusRing,
} as const;

// ---------------------------------------------------------------------------
// Typography + family
// ---------------------------------------------------------------------------

export const semanticType = typeScale;
export const semanticFontFamily = fontFamily;

// ---------------------------------------------------------------------------
// Aggregate export (optional convenience)
// ---------------------------------------------------------------------------

export const tokens = {
  fg,
  bg,
  stroke,
  space: semanticSpace,
  radius: semanticRadius,
  shadow: semanticShadow,
  type: semanticType,
  fontFamily: semanticFontFamily,
} as const;
