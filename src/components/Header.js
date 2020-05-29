import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import Button from '@material-ui/core/Button';
import Resume from '../Document/Resume.pdf';


const useStyles = makeStyles((theme) => ({
center: {
    width: '100%',
    margin: 0,
    padding:0,
    alignItems: 'center',
    justifyContent: 'center',
    borderTop: '7px solid #DF402A',
    // borderImage: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderImageSlice: '1',
    lineHeight: 1.5,
},
button: {
    margin:'1rem',
    float:'right',
    color:'#5AB1FF',
}
}));

const Header = () => {
    const classes = useStyles();

    return(
        <React.Fragment>
            <Grid container className={classes.center}>
                <Grid item xs={8}>
                    {/* <img className={classes.logo} src={Logo} alt="Logo" /> */}
                </Grid>
                <Grid item xs={4} sm={4} md={2}>
                    <Button 
                        className={classes.button}
                        startIcon={<LibraryBooksIcon />}
                        href={Resume}   
                    >
                        Resume
                    </Button>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}

export default Header;