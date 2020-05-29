import React from 'react';
// import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import TwitterIcon from '@material-ui/icons/Twitter';
import EmailIcon from '@material-ui/icons/Email';

const useStyles = makeStyles({
    root: {
        padding:'1rem',
        backgroundColor:'#163172',
        borderRadius:'1rem',
    },
    text:{
        fontSize:'2rem',
        color:'#5AB1FF',
    },
    input: {
        padding: '1rem',
        color:'#fff',
    },
    connect: {
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
    },
    asotphe: {
        color:'#E7452C',
    },
    icon: {
        color:'#A8B7D1',
        margin:'0.3rem',
        padding:0,
    },
});

const Connect = () => {
    const classes = useStyles();

    return (
        <>
        {/* <Grid container className={classes.root}>
            <Grid item xs={12} sm={12} md={ 6} className={classes.connect}>
                <h2 className={classes.icon}>Let 
                    <span className={classes.asotphe}>'</span>s &nbsp;
                    <span className={classes.text}>Connect</span>
                </h2>
            </Grid>
            <div>
                <Grid item xs={12} sm={12} md={6} className={classes.connect}>
                    <FacebookIcon className={classes.icon}/>
                    <TwitterIcon className={classes.icon}/>
                    <LinkedInIcon className={classes.icon}/>
                    <WhatsAppIcon className={classes.icon}/>
                </Grid>
                <Grid item xs={12} sm={12} md={6} className={classes.connect}>
                    <EmailIcon className={classes.icon} />
                    <p className={classes.icon}>isamiul120@gmail.com</p>
                </Grid>
            </div>
        </Grid> */}
            <div className={classes.connect}>
                <h2 className={classes.icon}>Let 
                    <span className={classes.asotphe}>'</span>s &nbsp;
                    <span className={classes.text}>Connect</span>
                </h2>
            </div>
            <div className={classes.connect}>
                <IconButton 
                    className={classes.icon}
                    aria-label="Facebook.com" 
                    onClick={() => window.open('https://www.facebook.com/shifat.sami')}>
                    <FacebookIcon fontSize="medium" />
                </IconButton>
                <IconButton 
                    className={classes.icon}
                    aria-label="Twitter.com" 
                    onClick={() => window.open('https://twitter.com/ALazyHooman')}>
                    <TwitterIcon fontSize="medium" />
                </IconButton>
                <IconButton 
                    className={classes.icon}
                    aria-label="Linkedin.com" 
                    onClick={() => window.open('https://www.linkedin.com/in/mohammed-samiul-islam-47a2b0a1')}>
                    <LinkedInIcon fontSize="medium" />
                </IconButton>
            </div>
            <div className={classes.connect}>
                <WhatsAppIcon className={classes.icon}/>
                <p className={classes.icon}>+8801735810708</p>
            </div>
            <div className={classes.connect}>
                <EmailIcon className={classes.icon} />
                <p className={classes.icon}>isamiul120@gmail.com</p>
            </div>
        </>
    )
}

export default Connect;