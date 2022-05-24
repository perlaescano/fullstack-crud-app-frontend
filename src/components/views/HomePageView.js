
import React from 'react';
//import image of hinter from image folder
import hunter from "../img/hunter.jpg"
const HomePageView = () => {

  return (

      <div style={{width:'100%'}}>
        <div className="title" style = {title}>.
          <h1 style = {{color: "white", paddingBottom: "20px", }}>Final Project</h1>
        </div>
        // Pastes the image of hunter college
        <img src = {hunter} alt = "Hunter College" style = {{marginTop:"-23px", width:"100%", height:"auto"}}/>
      </div>

  );
}

const title = {
  justifyContent: 'center',
  backgroundColor: '#7d0aff',
  margin: "auto",
  color:"#7d0aff",
}


export default HomePageView;
