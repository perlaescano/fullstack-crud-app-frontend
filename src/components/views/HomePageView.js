
import { useStyles } from '../Styles';
import NavigableContainer from "../containers/NavigableContainer";
import React from 'react';

const HomePageView = () => {
  const courses = useStyles();
  return (
    <NavigableContainer courses={courses}>
      <div className={courses.info}><h1>Home Page</h1></div>
      </NavigableContainer>
  );
}


export default HomePageView;
