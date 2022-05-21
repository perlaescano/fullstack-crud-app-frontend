import PropTypes from "prop-types";
import {useStyles} from "../Styles";
import NavigableContainer from "../containers/NavigableContainer";
import useWindowDimensions from "../../utils/WindowDimensions";
import {CourseCard} from "../cards/CourseCard";
import {Button, Card, CardActions} from '@mui/material';
import {Link} from "react-router-dom";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import React, { Component }  from 'react';


const CARD_HEIGHT = 130;
const CARD_WIDTH = 1.7125 * CARD_HEIGHT;

const NewCourse = () => {
  return (
    <Card raised>
            <CardActions>
                <Link to={`newcourse`}>
                    <Button aria-label="Add New Course" startIcon={<AddCircleIcon/>}>
                        Add New Course
                    </Button>
                </Link>
            </CardActions>
        </Card>
    );
  }

  const AllCoursesView = ({ courses, deleteCourse }) => {
      const classes = useStyles();
      const { width: pageWidth } = useWindowDimensions();
      const numColumns = Math.round(Math.max(pageWidth / CARD_WIDTH, 1));
  
      if (!courses.length) {
          return (
            <NavigableContainer classes={classes}>
                <p>There are no courses.</p>
                <div style={{
                    display: "inline-grid",
                    gridTemplateColumns: `repeat(${numColumns}, 1fr)`,
                    gridGap: "10px",
                }}>
                    <NewCourse/>
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
                  <NewCourse classes={classes}/>
                  {courses.map(course => <CourseCard
                      key={course.id}
                      classes={classes}
                      deleteFn={deleteCourse}
                      cardHeight={CARD_HEIGHT}
                      object={course}/>)}
              </div>
          </NavigableContainer>
      );
  };
  
  AllCoursesView.propTypes = {
      courses: PropTypes.array.isRequired,
      deleteCourse: PropTypes.func.isRequired,
  };
  
  export default AllCoursesView; 