import React from 'react'
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
  IconButton
} from '@material-ui/core'
import GitHubIcon from '@material-ui/icons/GitHub'
import PublicIcon from '@material-ui/icons/Public'

const useStyles = makeStyles(theme => ({
  root: {
    border: '1px solid',
    borderColor: theme.palette.grey[200]
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
    marginRight: theme.spacing(1),
    border: '1px solid',
    borderColor: theme.palette.grey[300]
  }
}))

const PortfolioItem = ({ project }) => {
  const classes = useStyles()

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            component="img"
            image={project.image}
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
            <IconButton
              component="a"
              href={project.repo}
              color="secondary"
              className={classes.button}
              aria-label="github repository"
            >
              <GitHubIcon />
            </IconButton>
          )}
          <IconButton
            component="a"
            href={project.demo}
            color="primary"
            className={classes.button}
            aria-label="project website"
          >
            <PublicIcon />
          </IconButton>
        </CardActions>
      </Card>
    </Grid>
  )
}

PortfolioItem.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.number,
    image: PropTypes.string,
    imagetitle: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    demo: PropTypes.string,
    repo: PropTypes.string
  }).isRequired
}

export default PortfolioItem
