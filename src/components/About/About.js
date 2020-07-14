import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar';
import Img from '../../assets/images/image_Samiul_Islam.png';
import Skills from './Skills';

const useStyles = makeStyles((theme) => ({
    root:{
        fontSize:'1.2rem',
        fontFamily:'Asap',
    },
    center: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    },
    large: {
        width: theme.spacing(20),
        height: theme.spacing(20),
        border:'1vh solid #E6DAC9'
    },
    button:{
        textAlign:'center',
        color:'#fff',
        cursor:'pointer',
    },

}));

export default function About(){
    const classes = useStyles();

    return(
        <>
            <CssBaseline />
            <Container maxWidth='sm' className={classes.root}>
                <div className={classes.center}>
                <Avatar 
                    alt="Remy Sharp" 
                    src={Img} 
                    className={classes.large} 
                />
                </div>
                <h2 className={classes.center}>Mohammed Samiul Islam</h2>
                <h4 className={classes.center}>Front-end Developer</h4>
                <p >Hi,I am Mohammed Samiul Islam, former software engineer, currently working as a freelance web developer and completed bachelor degree in computer sceince and engineering.
                </p>
                <p >I have around 1+ year experience in web developement. I generally take few projects at a time so that I can give full attention to those project details. I can easily collaborate with a team but sometime prefer working alone.
                I had a great experience in my first job, a start up environment, and try to pusue to be a full stack developer. Currently, I am working as a freelance developer as a front end developer.
                </p>
                <p >
                I am passionate about machine learning specially computer vision which is growing in me since my final thesis in the bachelor degree. I also love playing video games, travelling and enjoy reading about comparative religion.</p>
                
                <br />
            </Container>
            <Skills />
        </>
    )
}