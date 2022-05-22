import {makeStyles} from '@mui/styles';
import NavigableContainer from "../containers/NavigableContainer";
import InstructorForm from "../forms/InstructorForm";
import React, { Component }  from 'react';


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

const NewInstructorView = ({handleChange, handleSubmit}) => {
const instructors = useStyles();
return (
  <NavigableContainer instructors={instructors}>
      <InstructorForm handleChange={handleChange} handleSubmit={handleSubmit}/>
  </NavigableContainer>
);
}


export default NewInstructorView;
