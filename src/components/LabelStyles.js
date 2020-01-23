import { withStyles } from '@material-ui/core/styles'
import {
  pink,
  deepPurple,
  indigo,
  blue,
  teal,
  green,
  amber,
  orange,
  brown
} from '@material-ui/core/colors'
import Chip from '@material-ui/core/Chip'

const DefaultChip = withStyles({
  root: {
    marginRight: 4,
    marginBottom: 8
  },
  label: {
    textTransform: 'capitalize'
  }
})(Chip)

const LanguagesChip = withStyles({
  root: {
    backgroundColor: amber[200]
  }
})(DefaultChip)

const ApplicationChip = withStyles({
  root: {
    backgroundColor: orange[200]
  }
})(DefaultChip)

const FrameworksChip = withStyles({
  root: {
    backgroundColor: blue[200]
  }
})(DefaultChip)

const LibrariesChip = withStyles({
  root: {
    backgroundColor: deepPurple[200]
  }
})(DefaultChip)

const MarkupChip = withStyles({
  root: {
    backgroundColor: pink[200]
  }
})(DefaultChip)

const ToolsChip = withStyles({
  root: {
    backgroundColor: indigo[200]
  }
})(DefaultChip)

const ApiChip = withStyles({
  root: {
    backgroundColor: brown[200]
  }
})(DefaultChip)

const ValidatorsChip = withStyles({
  root: {
    backgroundColor: green[200]
  }
})(DefaultChip)

const TestingChip = withStyles({
  root: {
    backgroundColor: teal[200]
  }
})(DefaultChip)

export {
  LanguagesChip,
  ApplicationChip,
  FrameworksChip,
  LibrariesChip,
  MarkupChip,
  ToolsChip,
  ApiChip,
  ValidatorsChip,
  TestingChip,
  DefaultChip
}
