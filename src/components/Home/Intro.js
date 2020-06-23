import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import Image from '../../assets/images/intro_image.jpg';
import Typical from 'react-typical';

const useStyles = makeStyles((theme) => ({
    intro:{
        // backgroundImage:`url(${Image})`,
        width:'100%',
        height:'15rem',
    },
    center:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        fontWeight:'2rem',
    },
    text:{
        color:'#E7452C',
    }
}));

const Intro = () => {
    const classes = useStyles();

    return(
        <div className={classes.intro}>
            <h1 className={classes.center}>Hi! I'm&nbsp;<span className={classes.text}>Samiul</span></h1>
            <p className={classes.center}>I am&nbsp;
                <Typical 
                    loop={Infinity}
                    wrapper="b"
                    steps={[
                        'an engineer',
                        2000,
                        'a developer',
                        2000,
                    ]}
                />
            </p>
        </div>
    )
}

export default Intro;