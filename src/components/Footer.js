import React from 'react'
import { Container, Box, Typography } from '@material-ui/core'

const Footer = () => {
  return (
    <Container maxWidth="lg">
      <Box py={3} css={{ textAlign: 'right' }}>
        <Typography variant="body2" component="p">
          Copyrignt &copy; 2019
          <strong>Nina Welch</strong>. All Rights Reserved.
        </Typography>
      </Box>
    </Container>
  )
}

export default Footer
