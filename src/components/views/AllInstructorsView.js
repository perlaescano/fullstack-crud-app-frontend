import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import React, { Component }  from 'react';
import Button from "@material-ui/core/Button";


const AllInstructorsView = (props) => {
    const { allInstructors, deleteInstructor } = props;
  // Check if there are instructors
  if (!allInstructors.length) {
    return (
    <div>
      <h1>There are no instructors</h1>
      <div>
        <Link to={`/newInstructor`}>
          <Button style = {{backgroundColor: "#7d0aff", color:"white"}}>Add New Instructor</Button>
        </Link>
      </div>
    </div>
    )
  }

  return (

    <div>
      <div>
        <Link to={`/newInstructor`}>
          <Button>Add New Instructor</Button>
        </Link>
      </div>
      <h1>All Instructors</h1>
      {allInstructors.map((instructor) => {
        let name = instructor.firstname + " " + instructor.lastname;
        return (
          <div key={instructor.id}>
          <img src={instructor.imageurl} alt={instructor.firstname + instructor.lastname} height="50px" />
          <Link to={`/instructor/${instructor.id}`}>
            <h1>{name}</h1>
          </Link>
          <p>{instructor.department}</p>
          <Button onClick={() => deleteInstructor(instructor.id)}>Delete</Button>
        </div>
        );

      })}

    </div>

  );
};

AllInstructorsView.propTypes = {
  allInstructors: PropTypes.array.isRequired,
};

export default AllInstructorsView;
