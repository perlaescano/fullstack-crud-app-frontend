import { Component } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import NewCourseView from '../views/NewCourseView';
import { addCourseThunk } from '../../store/thunks';
import React from 'react';


class NewCourseContainer extends Component {
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
        const { redirectId: oldRedirectId, ...course } = this.state;

        const { id: redirectId } = await this.props.addCourse(course);
        this.setState({ redirectId });


    }

    componentWillUnmount() {
       this.setState({  redirectId: null });
    }

    render() {
      if (this.state.redirectId !== null) {
        return (<useNavigate to={`/course/${this.state.redirectId}`}/>)
        }
        return (
          <NewCourseView
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
         />
        );
    }
  }

const mapDispatchToProps = (dispatch) => {
  return ({
      addCourse: (course) => dispatch(addCourseThunk(course)),
    })
}

export default connect(null, mapDispatchToProps)(NewCourseContainer);
