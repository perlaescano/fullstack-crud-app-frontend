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

const InstructorForm = memo((
    {
        handleChange,
        handleSubmit,
        course,
        disableInstructor,
        cancelForm,
        ...props
    }) => {
    const InstructorField = () =>
        <ValidatableField
            label="Instructor ID" name="instructorId" defaultValue={course?.instructorId} onChange={handleChange}
            type="number" inputProps={{min: 0, step: 1}} disabled={disableIntructor} required={!disableInstructor} fullWidth/>;
    const FirstNameField = () =>
        <ValidatableField
            label="First Name" name="firstname"
            defaultValue={instructor?.firstname}
            onChange={handleChange}
            InputProps={{startAdornment}}
            required fullWidth/>;
    const LastNameField = () =>
        <ValidatableField
            label="Last Name" name="lastname"
            defaultValue={instructor?.lastname}
            onChange={handleChange}
            InputProps={{startAdornment}}
            required fullWidth/>;
    const DepartmentField = () =>
        <ValidatableField
            label="Department" name="department"
            defaultValue={instructor?.department}
            onChange={handleChange}
            type="department" required fullWidth/>;
    const ImageUrlField = () =>
        <ValidatableField
            label="Image (URL)" name="imageUrl"
            defaultValue={instructor?.imageUrl}
            onChange={handleChange}
            fullWidth/>;


    const startAdornment = (
        <InputAdornment position="start">
            <AccountCircle/>
        </InputAdornment>
    );

    const formTitle = instructor ? `${instructor.firstname} ${instructor.lastname}` : "New Instructor";

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
                <InstructorField/>
                <FirstNameField/>
                <LastNameField/>
                <DepartmentField/>
                <ImageUrlField/>
                <CourseField/>
            </CardContent>
            <CardActions sx={{display: "flex", flexWrap: "wrap", justifyContent: "space-around"}}>
                { cancelForm ? <Button type="button" onClick={cancelForm}>Cancel</Button> : null }
                <Button type="submit">{handleChange ? "Submit" : "Edit"}</Button>
            </CardActions>
        </Card>
    );
});

export default InstructorForm; 