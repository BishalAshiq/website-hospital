import React from "react";
import { Container } from "@mui/system";
import "./Register.css";

const Register = () => {
  return (
    <div
      className="contact"
      style={{
        backgroundImage: `url("https://i.ibb.co/QkfBtsv/Contact-bg.png")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <h1 className="contact-h1">Contacts US</h1>
      <Container>
       <from>
       <label for="name">Name</label>
        <input id="name" type="text" /> <br />
        <label for="email">Email</label>
        <input id="email" type="text" /> <br />
        <label for="subject">Write Something</label>
        <textarea id="Write Something" type="text-area" />
       </from>
       <a style={{color: "white"}} href="/login"> Already Have Account?</a>
      </Container>
    </div>
  );
};

export default Register;
