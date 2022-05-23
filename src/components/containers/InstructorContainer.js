import React, { Component } from "react";
import { connect } from "react-redux";
import {fetchInstructorThunk, deleteInstructorThunk, editInstructorThunk, deleteCourseThunk} from "../../store/thunks";
import { InstructorView } from "../views";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import {Link} from "react-router-dom";
import {Button} from "@mui/material";

const InstructorContainer = ({instructor: object,
                              fetchInstructor,
                              deleteInstructor,
                              editInstructor: editObject,
                              deleteCourse
                              history, match}) =>{
    const addCourse = ({courseName}) =>
      <Link className={courseName} to={{pathname: "/newcourse", search: `?courseId=${object.id}`}}>
          <Button aria-label="Add New Instructor" startIcon={<AddCircleIcon/>}>
            Add New Course
          </Button>
      </Link>;
    const deleteObject = () => {
      deleteInstructor(object.id);
      history.goBack();
    }
    const fetchObject = () => fetchInstructor(match.params.id);
    return (
      <InstructorView
        instructor={this.props.instructor}
      />
    );

}

// map state to props
const mapState = (state) => {
  return {
    instructor: state.instructor,
  };
};

// map dispatch to props
const mapDispatch = (dispatch) => {
  return {
    fetchInstructor: (id) => dispatch(fetchInstructorThunk(id)),
    deleteInstructor: (id) => dispatch(deleteInstructorThunk(id)),
    deleteCourse: (id) => dispatch(deleteInstructorThunk(id)),
    editInstructor: (instructor) => dispatch(editInstructorThunk(instructor)),
  };
};

export default connect(mapState, mapDispatch)(InstructorContainer);
