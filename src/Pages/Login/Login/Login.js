import { Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import loginImg from "../../../Images/Contacts/login.png";

const Login = () => {
  
    const handleLoginSubmit = e =>{
        
     e.preventDefault();
    }

    return (
    <div>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Typography variant="body1" gutterBottom>
              Login
            </Typography>
            <from onSubmit={handleLoginSubmit}>

            </from>
          </Grid>
          <Grid item xs={12} md={6}>
            <img src={loginImg} alt="" />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Login;
