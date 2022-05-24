import { Component } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Redirect } from "react-router-dom";
import NewCourseView from '../views/NewCourseView';
import { addCourseThunk } from '../../store/thunks';
import React from 'react';


class NewCourseContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
          title:"",
          timeslot:"",
          location:"",
          redirect:false,
          redirectId: null
        };
    }

    handleChange = event => this.setState({
        [event.target.name]: event.target.value,
      });

    handleSubmit = async event => {
        event.preventDefault();
        let course = {
          title: this.state.title,
          timeslot:this.state.timeslot,
          location:this.state.location,

        };
        console.log(course);

        let newCourse = await this.props.addCourse(course);

        this.setState({
          title:"",
          timeslot:"",
          location:"",
          redirect:true,
          redirectId:newCourse.id,
        });
    }

    componentWillUnmount() {
       this.setState({  redirect: false,redirectId: null, });
    }

    render() {
      if (this.state.redirect) {
        return (<Redirect to={`/course/${this.state.redirectId}`}/>)
        }
        return (
          <div>
            <NewCourseView
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
           />
          </div>
        );
    }
  }

const mapDispatchToProps = (dispatch) => {
  return ({
      addCourse: (course) => dispatch(addCourseThunk(course)),

    })
}

export default connect(null, mapDispatchToProps)(NewCourseContainer);
