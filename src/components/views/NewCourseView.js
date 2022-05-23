import {makeStyles} from '@mui/styles';
import Button from "@material-ui/core/Button";
import React, { Component }  from 'react';
import Typography from "@material-ui/core/Typography";


const NewCourseView = ({handleChange, handleSubmit}) => {
const courses = useStyles();
return (
  <div>
  <h1>New Course</h1>

  <div className={courses.root}>
    <div className={courses.courseFormContainer}>
      <div className={courses.courseFormTitle}>
        <Typography
          style={{
            fontWeight: "bold",
            fontSize: "20px",
            color: "white",
            fontFamily: "Courier, sans-serif",
          }}
        >
          Add a Course
        </Typography>
      </div>
      <form
        style={{ textAlign: "center" }}
        onSubmit={(e) => handleSubmit(e)}
      >
        <label style={{ color: "black", fontWeight: "bold" }}>
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

        <label style={{ color: "black", fontWeight: "bold" }}>
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

        <label style={{ color: "black", fontWeight: "bold" }}>
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

        <Button variant="contained" type="submit" style = {{backgroundColor:"navy blue"}} >
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
  courseFormContainer: {
    width: "500px",
    backgroundColor: "#f0f0f5",
    borderRadius: "5px",
    margin: "auto",
  },
  courseFormTitle: {
    backgroundColor: "#7d0aff",
    marginBottom: "15px",
    textAlign: "center",
    borderRadius: "5px 5px 0px 0px",
    padding: "3px",
  },
}));


export default NewCourseView;
