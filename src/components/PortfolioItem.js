import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import {
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardActions,
  CardContent,
  Typography,
  Tooltip,
  IconButton
} from '@material-ui/core'
import { GitHub as GitHubIcon, Public as PublicIcon } from '@material-ui/icons'

const useStyles = makeStyles(theme => ({
  container: {
    boxShadow: theme.shadows[0],
    '&:hover': {
      boxShadow: theme.shadows[5]
    }
  },
  content: {
    borderTop: '1px solid',
    borderColor: theme.palette.grey[200]
  },
  footer: {
    display: 'flex',
    justifyContent: 'flex-end',
    borderTop: '1px solid',
    borderColor: theme.palette.grey[300]
  },
  button: {
    marginRight: theme.spacing(0),
    border: '1px solid',
    borderColor: theme.palette.grey[300]
  }
}))

const PortfolioItem = ({ project }) => {
  const classes = useStyles()
  const imageUrl =
    window.devicePixelRatio === 1 ? project.thumbnail : project.image

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card className={classes.container}>
        <CardActionArea component={RouterLink} to={`/projects/${project.id}`}>
          <CardMedia
            component="img"
            image={imageUrl}
            title={project.imagetitle}
          />
          <CardContent className={classes.content}>
            <Typography gutterBottom variant="h5" component="h2" align="center">
              {project.title}
            </Typography>
            <Typography
              variant="body1"
              color="textSecondary"
              component="p"
              align="center"
            >
              {project.description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className={classes.footer}>
          {project.repo === '' ? (
            ''
          ) : (
            <Tooltip title="GitHub Repo" placement="top">
              <IconButton
                component="a"
                href={project.repo}
                target="_blank"
                rel="noopener"
                color="secondary"
                className={classes.button}
                aria-label="github repository"
              >
                <GitHubIcon />
              </IconButton>
            </Tooltip>
          )}
          {project.demo === '' ? (
            ''
          ) : (
            <Tooltip title="Website" placement="top">
              <IconButton
                component="a"
                href={project.demo}
                target="_blank"
                rel="noopener"
                color="primary"
                className={classes.button}
                aria-label="project website"
              >
                <PublicIcon />
              </IconButton>
            </Tooltip>
          )}
        </CardActions>
      </Card>
    </Grid>
  )
}

PortfolioItem.propTypes = {
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

export default PortfolioItem
