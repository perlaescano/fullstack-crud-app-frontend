import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import React, { Component }  from 'react';

const AllInstructorsView = (props) => {
    const { allInstructors, deleteInstructors } = props;
  if (!allInstructors.length) {
    return <div>There are no instructors.</div>;
  }

  return (
    <div>
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
