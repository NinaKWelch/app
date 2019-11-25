import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#8aacc8',
      contrastText: '#000'
    },
    secondary: {
      main: '#725b53',
      ontrastText: '#fff'
    }
  },
  overrides: {
    // add overrides
  }
})

export default responsiveFontSizes(theme)
