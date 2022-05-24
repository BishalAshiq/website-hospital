import React from "react";
import { Container } from "@mui/system";
import './Contact.css';

const Contacts = () => {
  return (
    <div className="contact">
        <h1>Contacts US</h1>
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
            name="subject" 
            />
      </Container>
    </div>
  );
};

export default Contacts;

