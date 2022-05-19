import {
  ADD_COURSE,
  DELETE_INSTRUCTOR,
  DELETE_COURSE,
  EDIT_INSTRUCTOR,
  EDIT_COURSE,
  FETCH_INSTRUCTOR
} from "../actions/actionTypes";
import courses from "./courses";

const initialState = {
  courses: [],
};

const instructor = (state = initialState, action) => {

  switch (action.type) {
    case FETCH_INSTRUCTOR:
    case EDIT_INSTRUCTOR:
        return action.payload;
    case DELETE_INSTRUCTOR:
        return initialState;
    case ADD_COURSE:
        return {
            ...state,
            courses: courses(state.courses, action.payload)
        }
    case DELETE_COURSE:
        return {
            ...state,
            courses: courses(state.courses, action.payload)
        }
    case EDIT_COURSE:
        if (state.courses.some(course => course.id === action.payload.id))
            if (state.id !== action.payload.instructorId)
                return instructor(state, {
                    payload: action.payload.id,
                    type: DELETE_COURSE });
            else
                return {
                    ...state,
                    courses: courses(state.courses, action)
                };
        else if (state.id === action.payload.instructorId)
            return instructor(state, {...action, type: ADD_COURSE})
        else
            return state;
    default:
        return state;
}
};

export default instructor; 