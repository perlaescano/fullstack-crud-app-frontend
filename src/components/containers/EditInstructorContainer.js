import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { fetchInstructorThunk, editInstructorThunk } from "../../store/thunks";
import EditInstructorView from "../views/EditInstructorView";

class EditInstructorContainer extends Component {
  constructor(props){
      super(props);
      this.state = {
        firstname:"",
        lastname:"",
        department:"",
        imageurl:"",
        redirect: false,
        redirectId: null
      };
  }

  componentDidMount() {
    this.props.fetchInstructor(this.props.match.params.id);
  }

  componentDidUpdate(originProp) {
    if (this.props.instructor !== originProp.instructor) {
      this.setState((prev) => {
        return {
          ...prev,...this.props.instructor,
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

    let instructor = {
      firstname: this.state.firstname,
      lastname:this.state.lastname,
      department:this.state.department,
      imageurl: this.state.imageUrl,
    };
    await this.props.editInstructor(instructor);

    this.setState((prev) => {
      return {
        ...prev,
        redirect: true,
        redirectId: instructor.id,
      };
    });
  };

  componentWillUnmount() {
    this.setState({ redirect: false, redirectId: null });
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={`/instructor/${this.state.redirectId}`} />;
    }

    return (
      <div>
        <EditInstructorView
          instructor={this.state}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    campus: state.instructor,
  };
};

const mapDispatch = (dispatch) => {
  return {
    fetchInstructor: (id) => dispatch(fetchInstructorThunk(id)),
    editInstructor: (instructor) => dispatch(editInstructorThunk(instructor)),
  };
};

export default connect(mapState, mapDispatch)(EditInstructorContainer);
