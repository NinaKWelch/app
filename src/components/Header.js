import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import {
  AppBar,
  Toolbar,
  Link,
  Box,
  Tooltip,
  IconButton
} from '@material-ui/core'
import {
  LinkedIn as LinkedInIcon,
  GitHub as GitHubIcon
} from '@material-ui/icons'
import StackOverflowIcon from '../media/logos/stackoverflow.svg'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    wrap: 'no-wrap',
    justifyContent: 'space-between'
  },
  brand: {
    color: theme.palette.primary.dark,
    '&:hover': {
      textDecoration: 'none',
      color: theme.palette.primary.main
    }
  },
  social: {
    marginLeft: theme.spacing(2),
    border: '1px solid',
    borderColor: theme.palette.grey[300]
  },
  icon: {
    width: 24
  },
  offset: theme.mixins.toolbar
}))

const Header = () => {
  const classes = useStyles()

  return (
    <>
      <AppBar color="default">
        <Toolbar className={classes.root}>
          <Link component={RouterLink} to="/" className={classes.brand}>
            <Box
              component="h1"
              fontFamily="Montserrat"
              fontWeight={700}
              fontSize={22}
            >
              Nina Welch
            </Box>
          </Link>
          <Box>
            <Tooltip title="StackOverflow">
              <IconButton
                component="a"
                href="https://stackoverflow.com/users/story/13046403"
                target="_blank"
                rel="noopener"
                aria-label="stackoverflow"
                className={classes.social}
                color="secondary"
              >
                <img
                  src={StackOverflowIcon}
                  alt="stackoverfow"
                  className={classes.icon}
                />
              </IconButton>
            </Tooltip>
            <Tooltip title="GitHub">
              <IconButton
                component="a"
                href="https://github.com/NinaKWelch/"
                target="_blank"
                rel="noopener"
                aria-label="github"
                className={classes.social}
                color="secondary"
              >
                <GitHubIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="LinkedIn">
              <IconButton
                component="a"
                href="https://www.linkedin.com/in/nina-welch-50843137/"
                target="_blank"
                rel="noopener"
                aria-label="linkedin"
                className={classes.social}
                color="primary"
              >
                <LinkedInIcon />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </AppBar>
      <div className={classes.offset} />
    </>
  )
}

export default Header
