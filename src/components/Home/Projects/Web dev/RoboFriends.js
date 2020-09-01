import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import ProjectImg1 from '../../../../assets/images/Robofriends.png';

const useStyles = makeStyles({
  root: {
    margin:0,
    padding:0,
    fontFamily:'Asap', 
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
});

const RoboFriends = (props) => {
  const classes = useStyles(props);
  return(
    <div>
      <img  
        className={classes.image} 
        src={ProjectImg1} 
        alt="project1" 
        onClick={() => window.open('https://n-e-k-0.github.io/Robofriends/')}
      />
    </div>
  )
}

export default RoboFriends;