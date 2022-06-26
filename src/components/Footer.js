import * as React from 'react';
import { Typography,Box } from '@mui/material';
export default function Footer() {
  const [value, setValue] = React.useState(0);

  return (
    <Box >
 
      <Typography variant="h4" gutterBottom component="div" align="center">
        &copy; Atif Bhat
      </Typography>
    
    </Box>
  );
}
