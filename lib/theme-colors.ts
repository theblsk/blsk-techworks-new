/**
 * Canonical brand color tokens derived from the BLSK logo gradient.
 * Keep HSL tuples in sync with public/brand-tokens.css.
 * Keep manifest hex values in sync with public/site.webmanifest.
 */
export const brandTokens = {
  light: {
    signal: [202, 78, 45] as const,
    patina: [282, 52, 47] as const,
    background: [220, 20, 98] as const,
    foreground: [220, 18, 12] as const,
  },
  dark: {
    signal: [202, 85, 62] as const,
    patina: [282, 60, 70] as const,
    background: [222, 16, 7] as const,
    foreground: [215, 16, 90] as const,
  },
} as const

export type HslToken = readonly [hue: number, saturation: number, lightness: number]

export function cssHslToken([hue, saturation, lightness]: HslToken): string {
  return `${hue} ${saturation}% ${lightness}%`
}

export function hslTokenToHex([hue, saturation, lightness]: HslToken): string {
  const saturationRatio = saturation / 100
  const lightnessRatio = lightness / 100

  const chroma = (1 - Math.abs(2 * lightnessRatio - 1)) * saturationRatio
  const huePrime = hue / 60
  const x = chroma * (1 - Math.abs((huePrime % 2) - 1))

  let red = 0
  let green = 0
  let blue = 0

  if (huePrime >= 0 && huePrime < 1) {
    red = chroma
    green = x
  } else if (huePrime >= 1 && huePrime < 2) {
    red = x
    green = chroma
  } else if (huePrime >= 2 && huePrime < 3) {
    green = chroma
    blue = x
  } else if (huePrime >= 3 && huePrime < 4) {
    green = x
    blue = chroma
  } else if (huePrime >= 4 && huePrime < 5) {
    red = x
    blue = chroma
  } else {
    red = chroma
    blue = x
  }

  const match = lightnessRatio - chroma / 2
  const toHex = (channel: number) =>
    Math.round((channel + match) * 255)
      .toString(16)
      .padStart(2, "0")

  return `#${toHex(red)}${toHex(green)}${toHex(blue)}`
}

/** Colors for browser chrome meta tags (must be hex). */
export const themeColors = {
  viewport: {
    light: hslTokenToHex(brandTokens.light.background),
    dark: hslTokenToHex(brandTokens.dark.background),
  },
  manifest: {
    themeColor: hslTokenToHex(brandTokens.dark.signal),
    backgroundColor: hslTokenToHex(brandTokens.dark.background),
  },
} as const
