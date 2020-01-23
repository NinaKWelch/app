import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core'
import PortfolioItem from './PortfolioItem'

const useStyles = makeStyles(theme => ({
  title: {
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(5)
  },
  section: {
    paddingBottom: theme.spacing(5)
  }
}))

const Portfolio = ({ projects }) => {
  const classes = useStyles()

  return (
    <Grid container spacing={4} mt={3} className={classes.section}>
      {projects.map(project => (
        <PortfolioItem project={project} key={project.id} />
      ))}
    </Grid>
  )
}

Portfolio.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default Portfolio
