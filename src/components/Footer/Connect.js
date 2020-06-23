import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import EmailIcon from '@material-ui/icons/Email';

const useStyles = makeStyles({
    root:{
        fontFamily:'Asap',
    },
    text:{
        fontSize:'2rem',
    },
    connect: {
        float:'left'
    },
    asotphe: {
        color:'#E7452C',
    },
    icon: {
        margin:'0.3rem',
        padding:0,
        cursor:'pointer',
        '&:hover':{
            color:'#4181CB'
        }
    },
});

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
            <div className={classes.connect}>
                <h2 className={classes.icon}>Let 
                    <span className={classes.asotphe}>'</span>s &nbsp;
                    <span className={classes.text}>Connect</span>
                </h2>
            </div>
            <div className={classes.connect}>
                <p>Hey! Currently, I am looking for full-time opportunities. Feel free to get in touch.</p>
            </div>
            <div className={classes.connect}>
                <IconButton 
                    className={classes.icon}
                    aria-label="Facebook.com" 
                    onClick={() => window.open('mailto:isamiul120@gmail.com?subject=subject&body=body')}>
                    <EmailIcon fontSize="default" />
                </IconButton>
                <IconButton 
                    className={classes.icon}
                    aria-label="Facebook.com" 
                    onClick={() => window.open('https://www.facebook.com/shifat.sami')}>
                    <FacebookIcon fontSize="default" />
                </IconButton>
                <IconButton 
                    className={classes.icon}
                    aria-label="Twitter.com" 
                    onClick={() => window.open('https://twitter.com/ALazyHooman')}>
                    <TwitterIcon fontSize="default" />
                </IconButton>
                <IconButton 
                    className={classes.icon}
                    aria-label="Linkedin.com" 
                    onClick={() => window.open('https://www.linkedin.com/in/mohammed-samiul-islam-47a2b0a1')}>
                    <LinkedInIcon fontSize="default" />
                </IconButton>
            </div>
            </Grid>
        </Grid>
    )
}

export default Connect;