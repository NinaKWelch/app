import React from 'react'
import { Box, Grid, Typography } from '@material-ui/core'
import react from '../media/logos/react_badge.svg'
import redux from '../media/logos/redux_badge.svg'
import javascript from '../media/logos/javascript_badge.svg'
import typescript from '../media/logos/typescript_badge.svg'

const Badges = () => {
  return (
    <Box bgcolor="white" color="text.hint" py={4}>
      <Grid
        container
        spacing={2}
        justifyContent="center"
        style={{ textAlign: 'center' }}
      >
        <Grid item xs={3} sm="auto">
          <img src={react} height="64" alt="react" />
          <Typography variant="subtitle2">React</Typography>
        </Grid>
        <Grid item xs={3} sm="auto">
          <img src={redux} height="64" alt="redux" />
          <Typography variant="subtitle2">Redux</Typography>
        </Grid>
        <Grid item xs={12} sm="auto">
          <a href="http://www.w3.org/html/logo/">
            <img
              src="https://www.w3.org/html/logo/badge/html5-badge-h-css3-graphics-multimedia-performance-semantics.png"
              width="261"
              height="64"
              alt="HTML5 Powered with CSS3 / Styling, Graphics, 3D &amp; Effects, Multimedia, Performance &amp; Integration, and Semantics"
              title="HTML5 Powered with CSS3 / Styling, Graphics, 3D &amp; Effects, Multimedia, Performance &amp; Integration, and Semantics"
            />
          </a>
          <Typography variant="subtitle2">HTML5 | CSS3</Typography>
        </Grid>
        <Grid item xs={3} sm="auto">
          <img src={javascript} height="64" alt="javascript" />
          <Typography variant="subtitle2">JavaScript</Typography>
        </Grid>
        <Grid item xs={3} sm="auto">
          <img src={typescript} height="64" alt="typescript" />
          <Typography variant="subtitle2">TypeScript</Typography>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Badges
