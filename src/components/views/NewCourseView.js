import {makeStyles} from '@mui/styles';
import NavigableContainer from "../containers/NavigableContainer";
import CourseForm from "../forms/CourseForm";


const useStyles = makeStyles(() => ({
    formContainer: {
        width: '500px',
        backgroundColor: '#61ffa8',
        borderRadius: '5px',
        margin: 'auto',
    },
    title: {
        flexGrow: 1,
        textAlign: 'left',
        textDecoration: 'none'
    },
    customizeAppBar: {
        backgroundColor: '#11153e',
        shadows: ['none'],
    },
    formTitle: {
        backgroundColor: '#261c69',
        marginBottom: '15px',
        textAlign: 'center',
        borderRadius: '5px 5px 0px 0px',
        padding: '3px'
    },
    labelStyle: {
        color: '#9c40f7',
        fontWeight: 'bold'
    },
}));

const NewCourseView = ({handleChange, handleSubmit}) => {
const courses = useStyles();
return (
  <NavigableContainer courses={courses}>
      <CourseForm handleChange={handleChange} handleSubmit={handleSubmit}/>
  </NavigableContainer>
);
}


export default NewCourseView;