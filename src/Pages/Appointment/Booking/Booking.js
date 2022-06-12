import { Grid } from "@mui/material";
import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import SendIcon from '@mui/icons-material/Send';

const Booking = ({ booking }) => {
  const { name, time, space } = booking;
  return (
    <Grid item xs={12} sm={6} lg={4} style={{marginBottom: 20}}>
      <Card sx={{ maxWidth: 345 }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" style={{color: "#08A4CB", fontWeight: 800}}>
            {name}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            {time}
          </Typography>
          <Typography gutterBottom variant="h7" component="div">
            Space: {space}
          </Typography>
        </CardContent>

        <CardActions style={{ display: "grid", placeItem: "center" }}>
          <Button variant="contained" endIcon={<SendIcon />}>
            Booking Your Space
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default Booking;