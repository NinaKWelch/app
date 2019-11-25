import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core'
import PortfolioItem from './PortfolioItem'
import projects from '../services/projects'

const useStyles = makeStyles(theme => ({
  title: {
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(5)
  },
  section: {
    paddingBottom: theme.spacing(5)
  }
}))

const Portfolio = () => {
  const classes = useStyles()

  return (
    <Grid container spacing={4} mt={3} className={classes.section}>
      {projects.map(project => (
        <PortfolioItem project={project} key={project.id} />
      ))}
    </Grid>
  )
}

export default Portfolio
