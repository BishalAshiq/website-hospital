import React from "react";
import { Container } from "@mui/system";
import './Contact.css';

const Contacts = () => {
  return (
    <div className="contact" style={{
        backgroundImage: `url("https://i.ibb.co/QkfBtsv/Contact-bg.png")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
      }}>
        <h1 className="contact-h1">Contacts US</h1>
      <Container>
      <label for="name">Name</label>
            <input
            id="name"
            type="text"
            /> <br/>
             <label for="email">Email</label>
            <input
            id="email"
            type="text"
            /> <br/>
             <label for="subject">Write Something</label>
            <textarea
            id="Write Something"
            />
      </Container>
    </div>
  );
};

export default Contacts;

