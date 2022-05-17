import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
const CourseView = (props) => {
  const { course } = props;
  return (
    <div>
      <h1>{course.title}</h1>
      <h3>{course.timeslot}</h3>
      <h3>{course.location}</h3>
      <h3>{course.instructor.firstName + " " + course.instructor.lastName}</h3>
      <Link to={'/'} >
            <Button variant="contained" color="blue" style={{marginRight: '10px'}}>
              HOME
            </Button>
      </Link> 
      <Link to={'/students'} >
            <Button variant="contained" color="blue" style={{marginRight: '10px'}}>
              ALL COURSES
            </Button>
      </Link> 
    </div>
  );

};

export default CourseView;