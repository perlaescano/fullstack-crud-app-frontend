import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {Button} from "@material-ui/core";
import { VscError } from "react-icons/vsc";
const AllInstructorsView = (props) => {
  if (!props.allInstructors.length) {
    return <div>There are no instructors.</div>;
  }

  return (
    <div>
      <tbody>
      {props.allInstructors.map((instructor) => {
        let name = instructor.firstName + " " + instructor.lastName;
        return (
          <tr key={instructor.id}>
          
          <td><img src={instructor.imageUrl} width="150" alt="Instructor"/></td>
          <td><Link to={`/instructor/${instructor.id}`}>
            <h1>{name}</h1>
          </Link></td>
         
          {/*<p>{instructor.department}</p>*/}
          <td>
            <VscError color ='red'  />
          </td>
        </tr>
        )})}
        </tbody>
         <Link to={'/'} >
            <Button variant="contained" color="blue" style={{marginRight: '10px'}}>
              HOME
            </Button>
      </Link> 
    </div>
  );
};

AllInstructorsView.propTypes = {
  allInstructors: PropTypes.array.isRequired,
};

export default AllInstructorsView;