import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Box, Fab, Typography } from '@material-ui/core'
import { MailOutline as MailOutlineIcon } from '@material-ui/icons'
import image from '../media/nina_welch.jpg'

const useStyles = makeStyles(theme => ({
  button: {
    backgroundColor: theme.palette.primary.dark,
    color: 'white',
    '&:hover': {
      backgroundColor: theme.palette.primary.main
    }
  },
  icon: {
    marginRight: theme.spacing(1)
  }
}))

const About = () => {
  const classes = useStyles()

  return (
    <Grid container spacing={5} alignItems="center">
      <Grid item sm={6} md={5}>
        <Box
          boxShadow={7}
          borderRadius="50%"
          borderColor="grey.400"
          maxWidth="100%"
          clone
        >
          <img src={image} alt="Nina Welch" />
        </Box>
      </Grid>
      <Grid item sm={6} md={7}>
        <Box py={4} fontSize={18}>
          <Typography variant="body1" gutterBottom>
            I am a budding front-end web developer looking to build beautiful
            online experiences together with an ace team.
          </Typography>

          <Typography variant="body1" gutterBottom>
            I have a good grasp of all languages required to develop clean
            elegant code for React based applications that are accessible and
            optimised for various screens.
          </Typography>

          <Typography variant="body1">
            Having just completed a challenging but rewarding course in full
            stack development (including database integration with GraphQL), I
            have gained a better understanding of the development process.
          </Typography>
        </Box>
        <Grid container justify="center">
          <Grid item>
            <Fab
              variant="extended"
              href="mailto:ninakwelch@gmail.com"
              className={classes.button}
            >
              <MailOutlineIcon className={classes.icon} />
              Request CV
            </Fab>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default About
