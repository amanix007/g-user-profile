import {
  createTheme,
  responsiveFontSizes,
  ThemeOptions,
} from '@mui/material/styles'
import colors from './colors'

declare module '@mui/material/styles' {
  interface Theme {
    status: {
      danger: string
    }
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string
    }
  }
}

const options: ThemeOptions = {
  palette: {
    primary: colors.primary,
    secondary: colors.secondary,
  },

  // components: {
  //   MuiCssBaseline: {
  //     styleOverrides: {
  //       '@global': {
  //         html: {
  //           fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  //           fontWeight: 400,
  //           lineHeight: 1.5,
  //           letterSpacing: '0.00938em',
  //           WebkitFontSmoothing: 'auto',
  //         },
  //       },
  //     },
  //   },
  //   MuiPaginationItem: {
  //     styleOverrides: {
  //       root: {
  //         '&.Mui-selected': {
  //           color: colors.white,
  //         },
  //       },
  //     },
  //   },
  //   MuiTouchRipple: {
  //     styleOverrides: {
  //       child: {
  //         backgroundColor: colors.white,
  //       },
  //     },
  //   },
  //   MuiTypography: {
  //     styleOverrides: {
  //       root: {
  //         // fontFamily: `"Bangla", "Roboto", "sans-serif" !important`,
  //       },
  //     },
  //   },
  //   MuiPagination: {
  //     styleOverrides: {
  //       root: {
  //         color: colors.white,
  //       },
  //     },
  //   },
  //   MuiContainer: {
  //     styleOverrides: {
  //       maxWidthLg: {
  //         '@media (min-width: 1024px)': {
  //           maxWidth: 'calc(1120px + 48px)',
  //         },
  //       },
  //     },
  //   },
  // },

  // breakpoints: {
  //   values: {
  //     xs: 0,
  //     sm: 600,
  //     md: 900,
  //     lg: 1200,
  //     xl: 1536,
  //   },
  // },
}

const theme = responsiveFontSizes(createTheme(options))

export default theme
