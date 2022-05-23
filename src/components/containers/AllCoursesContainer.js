import React, { Component } from "react";
import {useEffect} from 'react';
import PropTypes from "prop-types";
import {connect} from 'react-redux';
import {deleteCourseThunk, fetchAllCoursesThunk} from '../../store/thunks';
import {AllCoursesView} from '../views';
import {Button} from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import {Link} from "react-router-dom";
import {useStyles} from "../Styles";

const NewCourse = ({courseName}) => {
  return (
              <Link classname = {courseName} to={`newCourse`}>
                  <Button aria-label="Add New Instructor" startIcon={<AddCircleIcon/>}>
                      Add New Instructor
                  </Button>
              </Link>
  );
}


const AllCoursesContainer = ({fetchAllCourses, allCourses, deleteCourse}) => {
    useEffect(fetchAllCourses, [fetchAllCourses]);
    return (
        <AllCoursesView
            Courses={allCourses}
            deleteCourse={deleteCourse}
        />
    )
}

// Map state to props;
const mapState = state => ({
    allCourses: state.allCourses,

});

// Map dispatch to props;
const mapDispatch = dispatch => ({

    fetchAllCourses: () => dispatch(fetchAllCoursesThunk()),
    deleteCourse: courseId => dispatch(deleteCourseThunk(courseId)),

});

// Type check props;
AllCoursesContainer.propTypes = {
  allCourses: PropTypes.array.isRequired,
  fetchAllCourses: PropTypes.func.isRequired,
};

export default connect(mapState, mapDispatch)(AllCoursesContainer);
