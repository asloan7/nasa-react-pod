import React from "react";
//import DatePicker from "react-datepicker";
//import "react-datepicker/dist/react-datepicker.css";

/*
const DateInput = props => (
    <div>
      Select a Date:
      <DatePicker
        selected={props.date}
        onChange={props.changeDate}
      />
    </div>
  );
*/
/* */
const DateInput = props => (
    <form onSubmit={props.changeDate}>
      Enter a date (YYYY-MM-DD):
      <input />
      <input type="submit" />
    </form>
  );


export default DateInput;
