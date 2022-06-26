import React from "react";
import { Button, Grid} from "@mui/material";
import { NavLink } from "react-router-dom";
import { Container } from "@mui/system";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import registerImg from "../../../Images/Contacts/Register.png";

const Register = () => {
  const [loginData, setLoginData] = useState({});

  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };
  const handleLoginSubmit = (e) => {
    if(loginData.password !== loginData.password2){
      alert('Your Password did not match');
      return
    }
    e.preventDefault();
  };
  return (
    <Container>
      <Grid container spacing={2} style={{ marginTop: 100 }}>
        <Grid item xs={12} md={6}>
          <img
            style={{ width: 600, marginLeft: -75 }}
            src={registerImg}
            alt=""
          />
        </Grid>
        <Grid
          style={{ marginBottom: 200, width: 300 }}
          item
          xs={12}
          md={6}
        >
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
            <TextField
              style={{ width: 400, marginBottom: 20 }}
              onChange={handleOnChange}
              id="standard-basic"
              label="Re-Type Password"
              type="password"
              name="password2"
              variant="standard"
            />{" "}
            <br />
            <Button
              style={{ padding: "7px 40px", marginBottom: 30 }}
              type="submit"
              variant="outlined"
              color="error"
            >
              Registration
            </Button>
          </from>{" "}
          <br />
          <Grid item xs={12} style={{ marginLeft: 40 }}>
            <NavLink to="/login">
              <Button variant="text">Already Have an account?</Button>
            </NavLink>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Register;
