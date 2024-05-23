import React from "react";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";

const Calender = ({ date, setDate }) => {
  return (
    <div style={{ marginTop: 80 }}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <StaticDatePicker
          displayStaticWrapperAs="desktop"
          value={date}
          onChange={(newValue) => {
            setDate(newValue);
          }}
          renderInput={(params) => (
            <TextField {...params} style={{ width: 700, height: 500 }} />
          )}
        />
      </LocalizationProvider>
    </div>
  );
};

export default Calender;
