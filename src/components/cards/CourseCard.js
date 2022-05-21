import {GenericCard} from "./GenericCard";
import React, { Component }  from 'react';


export const CourseCard = props =>
    <GenericCard
        objectType="course"
        headerTitle={`${props.object.id} ${props.object.title}`}
        {...props}/>