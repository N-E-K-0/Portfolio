import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FavoriteIcon from '@material-ui/icons/Favorite';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        '& > * + *': {
            marginLeft: theme.spacing(0.5),
        },
        float:'right',
        fontSize: '1rem',
        fontFamily:'Asap',
        color: '#A6B1BA',
        paddingRight:'1rem'
    },
    icon: {
        color: '#E7452C',
        fontSize: '1rem',
    }
}));

const Footer = () => {
    const classes = useStyles();
    return(
        <React.Fragment>
            <p className={classes.root}>
                Hand crafted & made with <FavoriteIcon  className={classes.icon}/> by Sami.
            </p>
        </React.Fragment>
    )
}

export default Footer;