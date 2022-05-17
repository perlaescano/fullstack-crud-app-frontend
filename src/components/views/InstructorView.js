import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";

const InstructorView = (props) => {
  const {instructor} = props;
  return (
    <div> 
      <tr>
      <td><img src={instructor.imageUrl} width="200" alt="instructor"/></td>
      <td><h1>{instructor.firstName}, {instructor.lastName}</h1></td>
      <td><p>{instructor.department}</p></td>
      <td><p>{instructor.imageUrl}</p></td>
      </tr>
      <ul>
      
      {instructor.courses.map( course => {
        return (
          <li key={course.id}>{course.title}</li>
        );
      })}
      </ul>
    
      <Link to={'/'} >
            <Button variant="contained" color="blue" style={{marginRight: '10px'}}>
              HOME
            </Button>
      </Link> 
      <Link to={'/instructors'} >
            <Button variant="contained" color="blue" style={{marginRight: '10px'}}>
              ALL INSTRUCTORS
            </Button>
      </Link> 
    </div>
  );

};

export default InstructorView;