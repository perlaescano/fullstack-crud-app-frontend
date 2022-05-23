import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import React, { Component }  from 'react';
import Button from "@material-ui/core/Button";


const AllInstructorsView = (props) => {
    const { allInstructors, deleteInstructors } = props;
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
      {allInstructors.map((instructor) => {
        let name = instructor.firstname + " " + instructor.lastname;
        return (
          <div key={instructor.id}>
          <Link to={`/instructor/${instructor.id}`}>
            <h1>{name}</h1>
          </Link>
          <p>{instructor.department}</p>
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
