import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Container, Box } from '@material-ui/core'
import umbrellas from '../media/umbrellas.jpg'
import smUmbrellas from '../media/umbrellas_sm.jpg'

const imageUrl =
  window.innerWidth >= 500 ? `url(${umbrellas})` : `url(${smUmbrellas})`

const useStyles = makeStyles(theme => ({
  hero: {
    position: 'relative',
    backgroundColor: theme.palette.secondary.light,
    color: theme.palette.common.white,
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(5),
    backgroundImage: imageUrl,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(9),
      paddingBottom: theme.spacing(9)
    }
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(114,91,83,.4)'
  },
  heroContent: {
    position: 'relative',
    zIndex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: theme.spacing(2),
    textAlign: 'center',
    fontFamily: '"Montserrat", "Arial", sans-serif',
    lineHeight: 1,
    fontSize: 30,
    fontWeight: 400,
    '& > :first-child': {
      fontSize: 60,
      fontWeight: 300,
      letterSpacing: -4
    },
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(3),
      fontSize: 41,
      fontWeight: 400,
      '& > :first-child': {
        fontSize: 80
      }
    }
  }
}))

const Hero = () => {
  const classes = useStyles()

  return (
    <div className={classes.hero}>
      <div className={classes.overlay} />
      <Container maxWidth="sm">
        <Box className={classes.heroContent} component="h2">
          <div>FRONT END</div>
          <div>WEB DEVELOPMENT</div>
        </Box>
      </Container>
    </div>
  )
}

export default Hero
