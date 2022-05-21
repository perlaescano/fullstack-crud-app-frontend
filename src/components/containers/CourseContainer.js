import React, { Component } from "react";
import { connect } from "react-redux";
//import { fetchCourseThunk } from "../../store/thunks";
import { editCourseThunk, fetchCourseThunk } from "../../store/thunks";
import { CourseView } from "../views";

class CourseContainer extends Component {

  handleChange = event => this.setState(prevState => ({
    editedCourse: {
        ...prevState.editedCourse,
        [event.target.name]: event.target.value
    }
}));


cancelFrom = event => this.setState({
    editedCourse: {},
    cancelForm: null,
    handleChange: null
});

handleSubmit = async event => {
    event.preventDefault();
    if (this.state.handleChange) { // submit button
        // do the submission
        await this.props.editCourse({
            ...this.state.editedCourse,
            id: this.props.course.id
        });
        this.cancelFrom(event);
    } else { // its the edit button
        this.setState({
            editedCourse: {},
            cancelForm: this.cancelFrom,
            handleChange: this.handleChange // set handleChange to actually do things
        });


    }
}

componentDidMount() {
    this.props.fetchCourse(this.props.match.params.id);
}

render() {
    return (
        <CourseView
            student={this.props.course}
            cancelForm={this.state.cancelForm}
            handleChange={this.state.handleChange}
            handleSubmit={this.handleSubmit}
        />
    );
}
}
// map state to props
const mapState = state => {
  return {
    course: state.course,
  };
};

// map dispatch to props
const mapDispatch = (dispatch) => {
  return {
    fetchCourse: (id) => dispatch(fetchCourseThunk(id)),
    editCourse: course => dispatch(editCourseThunk(course))
  };
};

export default connect(mapState, mapDispatch)(CourseContainer);
