import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import {
  Box,
  Container,
  Grid,
  Hidden,
  Typography,
  Button
} from '@material-ui/core'
import { GitHub as GitHubIcon, Public as PublicIcon } from '@material-ui/icons'
import Label from './Label'
import List from './List'

const useStyles = makeStyles(theme => ({
  title: {
    marginBottom: theme.spacing(4),
    textAlign: 'center',
    [theme.breakpoints.up('md')]: {
      marginBottom: theme.spacing(1),
      textAlign: 'left'
    }
  }
}))

const Project = ({ project }) => {
  const classes = useStyles()

  const imageUrl =
    window.devicePixelRatio === 1 ? project.thumbnail : project.image

  const getSkills = skills => {
    const categories = Object.keys(skills)

    return categories.map(category => (
      <Label category={category} key={category} skills={skills[category]} />
    ))
  }

  return (
    <Box bgcolor="default" py={7}>
      <Container maxWidth="lg" my={7}>
        <Grid container spacing={5}>
          <Grid item md={6}>
            <Grid container direction="column">
              <Grid item>
                <Typography variant="h4" className={classes.title}>
                  {project.title}
                </Typography>
              </Grid>
              <Hidden mdUp>
                <Grid item>
                  <Box maxWidth="100%" clone>
                    <img src={imageUrl} alt={project.imagetitle} />
                  </Box>
                </Grid>
              </Hidden>
              <Grid item>
                <Box mt={3} mb={1}>
                  {getSkills(project.skills)}
                </Box>
              </Grid>
              <Grid item>
                <Box component="ul" fontSize={16} pl={2}>
                  {project.info.map(i => (
                    <List content={i.content} key={i.id} />
                  ))}
                </Box>
              </Grid>
            </Grid>
          </Grid>
          <Hidden smDown>
            <Grid item md={6}>
              <Box maxWidth="100%" clone>
                <img src={imageUrl} alt={project.imagetitle} />
              </Box>
            </Grid>
          </Hidden>
        </Grid>
        <Grid container spacing={2} justifyContent="flex-end">
          {project.demo === '' ? (
            ''
          ) : (
            <Grid item>
              <Button
                component="a"
                href={project.demo}
                target="_blank"
                rel="noopener"
                size="large"
                color="primary"
                startIcon={<PublicIcon />}
                aria-label="github repository"
              >
                Website
              </Button>
            </Grid>
          )}
          {project.repo === '' ? (
            ''
          ) : (
            <Grid item>
              <Button
                component="a"
                href={project.repo}
                target="_blank"
                rel="noopener"
                size="large"
                color="secondary"
                startIcon={<GitHubIcon />}
                aria-label="project website"
              >
                GitHub Repo
              </Button>
            </Grid>
          )}
        </Grid>
      </Container>
    </Box>
  )
}

Project.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.string,
    image: PropTypes.string,
    thumbnail: PropTypes.string,
    imagetitle: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    demo: PropTypes.string,
    repo: PropTypes.string,
    skills: PropTypes.shape({
      languages: PropTypes.arrayOf(PropTypes.string),
      application: PropTypes.arrayOf(PropTypes.string),
      frameworks: PropTypes.arrayOf(PropTypes.string),
      libraries: PropTypes.arrayOf(PropTypes.string),
      markup: PropTypes.arrayOf(PropTypes.string),
      tools: PropTypes.arrayOf(PropTypes.string),
      api: PropTypes.arrayOf(PropTypes.string),
      validators: PropTypes.arrayOf(PropTypes.string),
      testing: PropTypes.arrayOf(PropTypes.string),
      other: PropTypes.arrayOf(PropTypes.string)
    }),
    info: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        constent: PropTypes.string
      })
    )
  }).isRequired
}

export default Project
