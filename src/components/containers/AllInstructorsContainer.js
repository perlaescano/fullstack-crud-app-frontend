import {useStyles} from "../Styles";
import {useEffect} from 'react';
import NavigableContainer from "../containers/NavigableContainer";
import useWindowDimensions from "../../utils/WindowDimensions";
import {InstructorCard} from "../cards/InstructorCard";
import {Button, Card, CardActions} from "@mui/material";
import {Link} from "react-router-dom";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import React, { Component }  from 'react';
import PropTypes from "prop-types";


import { AllInstructorsView } from "../views";

const CARD_HEIGHT = 130;
const CARD_WIDTH = 1.9125 * CARD_HEIGHT;

const NewInstructor = ({courseName}) => {
  return (
              <Link classname = {courseName} to={`newInstructor`}>
                  <Button aria-label="Add New Instructor" startIcon={<AddCircleIcon/>}>
                      Add New Instructor
                  </Button>
              </Link>
  );
}


const AllInstructorsContainer = ({ instructors, deleteInstructor, fetchAllInstructors }) => {
  useEffect(fetchAllInstructors, [fetchAllInstructors]);
  const classes = useStyles();
  const { width: pageWidth } = useWindowDimensions();
  const numColumns = Math.round(Math.max(pageWidth / CARD_WIDTH, 1));
  if (!instructors.length) {
      return (
          <NavigableContainer classes={classes}>
              <p>There are no intructors.</p>
              <div style={{
                  display: "inline-grid",
                  gridTemplateColumns: `repeat(${numColumns}, 1fr)`,
                  gridGap: "10px",
              }}>
                  <NewInstructor/>
              </div>
          </NavigableContainer>
      );
  }
  return (
      <NavigableContainer classes={classes}>
          <div style={{
              display: "inline-grid",
              gridTemplateColumns: `repeat(${numColumns}, 1fr)`,
              gridGap: "10px",
          }}>
              <NewInstructor/>
              {instructors.map(instructors => <InstructorCard
                  key={instructors.id}
                  classes={classes}
                  deleteFn={deleteInstructor}
                  cardHeight={CARD_HEIGHT}
                  object={instructors}/>)}
          </div>
      </NavigableContainer>
  );
  };

  AllInstructorsContainer.propTypes = {
    instructors: PropTypes.array.isRequired,
    deleteInstructor: PropTypes.func.isRequired,
  };

  export default AllInstructorsContainer;
