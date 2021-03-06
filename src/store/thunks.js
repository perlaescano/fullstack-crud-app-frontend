import * as ac from './actions/actionCreators';
const axios = require('axios');

//PATH (should be where your server is running)
let path = "http://localhost:5000/api";

// THUNKS

//All instructors
export const fetchAllInstructorsThunk = () => async (dispatch) => {
  try {
    let res = await axios.get(`${path}/instructors`);
    dispatch(ac.fetchAllInstructors(res.data));
  } catch(err) {
    console.error(err);
  }
};

//Single instructor
export const fetchInstructorThunk = (id) => async (dispatch) => {
  // thunk creator would not an be async function
  // if using Promise.then:
  // return axios
  //   .get(`${path}/api/instructors/${id}`)
  //   .then((res) => res.data)
  //   .then((instructor) => dispatch(ac.fetchInstructor(instructor)))
  //   .catch((err) => console.log(err));
  try {
    let res = await axios.get(`${path}/instructors/${id}`);
    dispatch(ac.fetchInstructor(res.data));
  } catch(err) {
    console.error(err);
  }
};

// Add instructor
export const addInstructorThunk = instructor => async (dispatch) => {
    try {
        //post an instructor to the list of instructors
        let res = await axios.post(`/api/instructors`, instructor);
        dispatch(ac.addInstructor(res.data));
        return res.data;
    } catch (err) {
        console.error(err);
    }
};

// Edit instructor
export const editInstructorThunk = instructor => async dispatch => {
    try {
        // put the edit into the instructor at that instructor id
        let updatedInstructor = await axios.put(`/api/instructors/${instructor.id}`, instructor);
        dispatch(ac.editInstructor(updatedInstructor.data));
    } catch (err) {
        console.error(err);
    }
};

// Delete Instructor
export const deleteInstructorThunk = instructorId => async dispatch => {
    try {
        // Using axios delete
        await axios.delete(`/api/instructors/${instructorId}`);
        dispatch(ac.deleteInstructor(instructorId));
    } catch (err) {
        console.error(err);
    }
};

//All courses
export const fetchAllCoursesThunk = () => async (dispatch) => {
  try {
    let res = await axios.get(`/api/courses`);
    dispatch(ac.fetchAllCourses(res.data));
  } catch(err) {
    console.error(err);
  }
};



export const addCourseThunk = (course) => async (dispatch) => {
  // course = { title: "CSCI 127" }
  try {
    let res = await axios.post(`/api/courses`, course);
    dispatch(ac.addCourse(res.data));
    return res.data;
  } catch(err) {
    console.error(err);
  }
};

export const deleteCourseThunk = courseId => async dispatch => {
  try {
    await axios.delete(`/api/courses/${courseId}`);
    //delete succesful so change state with dispatch
    dispatch(ac.deleteCourse(courseId));
  } catch(err) {
    console.error(err);
  }
};

export const editCourseThunk = course => async dispatch => {
  try {
    let updatedCourse = await axios.put(`/api/courses/${course.id}`, course);
    dispatch(ac.editCourse(updatedCourse));
  } catch(err) {
    console.error(err);
  }
};

//Single course
export const fetchCourseThunk = id => async dispatch => {
  try {
    let res = await axios.get(`/api/courses/${id}`);
    dispatch(ac.fetchCourse(res.data));
  } catch(err) {
    console.error(err);
  }
};
