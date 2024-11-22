import React, { useState } from 'react';
import { Card, CardContent, Typography, Grid, Button, Box } from '@mui/material';
import { Memoization } from './concepts/Memoization';
import { Closure } from './concepts/Closure';
import { Hoisting } from './concepts/Hoisting';

const concepts = [
  { title: 'Memoization', component: Memoization },
  { title: 'Closure', component: Closure },
  { title: 'Hoisting', component: Hoisting },
];

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
        <Grid container spacing={3} sx={{padding: 10}}>
          {concepts.map((concept) => (
            <Grid item xs={12} sm={6} md={4} key={concept.title}>
              <Card onClick={() => handleCardClick(concept.component)}>
                <CardContent>
                  <Typography variant="h5">{concept.title}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
      <Box sx={{pt: 4, pl: 10, display: 'flex'}}>
      <Button variant="contained" color="primary" onClick={handleBackClick}>
            Back
       </Button>
      </Box>
      
    </Box>
  );
};

export default Concepts;