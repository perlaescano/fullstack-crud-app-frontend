import NavigableContainer from "../containers/NavigableContainer";
import {useStyles} from "../Styles";

const InstructorView = (props) => {
  const {instructor} = props;
    const classes = useStyles();
    return (
        <NavigableContainer courses={courses}>
            <h1>{instructor.name}</h1>
            <p>{instructor.deparment}</p>
            <p>{instructor.imageurl}</p>
            <ul>
                {instructor.course.map(course => {
                    let info = course.title + " " + course.timeslot + course.location ;
                    return (
                        <li key={course.id}>{info}</li>
                    );
                })}
            </ul>
        </NavigableContainer>
    );
};
export default InstructorView;