import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import { Container, Box, Typography } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  title: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
    textAlign: 'center'
  },
  content: {
    boxShadow: theme.shadows[2],
    marginBottom: theme.spacing(4)
  }
}))

const Certificate = ({ certificate }) => {
  const classes = useStyles()

  return (
    <Container maxWidth="lg" my={7}>
      <Typography variant="h4" className={classes.title}>
        {certificate.title}
      </Typography>

      <Box maxWidth="100%" className={classes.content} clone>
        <img src={certificate.image} alt="certificate" />
      </Box>
    </Container>
  )
}

Certificate.propTypes = {
  certificate: PropTypes.shape({
    id: PropTypes.string,
    image: PropTypes.string,
    title: PropTypes.string
  }).isRequired
}

export default Certificate
