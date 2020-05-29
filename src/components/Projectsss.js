import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import GitHubIcon from '@material-ui/icons/GitHub';
import RemoveRedEyeIcon from '@material-ui/icons/RemoveRedEye';
import Button from '@material-ui/core/Button';
import ProjectImg1 from '../images/Robofriends.png';
import ProjectImg2 from '../images/Touristplace.jpg';
import ProjectImg3 from '../images/Face_detection.JPG';


const useStyles = makeStyles({
  root: {
    maxWidth: 'auto',
  },
  media: {
    height: '20rem',
  },
  button: {
    display:'flex',
    justifyContent:'center',
    alignItems:' center',
    cursor: 'pointer',
    fontSize: '3rem',
    color:'#5AB1FF',
  },
  vrtcl: {
    display:'flex',
    justifyContent:'center',
    alignItems:' center',
    fontSize: '2rem',
    fontFamily:'Times New Roman',
    writingMode:'vertical-rl',
  }
});

export default function MediaCard() {
  const classes = useStyles();

  return (
      <>
        <Grid container spacing={2}>
        {/* <div className={classes.vrtcl}>
            <p>Projects</p>
        </div> */}
            <Grid item xs={12} sm={12} md={4}>
                <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={ProjectImg1}
                        title="Contemplative Reptile"
                    />
                </CardActionArea>
                <CardActions className={classes.button}>
                    <Button 
                        className={classes.button}
                        startIcon={<GitHubIcon />}
                        href='https://github.com/N-E-K-0/Robofriends'   
                    />
                    <Button 
                        className={classes.button}
                        startIcon={<RemoveRedEyeIcon />}
                        href='https://n-e-k-0.github.io/Robofriends/'   
                    />
                </CardActions>
                </Card>
            </Grid>

            <Grid item xs={12} sm={12} md={4}>
                <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={ProjectImg2}
                        title="Contemplative Reptile"
                    />
                </CardActionArea>
                <CardActions className={classes.button}>
                    <Button 
                        className={classes.button}
                        startIcon={<GitHubIcon />}
                        href='https://github.com/N-E-K-0/TouristPlace'   
                    />
                    <Button 
                        className={classes.button}
                        startIcon={<RemoveRedEyeIcon />}
                        href='https://n-e-k-0.github.io/TouristPlace/'   
                    />
                </CardActions>
                </Card>
            </Grid>

            <Grid item xs={12} sm={12} md={4}>
                <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={ProjectImg3}
                        title="Contemplative Reptile"
                    />
                </CardActionArea>
                <CardActions className={classes.button}>
                    <Button 
                        className={classes.button}
                        startIcon={<GitHubIcon />}
                        href='https://github.com/N-E-K-0/Face_detection'   
                    />
                </CardActions>
                </Card>
            </Grid>
        </Grid><br />
    </>
  );
}
