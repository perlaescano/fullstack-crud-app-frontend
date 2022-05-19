import {
    Button,
    Card,
    CardActions,
    CardContent,
    InputAdornment,
    TextField,
    Typography
} from "@mui/material";
import {memo} from "react";
import {AccountCircle} from "@mui/icons-material";

const ValidatableField = ({disabled, onChange, ...props}) => {
    return <TextField
        variant={!!onChange ? "outlined" : "filled"}
        disabled={disabled || !onChange}
        onChange={onChange} {...props}/>;
}

const CourseForm = memo((
    {
        handleChange,
        handleSubmit,
        course,
        disableInstructor,
        cancelForm,
        ...props
    }) => {
    const CourseField = () =>
        <ValidatableField
            label="Instructor ID" name="instructorId" defaultValue={instructor?.courseId} onChange={handleChange}
            type="number" inputProps={{min: 0, step: 1}} disabled={disableCampus} required={!disableInstructor} fullWidth/>;
    const TitleField = () =>
        <ValidatableField
            label="title" name="tirle"
            defaultValue={course?.title}
            onChange={handleChange}
            InputProps={{startAdornment}}
            required fullWidth/>;
    const TimeSlotField = () =>
        <ValidatableField
            label="Time Slot" name="time"
            defaultValue={course?.time}
            onChange={handleChange}
            InputProps={{startAdornment}}
            required fullWidth/>;
    const LocationField = () =>
        <ValidatableField
            label="Location" name="location"
            defaultValue={course?.location}
            onChange={handleChange}
            type="location" required fullWidth/>

    const startAdornment = (
        <InputAdornment position="start">
            <AccountCircle/>
        </InputAdornment>
    );

    const formTitle = course ? `${course.title} ${course.time}` : "New Course";

    return (
        <Card component="form" autoComplete="off" onSubmit={handleSubmit} {...props}>
            <CardContent sx={{display: "flex", flexWrap: "wrap", justifyContent: "center", gridGap: "1em"}}>
                <Button color="primary" disabled>
                    <Typography style={{
                        fontWeight: 'bold',
                        fontFamily: 'Arial, sans-serif',
                        fontSize: '20px',
                        color: '#11153e'
                    }}>
                        {formTitle}
                    </Typography>
                </Button>
                <CourseField/>
                <TitleField/>
                <TimeSlotField/>
                <LocationField/>
            </CardContent>
            <CardActions sx={{display: "flex", flexWrap: "wrap", justifyContent: "space-around"}}>
                { cancelForm ? <Button type="button" onClick={cancelForm}>Cancel</Button> : null }
                <Button type="submit">{handleChange ? "Submit" : "Edit"}</Button>
            </CardActions>
        </Card>
    );
});

export default CourseForm; 