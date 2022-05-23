import { Link, useHistory } from "react-router-dom";
import React, { Component }  from 'react';
import Button from "@material-ui/core/Button";


const CourseView = (props) => {
  const history = useHistory();
  const { course } = props;
  if(!course){
    return <h1>The course does not exist</h1>
  }
  return (
    <div>
      <h1>{course.title}</h1>
      {course.instructor ? <h3>{course.instructor.firstname + " " + course.instructor.lastname}</h3>: <h3>staff</h3>}
      <Button
        onClick={() => {
          history.push(`/course/${course.id}/edit`);
        }}
      >
        Edit Course Info
      </Button>
      {course.instructor ? (<Link to={`/instructor/${course.instructor.id}`}>{course.instructor.firstname + " " + course.instructor.lastname}</Link>) :
      (<p>No Instructor</p>)}
    </div>
  );

};

export default CourseView;
