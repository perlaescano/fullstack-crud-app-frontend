import {makeStyles} from '@mui/styles';
import React, { Component }  from 'react';
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";



const NewInstructorView = ({handleChange, handleSubmit}) => {
const instructors = useStyles();
return (
  <div>
        <h1>New Instructor</h1>

        <div className={instructors.root}>
          <div className={instructors.instructorFormContainer}>
            <div className={instructors.instructorFormTitle}>
              <Typography
                style={{
                  fontWeight: "bold", fontSize: "20px", color: "white",fontFamily: "Courier, sans-serif",
                }}
              >
                Add an Instructor
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
                name="First Name"
                onChange={(e) => handleChange(e)}
                required
              />
              <br />
              <br />

              <label style={{ color: "black", fontWeight: "bold" }}>
                Last Name:{" "}
              </label>
              <input
                type="text"
                name="Last Name"
                onChange={(e) => handleChange(e)}
                required
              />
              <br />
              <br />
              <label style={{ color: "black", fontWeight: "bold" }}>
                Department:{" "}
              </label>
              <input
                type="text"
                name="Department"
                onChange={(e) => handleChange(e)}
              />
              <br />
              <br />
              <label style={{ color: "black", fontWeight: "bold" }}>
                Image URL:{" "}
              </label>
              <input
                type="text"
                name="ImageURL"
                onChange={(e) => handleChange(e)}
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
}

const useStyles = makeStyles(() => ({
  instructorFormContainer: {
    width: "500px",
    backgroundColor: "#f0f0f5",
    borderRadius: "5px",
    margin: "auto",
  },
  instructorFormTitle: {
    backgroundColor: "#7d0aff",
    marginBottom: "15px",
    textAlign: "center",
    borderRadius: "5px 5px 0px 0px",
    padding: "3px",
  },
}));


export default NewInstructorView;
