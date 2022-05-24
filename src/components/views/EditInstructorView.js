import React from 'react';
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const EditInstructorView = (props) => {
  const { instructor, handleChange, handleSubmit } = props;
  if (!instructor.id){
    return <h1>No instructors available</h1>;
  }
  const courses = useStyles();
  return (
    <div>
      <h1>Edit Instructor</h1>
      <div className={courses.root}>
        <div className={courses.courseFormContainer}>
          <div className={courses.courseFormTitle}>
            <Typography
              style={{fontWeight: "bold", fontSize: "20px",color: "white",fontFamily: "Courier, sans-serif",}}>
              Edit an Instructor
            </Typography>
          </div>
          <form
            style={{ textAlign: "center" }}
            onSubmit={(e) => handleSubmit(e)}
          >
            <label style={{ color: "black", fontWeight: "bold" }}>
              First Name:{" "}
            </label>
            <input
              type="text"
              name="firstname"
              onChange={(e) => handleChange(e)}
              value={instructor.firstname}
              required
            />
            <br />
            <br />

            <label style={{ color: "black", fontWeight: "bold" }}>
              Last Name:{" "}
            </label>
            <input
              type="text"
              name="lastname"
              onChange={(e) => handleChange(e)}
              value={instructor.lastname}
              required
            />
            <br />
            <br />
            <label style={{ color: "black", fontWeight: "bold" }}>
              Department:{" "}
            </label>
            <input
              type="text"
              name="department"
              onChange={(e) => handleChange(e)}
              value={instructor.department}
              required
            />
            <br />
            <br />

            <label style={{ color: "black", fontWeight: "bold" }}>
              ImageURL:{" "}
            </label>
            <input
              type="text"
              name="ImageURL"
              onChange={(e) => handleChange(e)}
              value={instructor.imageurl}
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



export default EditInstructorView;
