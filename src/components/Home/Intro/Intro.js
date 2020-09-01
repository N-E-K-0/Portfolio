import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { motion } from "framer-motion"
import Typical from 'react-typical';
import cover from '../../../assets/images/cover.jpg'

const useStyles = makeStyles((theme) => ({
  intro:{
    height:'10rem',
    padding:'1rem 5rem',  
    marginRight: '0.5rem',
    '&::before': {
      backgroundImage:`url(${cover})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'right',
      content: '""',
      top: '0px',
      right: '0px',
      bottom: '0px',
      left: '0px',
      opacity: '0.75',
    },
  },
  h1:{
    fontSize:'4.5rem',
  },
  p:{
    float:'left',
    fontSize:'2rem',
  },
  text:{
    color:'#E7452C',
  }
}));

const Intro = () => {
  const classes = useStyles();
  return(
    <motion.div 
      className={classes.intro}
      animate={{ scale: 1.05}}
      transition={{ duration: 1.5 }}
    >
      <h1 className={classes.h1}>Hi! I'm&nbsp;<span className={classes.text}>Samiul</span></h1>
      <p className={classes.p}>I'm &nbsp;
      <Typical 
        loop={Infinity}
        wrapper="b"
        steps={[
            'an engineer, ',
            2000,
            'a developer, ',
            2000,
        ]}
      />
      graduated in computer sceince and engineering and currently working as a freelance web developer.
      </p>
    </motion.div>
  )
}

export default Intro;