import { Link } from "react-router-dom";
import React, { Component }  from 'react';
import Button from "@material-ui/core/Button";

const AllCoursesView = (props) => {
  let {courses, deleteCourse} = props;
  //courses = [{id: 300, title: "hello"}]
  // Check if there are courses
  if (!courses.length) {
    return (
    <div>
      <h1>There are no courses</h1>
      <Link to={`/newcourse`}>
        <Button style = {{backgroundColor: "#7d0aff", color:"white"}}>Add New Course</Button>
      </Link>
    </div>
    );
  }

  return (
    <div>
      {courses.map((course) => {
        let title = course.title;
        return (
          <div key={course.id}>
          <Link to={`/course/${course.id}`}>
            <h1>{title}</h1>
          </Link>
          <button onClick={() => deleteCourse(course.id)}>Delete</button>
          </div>
        );
      }
      )}
      <Link to={`/newcourse`}>
        <button>Add New Course</button>
      </Link>
    </div>
  );
};


export default AllCoursesView;
