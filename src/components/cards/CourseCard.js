import {GenericCard} from "./GenericCard";

export const CourseCard = props =>
    <GenericCard
        objectType="course"
        headerTitle={`${props.object.id} ${props.object.title}`}
        {...props}/>