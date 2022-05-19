import * as ac from './actions/actionCreators';

const axios = require('axios');

// THUNKS

//All instructors
export const fetchAllInstructorsThunk = () => async dispatch => {
  try {
      const res = await axios.get(`/api/instructors`);
      dispatch(ac.fetchAllInstructors(res.data));
  } catch (err) {
      console.error(err);
  }
};

export const addInstructorThunk = instructor => async dispatch => {
  try {
      const res = await axios.post(`/api/instructors`, instructor);
      dispatch(ac.addInstructor(res.data));
      return res.data;
  } catch (err) {
      console.error(err);
  }
};

export const deleteInstructorThunk = instructorId => async dispatch => {
  try {
      await axios.delete(`/api/instructors/${instructorId}`);
      dispatch(ac.deleteInstructor(instructorId));
  } catch (err) {
      console.error(err);
  }
};

export const editInstructorThunk = instructor => async dispatch => {
  try {
      const updatedInstructor = await axios.put(`/api/instructors/${instructor.id}`, instructor);
      dispatch(ac.editInstructor(updatedInstructor.data));
  } catch (err) {
      console.error(err);
  }
};


//Single instructor
export const fetchInstructorThunk = id => async dispatch => {
  try {
      let res = await axios.get(`/api/instructors/${id}`);
      dispatch(ac.fetchInstructor(res.data));
  } catch (err) {
      console.error(err);
  }
};

//All Courses
export const fetchAllCoursesThunk = () => async dispatch => {
  try {
      let res = await axios.get(`/api/courses`);
      dispatch(ac.fetchAllCourses(res.data));
  } catch (err) {
      console.error(err);
  }
};

export const addCourseThunk = course => async dispatch => {
  try {
      let res = await axios.post(`/api/courses`, course);
      dispatch(ac.addCourse(res.data));
      return res.data;
  } catch (err) {
      console.error(err);
  }
};

export const deleteCourseThunk = courseId => async dispatch => {

  try {
    await axios.delete(`/api/courses/${courseId}`);
    dispatch(ac.deleteCourse(courseId));
} catch (err) {
    console.error(err);
}
};

  try {
    const updatedCourse = await axios.put(`/api/courses/${course.id}`, course);
    dispatch(ac.editCourse(updatedCourse.data));
  } catch (err) {
    console.error(err);
  }
  };

//Single course
export const fetchCourseThunk = id => async dispatch => {


  try {
    const res = await axios.get(`/api/course/${id}`);
    dispatch(ac.fetchCourse(res.data));
} catch (err) {
    console.error(err);
}

};