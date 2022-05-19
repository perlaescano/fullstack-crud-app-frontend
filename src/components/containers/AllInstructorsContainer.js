import {useEffect} from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {deleteInstructorThunk, fetchAllInstructorsThunk } from "../../store/thunks";

import { AllInstructorsView } from "../views";

const AllInstructorsContainer = ({ fetchAllInstructors, allInstructors, deleteInstructor }) => {
  useEffect(fetchAllInstructors, [fetchAllInstructors]);

    return (
      <AllInstructorsView
            instructors={allInstructors}
            deleteInstructor={deleteInstructor}
        />
    );
  
};

// Map state to props;
const mapState = state => ({
    allInstructors: state.allInstructors,
});

// Map dispatch to props;
const mapDispatch = dispatch => ({
    fetchAllInstructors: () => dispatch(fetchAllInstructorsThunk()),
    deleteInstructor: instructorId => dispatch(deleteInstructorThunk(intructorId))
});
// Type check props;
AllInstructorsContainer.propTypes = {
  allInstructors: PropTypes.array.isRequired,
  fetchAllInstructors: PropTypes.func.isRequired,
};

// Export our store-connected container by default;
export default connect(mapState, mapDispatch)(AllInstructorsContainer);