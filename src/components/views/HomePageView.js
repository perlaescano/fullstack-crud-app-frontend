
import NavigableContainer from "../containers/NavigableContainer";
import React from 'react';
import hunter from "../img/hunter.jpg"


const HomePageView = () => {

  return (

      <div>
        <div className="title" style = {title}>;
          <h1 style = {{color: "white"}}>Final Project</h1>
        </div>
        <img src = {hunter} alt = "Hunter College"/>
      </div>

  );
}

const title = {
  justifyContent: 'center',
  backgroundColor: '#7d0aff',
  width: "100%",
  margin: "auto",
}


export default HomePageView;
