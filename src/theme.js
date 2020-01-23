import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#8aacc8',
      contrastText: '#000'
    },
    secondary: {
      main: '#725b53',
      contrastText: '#fff'
    }
  },
  typography: {
    fontFamily: '"Raleway", "Arial", sans-serif'
  },
  overrides: {
    MuiCardActionArea: {
      focusHighlight: {
        backgroundColor: 'none'
      }
    }
  }
})

export default responsiveFontSizes(theme)
