/**
 * Theme Colors Configuration
 * Single source of truth for color values used across the application
 */

export const THEME_COLORS = {
  // Light mode colors
  light: {
    background: "#f1f1f1",
    foreground: "#050607",
    primary: "#00D5FF",
    secondary: "#00AACC",
    secondaryBackground: "#e0e5eb",
    muted: "#e0e5eb",
    mutedForeground: "#51565b",
    border: "#d3d8de",
  },
  // Dark mode colors
  dark: {
    background: "#050607",
    foreground: "#f8f8f8",
    primary: "#00D5FF",
    secondary: "#00AACC",
    secondaryBackground: "#151b21",
    muted: "#1c2229",
    mutedForeground: "#8b9095",
    border: "#1c2229",
  },
} as const;

// Default export for convenience
export const PRIMARY_COLOR = THEME_COLORS.dark.primary;
export const SECONDARY_COLOR = THEME_COLORS.dark.secondary;
