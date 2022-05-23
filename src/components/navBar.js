import {AppBar, Button, Toolbar, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import React, { Component }  from 'react';


const NavBar = () => {
    return (
        <AppBar position="static" elevation={0} className="appBar" style = {appBar} >
            <Toolbar>
                <Typography variant="h6" className="title" style =  {title}>
                  <Link to = {'/'} style = {{textDecoration:'none', color:'#ffffff'}}>
                    CRUD APP
                  </Link>
                </Typography>

                <Link className="links" to={'/instructors'} style = {links}>
                    <Button variant="contained" style={{backgroundColor:"navy blue", marginRight: '15px'}}>
                        All Instructors
                    </Button>
                </Link>

                <Link to={'/courses'} style = {links}>
                    <Button variant="contained" style = {{backgroundColor:"navy blue"}}>
                        All Courses
                    </Button>
                </Link>
            </Toolbar>
        </AppBar>
    );
};

const appBar = {
  backgroundColor: '#7d0aff',
  shadows: ['none'],
}

const title = {
  flexGrow: 1,
  textAlign: 'left',
  fontType: 'bold',
  fontFamily: 'Courier, sans-serif',
  fontSize: '25px',
  color: '#ffffff',
}

const links = {
  textDecoration: 'none',

}



export default NavBar;
