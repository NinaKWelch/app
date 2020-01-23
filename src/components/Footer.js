import React from 'react'
import { Box, Typography } from '@material-ui/core'

const Footer = () => {
  return (
    <Box py={3} align="center" borderTop={1} borderColor="grey.300">
      <Typography variant="body2">
        Copyrignt &copy; 2019 <strong>Nina Welch</strong>
      </Typography>
    </Box>
  )
}

export default Footer
