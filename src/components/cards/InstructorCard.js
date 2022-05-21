import {GenericCard} from "./GenericCard";
import React, { Component }  from 'react';


export const InstructorCard = props =>
    <GenericCard
        objectType="instructor"
        headerTitle={props.object.name}
        {...props}/>