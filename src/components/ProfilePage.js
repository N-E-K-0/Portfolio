import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from "react-router-dom";
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import FavoriteIcon from '@material-ui/icons/Favorite';
import DeleteIcon from '@material-ui/icons/Delete';
import Typography from '@material-ui/core/Typography';
import Header from '../homepage/Header';
import Footer from '../common/Footer';
import User from '../../assets/images/user.jpg';


const useStyles = makeStyles((theme) => ({
    center: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    },    
    large: {
        width: theme.spacing(20),
        height: theme.spacing(20),
    },
    button: {
        float: 'right',
    },
    input: {
        display: 'none',
    },
    grid: {
        display:'flex',
        justifyContent: 'flex-end',
        margin: '0.2em',
        padding: '1em',
    },
    card: {
        margin: '0.2em',
        padding: '1em',
    },
}));

const Profile = () => {
    const classes = useStyles();
    const history = useHistory();

    function handleClickFavourite() {
        history.push("/FavoritePage");
    }


    return (
        <>
            <CssBaseline />
            <Container maxWidth="md">
                <Header /><br />
                <Grid className={classes.center}>
                    <Avatar alt="Remy Sharp" src={User} className={classes.large} />
                </Grid><br />
                <Grid className={classes.center}>
                    <input
                        accept="image/*"
                        className={classes.input}
                        id="contained-button-file"
                        multiple
                        type="file"
                    />
                    <label htmlFor="contained-button-file">
                        <Button variant="contained" color="primary" component="span">
                        Upload
                        </Button>
                    </label>
                </Grid><br />
                <Grid className={classes.center}>
                    <h4> Username</h4>
                </Grid><br />
                <Grid container className={classes.grid}>
                    <Grid item xs={10}>
                        <Typography color="textSecondary" component="p">
                            UserName : Username
                        </Typography>
                        <Typography  color="textSecondary" component="p"> 
                            Email: user@priccecomparison.com
                        </Typography>
                    </Grid>
                    <Grid item xs={2}>
                        <Button
                            size="small"
                            variant="contained"
                            color="secondary"
                            startIcon={<FavoriteIcon />}
                            onClick={handleClickFavourite}
                        >
                            Favorites
                        </Button>
                    </Grid>
                </Grid><br />
                <Grid >
                    <Card className={classes.card}>
                        <Typography  color="secondary" component="p">
                            Delete account
                        </Typography>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                        <Button
                            size="small"
                            variant="contained"
                            color="secondary"
                            className={classes.button}
                            startIcon={<DeleteIcon />}
                        >
                            Delete Account
                        </Button>
                    </Card>
                </Grid>
                <Footer />
            </Container>
        </>
    );
}

export default Profile;