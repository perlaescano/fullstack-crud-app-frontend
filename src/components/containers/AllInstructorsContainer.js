import {useStyles} from "../Styles";
import NavigableContainer from "../containers/NavigableContainer";
import useWindowDimensions from "../../utils/WindowDimensions";
import {InstructorCard} from "../cards/CampusCard";
import {Button, Card, CardActions} from "@mui/material";
import {Link} from "react-router-dom";
import AddCircleIcon from "@mui/icons-material/AddCircle";

import { AllInstructorsView } from "../views";

const CARD_HEIGHT = 130;
const CARD_WIDTH = 1.9125 * CARD_HEIGHT;

const NewInstructor = () => {
  return (
      <Card raised>
          <CardActions>
              <Link to={`newInstructor`}>
                  <Button aria-label="Add New Instructor" startIcon={<AddCircleIcon/>}>
                      Add New Instructor
                  </Button>
              </Link>
          </CardActions>
      </Card>
  );
}


const AllIntructorsView = ({ instructors, deleteInstructor }) => {
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
              {instructor.map(instructor => <InstructorCard
                  key={instructor.id}
                  classes={classes}
                  deleteFn={deleteInstructor}
                  cardHeight={CARD_HEIGHT}
                  object={instructor}/>)}
          </div>
      </NavigableContainer>
  );
  };

  AllInstructorsView.propTypes = {
    instructors: PropTypes.array.isRequired,
    deleteInstructor: PropTypes.func.isRequired,
  };
  
  export default AllInstructorsView;