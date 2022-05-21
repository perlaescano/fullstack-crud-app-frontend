import React from "react";
import NavBar from "../navBar";

const NavigableContainer = ({courses, children, ActionButtonComponent = () => null}) => {
    return (
        <div className={courses.root}>
            <NavBar courses={courses} ActionButtonComponent={ActionButtonComponent}/>
            {children}
        </div>
    )
}

export default NavigableContainer;
