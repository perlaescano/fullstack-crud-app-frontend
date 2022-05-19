import React, { Component } from "react";
import NavBar from "../NavBar";

const NavigableContainer = ({classes, children}) => {
    return (
        <div className={classes.root}>
            <NavBar classes={classes}/>
            {children}
        </div>
    )
}

export default NavigableContainer; 