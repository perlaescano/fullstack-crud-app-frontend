import { Component } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
//import NewInstructorView from '../views/NewInstructorView';
import { addInstructorThunk } from '../../store/thunks';
import {NewInstructorView} from "../views";
import React from 'react';


class NewInstructorContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
          firstname:"",
          lastname:"",
          department:"",
          imageurl:"",
          redirectId: null
        };
    }

    handleChange = event => this.setState({
        [event.target.name]: event.target.value
      });

    handleSubmit = async event => {
        event.preventDefault();
        let instructor = {
          firstname: this.state.firstname,
          lastname:this.state.lastname,
          department:this.state.department,
          imageurl:this.state.department,
          redirectId:null

        };
        const { redirectId: oldRedirectId } = this.state;

        const { id: redirectId } = await this.props.addInstructor(instructor);
        this.setState({ redirectId });


    }

    componentWillUnmount() {
       this.setState({  redirectId: null });
    }

    render() {
      if (this.state.redirectId !== null) {
        return (<useNavigate to={`/instructor/${this.state.redirectId}`}/>)
        }
        return (
          <NewInstructorView
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
         />
        );
    }
  }

  const mapDispatchToProps = (dispatch) => {
    return ({
        addInstructor: (instructor) => dispatch(addInstructorThunk(instructor)),
      })
  }

  export default connect(null, mapDispatchToProps)(NewInstructorContainer);
