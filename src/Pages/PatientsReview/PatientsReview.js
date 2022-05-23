import { Container } from "@mui/system";
import React from "react";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import "./PatientsReview.css";
import patients1 from "../../Images/Reviews/people-1.png";
import patients2 from "../../Images/Reviews/people-2.png";
import patients3 from "../../Images/Reviews/people-3.png";

const PatientsReview = () => {
  const [value, setValue] = React.useState(2);
  return (
    <div>
      <h1 style={{color:"#44FDDC"}}>Our Patients Says</h1>
      <Container>
        <div className="patients">
          <div className="review">
            <p>
              They have quality of the Care Process is amazing
              Doctors are following-up to care all the patients.
            </p>
            <Container>
              <div className="name-img">
                <img src={patients1} alt="" />
                <div>
                <h2>Joe Billah</h2>
                <Typography component="legend"></Typography>
                <Rating
                  name="simple-controlled"
                  value={value}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                />
                </div>
              </div>
            </Container>
          </div>
          <div className="review">
            <p>
              This best hospitals always prioritize the patient's comfort and convenience at each stage of their journey.
            </p>
            <Container>
              <div className="name-img">
                <img src={patients2} alt="" />
                <div>
                <h2>Joe Billah</h2>
                <Typography component="legend"></Typography>
                <Rating
                  name="simple-controlled"
                  value={value}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                />
                </div>
              </div>
            </Container>
          </div>
          <div className="review">
            <p>
            You're able to easily schedule your appointment today or any day when doctors are available by their schedule time.
            </p>
            <Container>
              <div className="name-img">
                <img src={patients3} alt="" />
                <div>
                <h2>Joe Billah</h2>
                <Typography component="legend"></Typography>
                <Rating
                  name="simple-controlled"
                  value={value}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                />
                </div>
              </div>
            </Container>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default PatientsReview;
