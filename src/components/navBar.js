import {AppBar, Button, Toolbar, Typography} from "@mui/material";
import {Link} from "react-router-dom";

const NavBar = ({ courses }) => {
    return (
        <AppBar position="static" elevation={0} className={courses.appBar}>
            <Toolbar>
                <Typography variant="h6" className={courses.title} color="inherit" >
                    CRUD APP
                </Typography>

                <Link className={courses.links} to={'/instructors'} >
                    <Button variant="contained" color="primary" style={{marginRight: '10px'}}>
                        All Instructors
                    </Button>
                </Link>

                <Link className={courses.links} to={'/courses'} >
                    <Button variant="contained" color="primary">
                        All Courses
                    </Button>
                </Link>
            </Toolbar>
        </AppBar>
    );
};

export default NavBar; 