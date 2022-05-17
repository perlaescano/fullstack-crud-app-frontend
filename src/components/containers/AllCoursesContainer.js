import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Component } from 'react';
import { withRouter } from "react-router-dom";


import { 
  fetchAllCoursesThunk,
  deleteCourseThunk
} from '../../store/thunks';

import AllCoursesView from '../views/AllCoursesView';

class AllCoursesContainer extends Component {
    componentDidMount() {
      this.props.fetchAllCourses();
    }
    render(){
        return(
            <div>
                <AllCoursesView 
                  courses={this.props.allCourses}
                  deleteCourse={this.props.deleteCourse}   
                />
            </div>
        )
    }
}

// Map state to props;
const mapState = (state) => {
  return {
    allCourses: state.allCourses,
  };
};

// Map dispatch to props;
const mapDispatch = (dispatch) => {
  return {
    fetchAllCourses: () => dispatch(fetchAllCoursesThunk()),
    deleteCourse: (courseId) => dispatch(deleteCourseThunk(courseId)),
  };
};

AllCoursesView.propTypes = {
  allCourses: PropTypes.array.isRequired,
}; 

export default withRouter(connect(mapState, mapDispatch)(AllCoursesContainer));