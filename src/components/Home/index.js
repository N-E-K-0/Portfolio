import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Projects from './Projects';
import Intro from './Intro/Intro';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: '7rem',
//     padding: '1rem'
//   },
// }));
  
const About = () => {
  // const classes = useStyles();

  return(
    <Grid container>
      <Grid item xs={12}>
        <Intro />
      </Grid>
      <Grid item xs={12}>
        <Projects />
      </Grid>
    </Grid>
  )
}

export default About;