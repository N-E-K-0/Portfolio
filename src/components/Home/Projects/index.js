import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from './projectCard'
// Images
import roboImg from '../../../assets/images/Robofriends.png';
import touristImg from '../../../assets/images/Touristplace.jpg';
import faceImg from '../../../assets/images/Face_detection.JPG'
import gooddealImg from '../../../assets/images/goodeal.jpg';
import objectImg from '../../../assets/images/object_detection.jpg';
import gsmImg from '../../../assets/images/gsmapp.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    margin:0,
  },
  header: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '7rem',
    padding: '1rem',
    '&:hover':{
        textDecoration: 'line-through',
        textDecorationColor: '#E7452C',
    }
  },
}));

{/* AI projects */}
const objectdetectheader = 'Object Detection'
const objectdetecttext = 'One can easily detect fire, smoke and human body simultanously. '
const objectdetectlink = 'https://github.com/N-E-K-0/object_detection'
const objectdetectletter = 'O'

{/* Web Apps */ }
const roboheader = 'Robo Friends'
const robotext = 'This is a fun project. You can find  your favorite robot friends from here. '
const robolink = 'https://n-e-k-0.github.io/Robofriends/'
const roboletter = 'R'

const touristheader = 'Tourist Place'
const touirstext = 'The web app try to show the noteworthy places of bangladesh to travel.'
const touristlink = 'https://n-e-k-0.github.io/TouristPlace/'
const touristletter = 'T'

const faceheader = 'Face Detection'
const facetext = 'This web app can detect any image with a human face in it.'
const facelink = 'https://github.com/N-E-K-0/Face_detection'
const faceletter = 'F'

const gooddealheader = 'Good Deal'
const gooddealtext = 'Coming soon.'
const goooddeallink = 'https://drive.google.com/file/d/13u0c-qfRbad0btDWF78aZeOtb2QMh_CU/view?usp=sharing'
const goooddealletter = 'G'

{/* Mobile Apps */}
const gsmheader = 'GSMArena Clone'
const gsmtext = 'Coming soon.'
const gsmlink = 'https://drive.google.com/drive/folders/1aJs-QhZHeOr6H0GeXtCFdCKA6SyLO57b?usp=sharing'
const gsmletter = 'G'


const Projects = () => {
  const classes = useStyles();

  return (
    <div>

      {/* Web Apps */}
      <div className={classes.root}>
        <h1 className={classes.header}>Web Apps</h1>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={3}>
            <Card header={roboheader} img={roboImg} text={robotext} link={robolink} letter={roboletter} />
          </Grid>
           <Grid item xs={12} sm={12} md={3}>
            <Card header={touristheader} img={touristImg} text={touirstext} link={touristlink} letter={touristletter}/>
          </Grid>
          <Grid item xs={12} sm={12} md={3}>
            <Card header={faceheader} img={faceImg} text={facetext} link={facelink} letter={faceletter}/>
          </Grid>
          <Grid item xs={12} sm={12} md={3}>
            <Card header={gooddealheader} img={gooddealImg} text={gooddealtext} link={goooddeallink} letter={goooddealletter}/>
          </Grid>
        </Grid>
      </div>

      {/* Mobile Apps */}
      <div className={classes.root}>
        <h1 className={classes.header}>Mobile Apps</h1>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={4}></Grid>
          <Grid item xs={12} sm={12} md={4}>
            <Card header={gsmheader} img={gsmImg} text={gsmtext} link={gsmlink} letter={gsmletter}/>
          </Grid>
        </Grid>
      </div>

      {/* AI projects */}
      <div className={classes.root}>
        <h1 className={classes.header}>AI projects</h1>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={4}></Grid>
          <Grid item xs={12} sm={12} md={4}>
            <Card header={objectdetectheader} img={objectImg} text={objectdetecttext} link={objectdetectlink} letter={objectdetectletter}/>
          </Grid>
        </Grid>
      </div>

    </div>
  );
}

export default Projects;