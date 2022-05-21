import NavigableContainer from "../containers/NavigableContainer";
import {useStyles} from "../Styles";
import React from 'react';

const InstructorView = (props) => {
  const {instructor} = props;
    const course = useStyles();
    return (
        <NavigableContainer courses={course}>
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
