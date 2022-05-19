import {useStyles} from "../Styles";
import NavigableContainer from "../containers/NavigableContainer";
import CourseForm from "../forms/CourseForm";
import {CourseCard} from "../cards/CourseCard";
import {InstructorCard} from "../cards/InstructorCard";

const CourseView = ({ course, cancelForm, handleChange, handleSubmit }) => {
  const classes = useStyles();
  return (
      <NavigableContainer course={course}>
          <div style={{
              display: "flex",
              gridGap: "10px",
          }}>
              <div style={{
                  display: "grid",
                  height: "90vh",
                  // flexWrap: "wrap",
                  gridGap: "10px"
              }}>
                  <CourseCard course={course} object={course} cardHeight="auto" notClickable/>
                  <InstructorCard course={course} object={course.instructor} cardHeight="auto"/>
              </div>
              <CourseForm
                  cancelForm={cancelForm}
                  handleChange={handleChange}
                  handleSubmit={handleSubmit}
                  course={course}
              />
          </div>
      </NavigableContainer>
  );
};

export default CourseView;