import {makeStyles} from '@mui/styles';
//import NavigableContainer from "../containers/NavigableContainer";
//import InstructorForm from "../forms/InstructorForm";
import React, { Component }  from 'react';
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";



const NewInstructorView = ({handleChange, handleSubmit}) => {
const instructors = useStyles();
return (
  <div>
        <h1>New Instructor</h1>

        <div className={instructors.root}>
          <div className={instructors.formContainer}>
            <div className={instructors.formTitle}>
              <Typography
                style={{
                  fontWeight: "bold",
                  fontFamily: "Courier, sans-serif",
                  fontSize: "20px",
                  color: "#11153e",
                }}
              >
                Add an Instructor
              </Typography>
            </div>
            <form
              style={{ textAlign: "center" }}
              onSubmit={(e) => handleSubmit(e)}
            >
              <label style={{ color: "#11153e", fontWeight: "bold" }}>
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

              <label style={{ color: "#11153e", fontWeight: "bold" }}>
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

              <label style={{ color: "#11153e", fontWeight: "bold" }}>
                Image URL:{" "}
              </label>
              <input
                type="text"
                name="ImageURL"
                onChange={(e) => handleChange(e)}
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


export default NewInstructorView;
