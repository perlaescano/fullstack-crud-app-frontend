import { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
//import NewInstructorView from '../views/NewInstructorView';
import { addInstructorThunk } from '../../store/thunks';
import {NewInstructorView} from "../views";
import React from 'react';


class NewInstructorContainer extends Component {
    constructor(props){
        super(props);
        this.state = {

          redirectId: null
        };
    }

    handleChange = event => this.setState({
        [event.target.name]: event.target.value
      });

    handleSubmit = async event => {
        event.preventDefault();
        const { redirectId: oldRedirectId, ...instructor } = this.state;

        const { id: redirectId } = await this.props.addInstructor(instructor);
        this.setState({ redirectId });


    }

    componentWillUnmount() {
       this.setState({  redirectId: null });
    }

    render() {
      if (this.state.redirectId !== null) {
        return (<Redirect to={`/course/${this.state.redirectId}`}/>)
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
