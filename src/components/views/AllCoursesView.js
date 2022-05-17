import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {Button} from "@material-ui/core";
import { VscError } from "react-icons/vsc";
const AllCoursesView = (props) => {
  let {courses, deleteCourse} = props;
  //courses = [{id: 300, title: "hello"}]
  if (!courses.length) {
    return (
    <div>
      <p>There are no courses.</p>
      <Link to={`/newcourse`}>
        <button>Add New Course</button>
      </Link>
    </div>
    );
  }
  
  return (
    <div>
      {courses.map((course) => {
        let title = course.title;
        return (
          <div key={course.id}>
          <Link to={`/course/${course.id}`}>
            <h1>{title}</h1>
          </Link>
          
          <button onClick={() => deleteCourse(course.id)}>Delete</button>
          <Link to={'/'} >
            <Button variant="contained" color="blue" style={{marginRight: '10px'}}>
              HOME
            </Button>
          </Link> 
          </div>
        );
      }
      )}
      <Link to={`/newcourse`}>
        <button>Add New Course</button>
      </Link>
    </div>

  
  );
};

AllCoursesView.propTypes = {
  allCourses: PropTypes.array.isRequired,
};

export default AllCoursesView;