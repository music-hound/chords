import { Box, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

function LoadingDots({children}) {
  const [dotCount, setDotCount] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setDotCount((prevCount) => (prevCount % 3) + 1);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <Typography sx={{
      color:'#888',
      }}>
      <Box sx={{display:'flex',gap:'10px',}}>{children}
      <Typography style={{ opacity: dotCount > 0 ? 1 : 0 }}>.</Typography>
      <Typography style={{ opacity: dotCount > 1 ? 1 : 0 }}>.</Typography>
      <Typography style={{ opacity: dotCount > 2 ? 1 : 0 }}>.</Typography>
      </Box>
    </Typography>
  );
}

export default LoadingDots;
