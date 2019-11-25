import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  AppBar,
  Toolbar,
  Typography,
  Hidden,
  IconButton,
  Tabs,
  Tab
} from '@material-ui/core'
import { Menu as MenuIcon } from '@material-ui/icons'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(0)
  },
  title: {
    flexGrow: 1
  },
  nav: {
    marginRight: theme.spacing(2)
  }
}))

const HeaderWithMenu = () => {
  const classes = useStyles()
  const [value, setValue] = useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <div className={classes.root}>
      <AppBar component="header" position="fixed">
        <Toolbar variant="dense">
          <Typography variant="h5" component="h1" className={classes.title}>
            Nina Welch
          </Typography>
          <Hidden smUp>
            <IconButton
              edge="end"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
          </Hidden>
          <Hidden xsDown>
            <Tabs
              value={value}
              onChange={handleChange}
              component="nav"
              className={classes.nav}
              aria-label="main navigation"
            >
              <Tab
                href="/#portfolio"
                component="a"
                label="Portfolio"
                aria-label="portfolio"
              />
              <Tab
                href="/#about"
                component="a"
                label="About"
                aria-label="about"
              />
              <Tab
                href="/#contact"
                component="a"
                label="Contact"
                aria-label="contact"
              />
            </Tabs>
          </Hidden>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default HeaderWithMenu
