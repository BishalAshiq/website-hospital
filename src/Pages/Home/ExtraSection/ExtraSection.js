import { Container } from "@mui/material";
import React from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
const ExtraSection = () => {
  return (
    <div>
      <Container>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2} columns={16}>
           
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default ExtraSection;
