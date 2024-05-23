import React, { useState } from "react";
import { Button, Grid, Typography } from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import { Container } from "@mui/system";
import TextField from "@mui/material/TextField";
import loginImg from "../../../Images/Contacts/login.png";
import { useAuth } from "../../../context/AuthContext";

const Login = () => {
  const [loginData, setLoginData] = useState({});
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const { email, password } = loginData;
    if (email === 'admin@admin.com' && password === 'password') {
      login();
    } else {
      alert("Invalid email or password. If you are new, please register.");
      navigate("/register");
    }
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
          <form onSubmit={handleLoginSubmit}>
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
          </form>{" "}
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
          <img style={{ width: 600, marginLeft: -75 }} src={loginImg} alt="Login" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
