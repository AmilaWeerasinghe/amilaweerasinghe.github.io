import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { animated } from '@react-spring/web';
import { useAnimationProps } from '../utils/animationUtils';    

const VisitorAnalytics: React.FC = () => {
  const [visitorCount, setVisitorCount] = useState<number>(0);
  const { visitorsAnimationProps } = useAnimationProps();

  useEffect(() => {
    // Connect to the local WebSocket server
    const ws = new WebSocket('wss://https://rendernodeserver.onrender.com');

    // Handle incoming messages
    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.type === 'visitorCount') {
        setVisitorCount(data.count);
      }
    };

    // Handle WebSocket connection close
    ws.onclose = () => {
      console.log('WebSocket connection closed');
    };

    // Clean up the WebSocket connection on component unmount
    return () => {
      ws.close();
    };
  }, []);

  return (
    <animated.div style={visitorsAnimationProps}>
    <Box>
      <Typography>Real Time Visitors : {visitorCount}</Typography>
    </Box>
    </animated.div>
  );
};

export default VisitorAnalytics;