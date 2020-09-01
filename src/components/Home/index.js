import React from 'react';
import Grid from '@material-ui/core/Grid';
import Projects from './Projects';
import Intro from './Intro/Intro';
  
const About = () => {
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