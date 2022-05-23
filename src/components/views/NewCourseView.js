import {makeStyles} from '@mui/styles';
//import NavigableContainer from "../containers/NavigableContainer";
//import CourseForm from "../forms/CourseForm";
import Button from "@material-ui/core/Button";
import React, { Component }  from 'react';
import Typography from "@material-ui/core/Typography";



const NewCourseView = ({handleChange, handleSubmit}) => {
const courses = useStyles();
return (
  <div>
  <h1>New Course</h1>

  <div className={courses.root}>
    <div className={courses.formContainer}>
      <div className={courses.formTitle}>
        <Typography
          style={{
            fontWeight: "bold",
            fontFamily: "Courier, sans-serif",
            fontSize: "20px",
            color: "#11153e",
          }}
        >
          Add a Course
        </Typography>
      </div>
      <form
        style={{ textAlign: "center" }}
        onSubmit={(e) => handleSubmit(e)}
      >
        <label style={{ color: "#11153e", fontWeight: "bold" }}>
          Title:{" "}
        </label>
        <input
          type="text"
          name="Title"
          onChange={(e) => handleChange(e)}
          required
        />
        <br />
        <br />

        <label style={{ color: "#11153e", fontWeight: "bold" }}>
          Timeslot:{" "}
        </label>
        <input
          type="text"
          name="Timeslot"
          onChange={(e) => handleChange(e)}
          required
        />
        <br />
        <br />

        <label style={{ color: "#11153e", fontWeight: "bold" }}>
          Instructor ID:{" "}
        </label>
        <input
          type="text"
          name="Instructor ID"
          onChange={(e) => handleChange(e)}
          required
        />
        <br />
        <br />

        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
        <br />
        <br />
      </form>
    </div>
  </div>
</div>

);
}

const useStyles = makeStyles(() => ({
    
}));
export default NewCourseView;
