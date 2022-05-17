import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";

const InstructorView = (props) => {
  const {instructor} = props;
  return (
    <div> 
      
      <img src={instructor.imageUrl} width="200" alt="instructor"/>
      <h1>{instructor.firstName}, {instructor.lastName}</h1>
      <p>{instructor.department}</p>
      <p>{instructor.imageUrl}</p>
      
      <ul>
      
      {instructor.courses.map( course => {
        return (
          <li key={course.id}>{course.title}</li>
        );
      })}
      </ul>
    </div>
  );

};

export default InstructorView;