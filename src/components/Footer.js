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
        fontFamily:'inherit',
        color: '#A6B1BA',
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
                Made with <FavoriteIcon  className={classes.icon}/> by Samiul Islam.
            </p>
        </React.Fragment>
    )
}

export default Footer;