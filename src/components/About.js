import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  section: {
    paddingBottom: theme.spacing(5)
  }
}))

const About = () => {
  const classes = useStyles()

  return (
    <Grid container spacing={5} mt={3} className={classes.section}>
      <Grid item md={8}>
        Text
      </Grid>
      <Grid item md={4}>
        Image
      </Grid>
    </Grid>
  )
}

export default About
