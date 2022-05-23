import React, { Component } from "react";
import { connect } from "react-redux";
import {fetchInstructorThunk, deleteInstructorThunk, editInstructorThunk, deleteCourseThunk } from "../../store/thunks";
import { InstructorView } from "../views";

const InstructorContainer = ({instructor: object, fetchInstructor, deleteInstructor, editInstructor: editObject, deleteCourse}) =>{
  componentDidMount() {
    //getting instructor ID from url
    this.props.fetchInstructor(this.props.match.params.id);
  }

  render() {
    return (
      <InstructorView
        instructor={this.props.instructor}
      />
    );
  }
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
  };
};

export default connect(mapState, mapDispatch)(InstructorContainer);
