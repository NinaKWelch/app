import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import { Box, Container, Typography } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  title: {
    paddingBottom: theme.spacing(5)
  }
}))

const Content = ({ bg, title, children }) => {
  const classes = useStyles()

  return (
    <Box bgcolor={bg} py={7}>
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
    </Box>
  )
}

Content.propTypes = {
  bg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired
}

export default Content
