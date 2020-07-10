import React from 'react';
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Resume from '../../Document/Resume.pdf';
import Logo from '../../assets/images/favicon1.jpg';

const useStyles = makeStyles((theme) => ({
root:{
    fontFamily:'Asap',
    fontSize:'1.2rem',
    paddingTop:'1rem',
},
center: {
    alignItems: 'center',
    justifyContent: 'center',
    lineHeight: 1.5,
},
link:{
    textDecoration:'none',
    paddingRight:'1rem',
    color:'inherit'
},
logo:{
    width:'7rem'
},
}));

const Header = () => {
    const classes = useStyles();

    return(
        <React.Fragment>
            <Grid container className={classes.root}>
                <Grid item xs={9} sm={6} md={9}  className={classes.center}>
                    <Link to="/Portfolio" >
                        <img className={classes.logo} src={Logo} alt="Logo" />
                    </Link>
                </Grid>
                <Grid item xs={1} sm={2} md={1} className={classes.center}><br />
                    <Link 
                        to="/about"
                        className={classes.link}
                    >
                        ABOUT
                    </Link>
                </Grid>

                <Grid item xs={1} sm={2} md={1} className={classes.center}><br />

                    <a 
                        className={classes.link}
                        href={Resume}
                    >
                        RESUME
                    </a>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}

export default Header;