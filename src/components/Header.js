import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core'
import {
  LinkedIn as LinkedInIcon,
  GitHub as GitHubIcon
} from '@material-ui/icons'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  title: {
    flexGrow: 1
  },
  social: {
    marginRight: theme.spacing(2),
    border: '1px solid',
    borderColor: theme.palette.grey[300]
  },
  offset: theme.mixins.toolbar
}))

const Header = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar color="default">
        <Toolbar>
          <Typography
            variant="h5"
            component="h1"
            className={classes.title}
            color="primary"
          >
            Nina Welch
          </Typography>
          <div>
            <IconButton
              aria-label="github"
              className={classes.social}
              color="secondary"
            >
              <GitHubIcon className={classes.icon} />
            </IconButton>
            <IconButton
              aria-label="linkedin"
              className={classes.social}
              color="primary"
            >
              <LinkedInIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      <div className={classes.offset} />
    </div>
  )
}

export default Header
