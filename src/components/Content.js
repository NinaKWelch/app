import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import { Container, Typography } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  title: {
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(5)
  }
}))

const Content = ({ title, children }) => {
  const classes = useStyles()

  return (
    <Container maxWidth="lg">
      <Typography
        variant="h3"
        component="h2"
        align="center"
        color="secondary"
        className={classes.title}
      >
        {title}
      </Typography>
      {children}
    </Container>
  )
}

Content.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired
}

export default Content
