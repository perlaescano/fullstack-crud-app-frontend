import React, { Component } from "react";
import {useEffect} from 'react';
import PropTypes from "prop-types";
import {connect} from 'react-redux';
import {deleteCourseThunk, fetchAllCoursesThunk} from '../../store/thunks';
import {AllCoursesView} from '../views';

const AllCoursesContainer = ({fetchAllCourses, allCourses, deleteCourse}) => {
    useEffect(fetchAllCourses, [fetchAllCourses]);
    return (
        <AllCoursesView
            students={allCourses}
            deleteStudent={deleteCourse}
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