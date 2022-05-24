import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import React, { Component }  from 'react';
import EditCourseView from "../views/EditCourseView";
import { fetchCourseThunk, editCourseThunk } from "../../store/thunks";

class EditCourseContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title:"",
      timeslot:"",
      location:"",
      redirect:false,
      redirectId: null
    };
  }
  componentDidMount() {
    this.props.fetchCourse(this.props.match.params.id);
  }

  componentDidUpdate(originProp) {
    if (this.props.course !== originProp.course) {
      this.setState((prev) => {
        return {
          ...prev,...this.props.course,
        };
      });
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    let course = {
      title: this.state.title,
      timeslot:this.state.timeslot,
      location:this.state.location,
    };

    await this.props.editCourse(course);

    this.setState((prev) => {
      return {
        ...prev,
        redirect: true,
        redirectId: course.id,
      };
    });
  };

  componentWillUnmount() {
    this.setState({ redirect: false, redirectId: null });
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={`/course/${this.state.redirectId}`} />;
    }

    return (
      <div>
        <EditCourseView
          course={this.state}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    student: state.course,
  };
};

const mapDispatch = (dispatch) => {
  return {
    fetchStudent: (id) => dispatch(fetchCourseThunk(id)),
    editStudent: (course) => dispatch(editCourseThunk(course)),
  };
};

export default connect(mapState, mapDispatch)(EditCourseContainer);
