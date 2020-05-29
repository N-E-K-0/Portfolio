import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
// import Typography from '@material-ui/core/Typography';
import Img from '../images/image_Samiul_Islam.svg';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import Button from '@material-ui/core/Button';
import Resume from '../Document/Resume.pdf';

const useStyles = makeStyles((theme) => ({
    root:{
        borderTop: '8px solid #DF402A',
    },
    grid: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        color:'#757575',
    },
    large: {
        width: theme.spacing(20),
        height: theme.spacing(20),
    },
    button: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        margin:'1rem',
    }
}));

const Intro = () => {
    const classes = useStyles();

    return(
        <>
        {/* <CssBaseline />
        <Container maxWidth="md"> */}
        <Grid container spacing={1} className={classes.root}>
            <Grid item xs={12} sm={12} md={4} className={classes.grid}>
                <Avatar 
                    alt="Remy Sharp" 
                    src={Img} 
                    className={classes.large} 
                />
            </Grid><br />
            <Grid item xs={12} sm={12} md={6}>
                <Grid className={classes.grid}>
                    <h1>Mohammed Samiul Islam</h1>
                </Grid>
                <Grid className={classes.grid}>
                    <h4>Software Engineer </h4>
                </Grid>
                <Grid className={classes.grid}>
                    <p>I am full stack software engineer. I have graduated from North South University in Computer Science and Engineering. I am a freelance developer with a keen interest in front-end design. </p>  <br />
                </Grid> 
            </Grid>
            <Grid item xs={3} sm={3} md={6}></Grid>  
            <Grid item xs={6} sm={6} md={2}>      
                <Button 
                    className={classes.button}
                    startIcon={<LibraryBooksIcon />}
                    color="primary"
                    variant="contained"
                    href={Resume}   
                >
                    Resume
                </Button>  
            </Grid> 
         </Grid>   
        {/* </Container> */}
        </>
    )
}

export default Intro;