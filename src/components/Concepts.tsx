import React, { useState } from 'react';
import { Card, CardContent, Typography, Grid, Button, Box } from '@mui/material';
import { Memoization,
         Closure,
         Hoisting,
         WebSockets } from './concepts/index';

import { TimerUseRef } from './hooks/TimerUseRef';

const concepts = [
  { title: 'Memoization', component: Memoization },
  { title: 'Web sockets', component: WebSockets },
  { title: 'Closure', component: Closure },
  { title: 'Hoisting', component: Hoisting },
];

const Hooks = [
  { title: 'useRef Hook' , component : TimerUseRef }
]

const Concepts: React.FC = () => {
  const [selectedConcept, setSelectedConcept] = useState<React.FC | null>(null);

  const handleCardClick = (Component: React.FC) => {
    setSelectedConcept(() => Component);
  };

  const handleBackClick = () => {
    setSelectedConcept(null);
  };

  return (
    <Box sx={{alignItems: 'center' , alignContent: 'center'}}>
      {selectedConcept ? (
        <div>
          {React.createElement(selectedConcept)}
        </div>
      ) : (
        <Box>
        <Grid container spacing={3} sx={{padding : '80px 80px 0 80px'}}>
          {concepts.map((concept) => (
            <Grid item xs={12} sm={6} md={4} key={concept.title}>
              <Card onClick={() => handleCardClick(concept.component)}>
                <CardContent sx={{ display: 'flex' , alignItems: 'center' , justifyContent: 'center'}}>
                  <Typography variant="h5">{concept.title}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Grid container spacing={3} sx={{padding : '80px 80px 0 80px'}}>
          {Hooks.map((hook) => (
            <Grid item key={hook.title}>
              <Card onClick={() => handleCardClick(hook.component)}>
                <CardContent >
                  <Typography variant='h5'>{hook.title}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        </Box>
      )}
      <Box sx={{pt: 1, pl: 10, display: 'flex'}}>
      <Button variant="contained" color="primary" onClick={handleBackClick}>
            Back
       </Button>
      </Box>
      
    </Box>
  );
};

export default Concepts;