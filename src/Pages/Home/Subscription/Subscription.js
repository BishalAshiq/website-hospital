import { Container } from "@mui/system";
import React from "react";
import "./Subscription.css";
import SendIcon from "@mui/icons-material/Send";
import Button from "@mui/material/Button";

const Subscription = () => {
  return (
    <div
      className="subscribe-div"
      style={{
        backgroundImage: `url("https://i.ibb.co/T1f1KT1/bg.jpg")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        paddingTop: 80,
        paddingBottom: 80,
        marginBottom: 100,
      }}
      data-aos="flip-up"
    >
      <h1 className="h1-subs">Subscribe</h1>
      <Container>
        <input id="email" placeholder="Email" type="text" />
        <Button
          style={{ marginLeft: 20 }}
          variant="contained"
          endIcon={<SendIcon />}
        >
          Subscribe
        </Button>
      </Container>
    </div>
  );
};

export default Subscription;
