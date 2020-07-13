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
    padding:'1.5rem 0.5rem',
},
center: {
    alignItems: 'center',
    justifyContent: 'center',
    lineHeight: 1.5,
},
link:{
    textDecoration:'none',
    color:'inherit',
    paddingBottom:'0.3rem',
    borderBottom: '0rem solid #fff',
    borderBottomRightRadius: '0',
    transition: theme.transitions.create(
        ['border-bottom'],
        { duration: theme.transitions.duration.standard }
    ),
    '&:hover':{
        borderBottom:'0.1rem solid #E7452C',
        borderBottomRightRadius: '0.35rem',
    }
},
logo:{
    width:'7rem',
    '&:hover':{
        cursor:'pointer',
    }
},
}));

const Header = () => {
    const classes = useStyles();

    return(
        <React.Fragment>
            <Grid container className={classes.root}>
                <Grid item xs={9} sm={6} md={9}  className={classes.center}>
                    <img 
                        className={classes.logo} 
                        src={Logo} alt="Logo"
                        onClick={() => window.open("/Portfolio")}                        
                    />
                </Grid>
                <Grid item xs={1} sm={2} md={1} className={classes.center}>
                    <Link 
                        to="/about"
                        className={classes.link}
                    >
                        ABOUT
                    </Link>
                </Grid>

                <Grid item xs={1} sm={2} md={1} className={classes.center}>
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