// src/theme/defaultTheme.ts

interface DefaultTheme {
  colors: {
    primary: string;
    secondary: string;
    background: string;
    dark: string;
    light: string;
  },
  font: {
    family: string;
    size: string;
  },
  borderRadius: string;
  spacing: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
  },
  breakpoints: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
  }
}


export const defaultTheme:DefaultTheme = {
  colors: {
    primary: '#0047AB',
    secondary: '#FF4081',
    background: '#FFFFFF',
    dark: '#000000',
    light: "#FFFFFF",
  },
  font: {
    family: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    size: '0.9rem',
  },
  borderRadius: '0.5rem',
  spacing: {
    xs: "0.3rem",
    sm: '0.5rem',
    md: '1rem',
    lg: '2rem',
    xl: '3rem',
  },
  breakpoints: {
    xs: '30em',  // 480px
    sm: '48em',  // 768px
    md: '64em',  // 1024px
    lg: '75em',  // 1200px
    xl: '90em',  // 1440px
  },
};
