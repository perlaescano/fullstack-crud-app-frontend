import {DELETE_INSTRUCTOR, DELETE_COURSE, EDIT_INSTRUCTOR, EDIT_COURSE, FETCH_COURSE} from "../actions/actionTypes";


const initialState = {


  instructor: {},
};

// REDUCER;
const course = (state = initialState, action) => {
  switch (action.type) {
      case DELETE_INSTRUCTOR:
          return {
              ...state,
              instructor: initialState.instructor
          };
      case EDIT_INSTRUCTOR:
          return action.payload.id === state.instructorId ? {
              ...state,
              instructor: action.payload
          } : state;
      case FETCH_COURSE:
      case EDIT_COURSE:
          return action.payload;
      case DELETE_COURSE:
          return initialState;
      default:
          return state;
  }
};



export default course;