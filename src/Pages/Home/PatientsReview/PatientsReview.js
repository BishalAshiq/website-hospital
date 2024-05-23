import { Container } from "@mui/system";
import React from "react";
import "./PatientsReview.css";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import patients1 from "../../../Images/Reviews/people-1.png";
import patients2 from "../../../Images/Reviews/people-2.png";
import patients3 from "../../../Images/Reviews/people-3.png";

const reviews = [
  {
    id: 1,
    text: "They have quality of the Care Process is amazing Doctors are following-up to care all the patients.",
    author: "Joe Billah",
    rating: 4,
    image: patients1,
  },
  {
    id: 2,
    text: "This best hospitals always prioritize the patient's comfort and convenience at each stage of their journey.",
    author: "Amber Heard",
    rating: 5,
    image: patients2,
  },
  {
    id: 3,
    text: "You're able to easily schedule your appointment any day when doctors are available by their schedule time.",
    author: "Simon Access",
    rating: 3,
    image: patients3,
  },
];

const PatientsReview = () => {
  const [value, setValue] = React.useState(2);

  return (
    <div data-aos="fade-up" data-aos-anchor-placement="center-center">
      <Container>
        <h1 className="review-h1">Reviews</h1>
        <div className="patients">
          {reviews.map((review) => (
            <div key={review.id} className="review">
              <p>{review.text}</p>
              <>
                <div className="name-img">
                  <img src={review.image} alt="" />
                  <div>
                    <h2 className="reviwer-name">{review.author}</h2>
                    <Typography component="legend" style={{ color: "green" }}>
                      Rating
                    </Typography>
                    <Rating
                      name="simple-controlled"
                      value={value}
                      onChange={(event, newValue) => {
                        setValue(newValue);
                      }}
                    />
                  </div>
                </div>
              </>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default PatientsReview;
