import { Button, Grid, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import { Container } from "@mui/system";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import loginImg from "../../../Images/Contacts/login.png";

const Login = () => {
  const [loginData, setLoginData] = useState({});
  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };
  const handleLoginSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Container>
      <Grid container spacing={2} style={{ marginTop: 100 }}>
        <Grid
          style={{ marginTop: 100, marginBottom: 200, width: 300 }}
          item
          xs={12}
          md={6}
        >
          <Typography
            style={{
              textAlign: "center",
              alignItems: "center",
              fontSize: 30,
              marginBottom: 30,
            }}
            variant="body1"
            gutterBottom
          >
            Login
          </Typography>
          <from onSubmit={handleLoginSubmit}>
            <TextField
              style={{ width: 400, marginBottom: 20 }}
              onChange={handleOnChange}
              id="standard-basic"
              label="Your Email"
              name="email"
              type="email"
              variant="standard"
            />{" "}
            <br />
            <TextField
              style={{ width: 400, marginBottom: 20 }}
              onChange={handleOnChange}
              id="standard-basic"
              label="Password"
              type="password"
              name="password"
              variant="standard"
            />{" "}
            <br />
            <Button
              style={{ padding: "7px 40px", marginBottom: 30 }}
              type="submit"
              variant="outlined"
              color="error"
            >
              Login
            </Button>
          </from>{" "}
          <br />
          <Grid item xs={12} style={{ marginLeft: 40 }}>
            <NavLink to="/register">
              <Button variant="text">Create a New Account?</Button>
            </NavLink>
            <NavLink to="/login">
              <Button variant="text">Sign In With Google?</Button>
            </NavLink>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6}>
          <img style={{ width: 600, marginLeft: -75 }} src={loginImg} alt="" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
