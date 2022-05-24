import "./App.css";

//Router
import { Route , Switch} from "react-router-dom";

//Components
import {
  HomePageContainer,
  InstructorContainer,
  CourseContainer,
  AllInstructorsContainer,
  AllCoursesContainer,
  NewCourseContainer,
  NewInstructorContainer,
  EditInstructorContainer,
  EditCourseContainer,
} from './components/containers';
import React, { Component }  from 'react';
import NavBar from './components/navBar'
// if you create separate components for adding/editing
// a student or instructor, make sure you add routes to those
// components here

const App = () => {
  return (
    <div className="App">
      <NavBar/>
      <Switch>
        <Route exact path="/" component={HomePageContainer} />
        <Route exact path="/instructors" component={AllInstructorsContainer} />
        <Route exact path="/instructor/:id" component={InstructorContainer} />
        <Route exact path="/instructor/:id/edit" component={EditInstructorContainer} />
        <Route exact path="/courses" component={AllCoursesContainer} />
        <Route exact path="/newcourse" component={NewCourseContainer} />
        <Route exact path="/newInstructor" component={NewInstructorContainer} />
        <Route exact path="/course/:id" component={CourseContainer} />
        <Route exact path="/course/:id/edit" component={EditCourseContainer} />

      </Switch>
    </div>
  );
}

export default App;
