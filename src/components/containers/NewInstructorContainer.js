import { Component } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addInstructorThunk } from '../../store/thunks';
import {NewInstructorView} from "../views";
import React from 'react';
import { Redirect } from "react-router-dom";


class NewInstructorContainer extends Component {
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

    handleChange = (event) => this.setState({
        [event.target.name]: event.target.value
      });

    handleSubmit = async event => {
        event.preventDefault();
        let instructor = {
          firstname: this.state.firstname,
          lastname:this.state.lastname,
          department:this.state.department,

        };

        let newInstructor = await this.props.addInstructor(instructor);

        this.setState({
          firstname: "",
          lastname:"",
          department:"",
          imageurl:"",
          redirect: true,
          redirectId: newInstructor.id,
        });
      };
      /*
        const { redirectId: oldRedirectId } = this.state;

        const { id: redirectId } = await this.props.addInstructor(instructor);
        this.setState({ redirectId });
        */

    componentWillUnmount() {
       this.setState({  redirect: false,redirectId: null });
    }

    render() {
      if (this.state.redirectId !== null) {
        return (<Redirect to={`/instructor/${this.state.redirectId}`}/>)
        }
        return (
          <div>
            <NewInstructorView
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            />
          </div>

        );
    }
  }

  const mapDispatchToProps = (dispatch) => {
    return ({
        addInstructor: (instructor) => dispatch(addInstructorThunk(instructor)),
      })
  }

  export default connect(null, mapDispatchToProps)(NewInstructorContainer);
