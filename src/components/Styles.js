import {makeStyles} from "@mui/styles";

const applyStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
        textAlign: 'left',
        fontType: 'bold',
        fontFamily: 'Courier, sans-serif',
        fontSize: '35px',
        color: '#3392b5'
    },
    appBar:{
        backgroundColor: '#010536',
        shadows: ['none'],
    },
    greeting:{
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'white',
        width: "50%",
        margin: "auto",
    },
    links:{
        textDecoration: 'none',
    }

}));

export { applyStyles };