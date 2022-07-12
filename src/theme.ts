import { createTheme } from '@mui/material/styles'
import { red } from '@mui/material/colors'
import colors from './theme/colors'

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: colors.primary.main,
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
  },
})

export default theme
