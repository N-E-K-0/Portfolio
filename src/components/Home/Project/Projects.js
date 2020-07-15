import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Project1 from './Project1'
import Project2 from './Project2'
import Project3 from './Project3'
import Project4 from './Project4'
import './project.css' 

const useStyles = makeStyles({
  root: {
    margin:0,
    padding:0,
    fontFamily:'Asap', 
  },
  media: {
    height: '20rem',
  },
  text: {
    display:'flex',
    justifyContent:'center',
    alignItems:' center',
    margin:0,
    paddingTop:'1rem',
    fontSize: '1.5rem',
    color:'#5AB1FF',
  },
  para:{
    display:'flex',
    justifyContent:'center',
    alignItems:' center',
    fontFamily:'Asap',
    fontSize:'3rem',
    // float:'left'
    textDecoration:'none',
    color:'inherit',
    '&:hover':{
        // color:'#E7452C',
        textDecoration: 'line-through',
        textDecorationColor: '#E7452C',
    }
},
image:{
    width:'35rem',
    maxHeight:'30rem',
    transition: 'transform 0.5s',
    boxShadow:'0.09rem 0.09rem 0.2rem #757575',
    marginTop:'1rem',
    '&:hover': {
        transform: 'scale(0.95)'
     },
},   
devicon: {
    maxWidth: '2rem',
    margin: '1rem',
},
icon:{
    fontSize: '0.85rem',
    paddingRight: '0.5rem'
},
line:{
    textDecoration:'none',
    '&:hover':{
        textDecoration: 'line-through',
        textDecorationColor: '#E7452C',
    }
}
});


const svgVariants={
    hidden:{
        opacity: 0,
    },
    visible:{
        opacity: 1,
        transition:{
        delay: 0.5,
        },
    }
  }


export default function Project() {
  const classes = useStyles();

  return (
      <>
        <div><br /><br /><br /><br />
            <p 
                className={classes.para}
            >
                <strong>Selected Projects</strong>
            </p>
        </div><br /><br />
        <Grid container spacing={10} className={classes.root}>
        <Grid item xs={0.2} sm={0.2} md={0.2}></Grid>
            <Grid item xs={10} sm={10} md={5}>
                {/* Project 1 */}
                <Project1 />
            </Grid>
            <Grid item xs={10} sm={10} md={5}>
                {/* Project 2 */}
                <Project2 />
            </Grid>
        </Grid>

        <Grid container spacing={10} className={classes.root}>
            <Grid item xs={0.2} sm={0.2} md={0.2}></Grid>
            <Grid item xs={10} sm={10} md={5}>
                {/* Project 3 */}
                <Project3 />
            </Grid>

            <Grid item xs={10} sm={10} md={5}>
                {/* Project 4 */}
                <Project4 />  
            </Grid>
        </Grid>
    </>
  );
}
