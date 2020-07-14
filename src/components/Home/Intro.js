import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Parallax } from 'react-scroll-parallax';
import Typical from 'react-typical';

const useStyles = makeStyles((theme) => ({
    intro:{
        height:'15rem',
        padding:'5rem'
    },
    h1:{
        fontSize:'4.5rem',
    },
    p:{
        float:'left',
        fontSize:'2rem',
    },
    text:{
        color:'#E7452C',
    }
}));

 

const Intro = () => {
    const classes = useStyles();

    return(
        <Parallax 
            className="custom-class" 
            x={[-40,50]}
            y={[20, -50]} 
        >
            <div className={classes.intro}>
                <h1 className={classes.h1}>Hi! I'm&nbsp;<span className={classes.text}>Samiul</span></h1>
                <p className={classes.p}>I'm &nbsp;
                <Typical 
                    loop={Infinity}
                    wrapper="b"
                    steps={[
                        'an engineer, ',
                        2000,
                        'a developer, ',
                        2000,
                    ]}
                />
                graduated in computer sceince and engineering and currently working as a freelance web developer.
                </p>
            </div>
        </Parallax> 
    )
}

export default Intro;