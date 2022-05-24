import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import React from 'react';



const EditCourseView = (props) => {
  const { course, handleChange, handleSubmit } = props;
  const courses = useStyles();
  if (!course.id){
    return <h1>No courses available</h1>;
  }
  return (
    <div>
      <h1>New Course</h1>

      <div className={courses.root}>
        <div className={courses.courseFormContainer}>
          <div className={courses.courseFormTitle}>
            <Typography
              style={{
                fontWeight: "bold", fontSize: "20px", color: "white", fontFamily: "Courier, sans-serif",
              }}>
              Edit a Course
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
              name="title"
              value={course.title}
              onChange={(e) => handleChange(e)}
            />
            <br />
            <br />

            <label style={{ color: "black", fontWeight: "bold" }}>
              Timeslot:{" "}
            </label>
            <input
              type="text"
              name="timeslot"
              onChange={(e) => handleChange(e)}
              value={course.timeslot}
              required
            />
            <br />
            <br />

            <label style={{ color: "black", fontWeight: "bold" }}>
              Location:{" "}
            </label>
            <input
              type="test"
              name="location"
              onChange={(e) => handleChange(e)}
              value={course.location }
              required
            />
            <br />
            <br />

            <Button variant="contained" type="submit" style = {{backgroundColor:"navy blue"}}>
              Submit
            </Button>
            <br />
            <br />
          </form>
        </div>
      </div>
    </div>
  );
};

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


export default EditCourseView;
