import {GenericCard} from "./GenericCard";

export const InstructorCard = props =>
    <GenericCard
        objectType="instructor"
        headerTitle={props.object.name}
        {...props}/>