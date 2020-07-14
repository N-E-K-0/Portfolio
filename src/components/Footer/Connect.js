import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { motion } from "framer-motion";
import Link from '@material-ui/core/Link';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles({
    root:{
        fontFamily:'Asap',
    },
    text:{
        fontSize:'2rem',
        textDecoration:'none',
        '&:hover':{
            textDecoration: 'line-through',
            textDecorationColor: '#E7452C',
        }
    },
    connect: {
        float:'left',
    },
    asotphe: {
        color:'#E7452C',
    },
    gmail: {
        margin:'0.3rem',
        padding:0,
        cursor:'pointer',
        fontSize:'default',
        color:'#757575',
        '&:hover':{
            color:'#D54B3D'
        }
    },
    facebook: {
        margin:'0.3rem',
        padding:0,
        cursor:'pointer',
        fontSize:'default',
        color:'#757575',
        '&:hover':{
            color:'#3B579D'
        }
    },
    twitter: {
        margin:'0.3rem',
        padding:0,
        cursor:'pointer',
        fontSize:'default',
        color:'#757575',
        '&:hover':{
            color:'#55ABE1'
        }
    },
    linkedIn: {
        margin:'0.3rem',
        padding:0,
        cursor:'pointer',
        fontSize:'default',
        color:'#757575',
        '&:hover':{
            color:'#3D7BB7'
        }
    },
    github: {
        margin:'0.3rem',
        padding:0,
        cursor:'pointer',
        fontSize:'default',
        color:'#757575',
        '&:hover':{
            color:'#121011'
        }
    },
});


// const divVariants={
//     hidden:{
//         opacity: 0,
//         x:'100vw'
//     },
//     visible:{
//         opacity: 1,
//         x:
//         transition:{
//         delay: 0.5,
//         },
//     }
//   }


const Connect = () => {
    const classes = useStyles();

    return (
        <Grid container className={classes.root}>
            <Grid item xs={1}></Grid>
            <Grid item xs={1}>
                <br /><br />
                <hr />
            </Grid>
            <Grid item xs ={4} sm={4} md={4}><br /><br /><br /><br /><br />
            <motion.div 
                className={classes.connect}
                // variants={divVariants}
            >
                <h2 className={classes.icon}>Let 
                    <span className={classes.asotphe}>'</span>s &nbsp;
                    <span className={classes.text}>Connect</span>
                </h2>
            </motion.div>
            <motion.div className={classes.connect}>
                <p>Hey! Currently, I am looking for full-time opportunities. Feel free to get in touch.</p>
            </motion.div>
            <motion.div className={classes.connect}>
                <Link 
                    href="mailto:isamiul120@gmail.com?subject=subject&body=body"
                    className={classes.gmail}
                ><EmailIcon  />
                </Link>
                <Link 
                    href="https://www.facebook.com/shifat.sami"
                    className={classes.facebook}
                ><FacebookIcon  />
                </Link>
                <Link 
                    href="https://twitter.com/ALazyHooman"
                    className={classes.twitter}
                ><TwitterIcon  />
                </Link>
                <Link 
                    href="https://www.linkedin.com/in/mohammed-samiul-islam-47a2b0a1"
                    className={classes.linkedIn}
                ><LinkedInIcon  />
                </Link>
                <Link 
                    href="https://github.com/N-E-K-0"
                    className={classes.github}
                ><GitHubIcon  />
                </Link>
            </motion.div>
            </Grid>
        </Grid>
    )
}

export default Connect;