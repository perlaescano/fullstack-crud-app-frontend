import { Link,useHistory } from "react-router-dom";
import React, { Component }  from 'react';
import Button from "@material-ui/core/Button";

const InstructorView = (props) => {
  const {instructor, editCourse, allCourses} = props;
  const history = useHistory();
  let assignedCourses = allCourses.filter(course => course.instructorId===instructor.id);
  let availableCourses = allCourses.filter(course => course.instructorId!==instructor.id);
  if(!instructor) return <h1>No Instructor Found</h1>
  return (
    <div>
      <img src={instructor.imageurl} alt={instructor.firstname + instructor.lastname} height="150px" />
      <h1>{instructor.firstname}</h1>
      <h3>{instructor.department}</h3>
      <Button onClick={() => {history.push(`/instructor/${instructor.id}/edit`);}}>Edit Instructor</Button>      
          <div style={{display: "flex", flexDirection: "row", justifyContent: "space-evenly"}}>
        <div>Assigned courses:
        {assignedCourses.map( course => {
          return (
            <div key={course.id}>
            <Link to={`/course/${course.id}`}>
              <h4>{course.title}</h4>
            </Link>
            <Button onClick={() => editCourse({id:course.id, instructorId: null})}>x</Button>
            </div>
          );
        })}</div>
        <div>Available courses:
        {availableCourses.map( course => {
          return (
            <div key={course.id}>
            <Link to={`/course/${course.id}`}>
              <h4>{course.title}</h4>
            </Link>
            <button onClick={() => editCourse({id:course.id, instructorId: instructor.id})}>+</button>
            </div>
          );
        })}</div>

      </div>


    </div>
  );

};

export default InstructorView;
