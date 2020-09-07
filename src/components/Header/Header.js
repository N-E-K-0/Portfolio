import React from 'react';
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import { motion } from "framer-motion";
import Grid from '@material-ui/core/Grid';
import Resume from '../../Document/Resume.pdf';
// import Logo from '../../assets/images/favicon1.svg';

const useStyles = makeStyles((theme) => ({
root:{
    fontFamily:'Asap',
    fontSize:'1.2rem',
    padding:'1.5rem 0.5rem',
},
center: {
    marginTop:'1rem',
    alignItems: 'center',
    justifyContent: 'center',
    lineHeight: 1.5,
},
link:{
    textDecoration:'none',
    color:'inherit',
    '&:hover':{
        textDecoration: 'line-through',
        textDecorationColor: '#E7452C',
        fontSize:'1.3rem'
    }
},
logo:{
    width:'7rem',
    '&:hover':{
        cursor:'pointer',
    }
},
}));


const svgVariants={
    hidden:{
        pathLength: 0,
        fill: "rgba(1, 0, 38, 0)"
    },
    visible:{
        pathLength: 1,
        fill: 'rgba(1, 0, 38, 1)',
        transition:{
            duration: 1,
        },
    }
}


const pathVariants1={
    hidden:{
        pathLength: 0,
        fill: "rgba(231,69,44, 0)"
    },
    visible:{
        pathLength: 1,
        fill: 'rgba(231,69,44, 1)',
        transition:{
            duration: 1,
            delay:0.5
        },
    }
}

const pathVariants2={
    hidden:{
        pathLength: 0,
        fill: "rgba(1, 0, 38, 0)"
    },
    visible:{
        pathLength: 1,
        fill: 'rgba(1, 0, 38, 1)',
        transition:{
            duration: 1,
            delay:1
        },
    }
}

const Header = () => {
    const classes = useStyles();

    return(
        <React.Fragment>
            <Grid container className={classes.root}>
                <Grid item xs={9} sm={6} md={9}  className={classes.center}>
                    <motion.svg 
                        version="1.0" 
                        width="134.000000pt" 
                        height="70.000000pt" 
                        viewBox="0 0 134.000000 86.000000"
                        preserveAspectRatio="xMidYMid meet"
                        variants={svgVariants}
                        initial="hidden"
                        animate="visible"
                        whileHover={{ scale: 1.1 }}
                        style={{cursor:'pointer'}}
                        onClick={() => window.open("/")}
                        drag
                        dragConstraints={{left:0, top:0, right:0, bottom:0}}
                    >
                        <g transform="translate(0.000000,86.000000) scale(0.100000,-0.100000)"
                        fill="#010026" >
                        <motion.path 
                            d="M193 622 c-6 -4 -17 -20 -23 -36 -9 -24 -5 -45 26 -133 31 -91 34
                            -107 22 -119 -24 -24 -73 0 -91 44 l-15 37 -1 -38 c-1 -43 29 -82 73 -93 35
                            -8 54 0 68 31 10 22 7 40 -20 119 -18 52 -32 105 -32 118 0 28 17 48 41 48 22
                            0 32 -15 33 -48 1 -27 21 -41 28 -20 10 27 -13 79 -38 88 -30 12 -55 12 -71 2z"
                            variants={pathVariants1}
                            initial="hidden"
                            animate="visible"
                        />
                        <motion.path 
                            d="M1080 563 c-12 -27 -31 -89 -42 -140 -17 -70 -26 -93 -40 -97 -27 -6
                            -32 15 -13 60 12 30 13 39 3 46 -20 12 -25 10 -47 -25 -11 -18 -32 -43 -46
                            -57 l-26 -25 10 28 c6 15 17 40 26 57 19 37 19 60 -1 60 -9 0 -27 -25 -45 -65
                            -16 -35 -39 -69 -50 -76 -20 -10 -21 -9 -15 12 4 13 10 43 13 67 5 37 3 42
                            -14 42 -21 0 -43 -53 -43 -104 0 -21 -4 -27 -17 -24 -14 3 -18 14 -18 47 0 65
                            -23 74 -67 26 l-35 -38 1 44 c1 38 -2 44 -21 47 -14 2 -27 -5 -39 -22 -22 -35
                            -35 -33 -21 3 14 37 3 68 -18 51 -8 -7 -15 -20 -15 -29 -1 -18 -31 -109 -43
                            -128 -5 -7 -15 -13 -24 -13 -13 0 -15 9 -8 58 13 100 14 97 -20 94 -36 -4 -70
                            -34 -97 -85 -39 -76 2 -118 54 -56 24 30 27 32 28 13 0 -29 25 -48 52 -41 12
                            4 27 2 34 -4 9 -7 21 2 43 35 43 62 54 66 49 21 -2 -28 2 -40 15 -49 15 -9 24
                            -5 53 27 39 43 44 44 44 17 0 -27 45 -56 64 -41 10 8 16 9 21 1 9 -15 41 -12
                            55 5 11 13 14 12 29 -7 l18 -21 26 29 c15 16 27 32 27 36 0 5 5 8 10 8 6 0 10
                            -8 10 -18 0 -36 51 -57 77 -31 8 8 17 5 32 -10 12 -12 29 -21 39 -21 24 0 62
                            28 62 46 0 12 -4 13 -27 1 -16 -7 -35 -13 -43 -12 -23 1 -16 86 15 174 14 41
                            25 85 25 97 0 41 -19 35 -40 -13z"
                            variants={pathVariants2}
                            initial="hidden"
                            animate="visible"
                        />
                        </g>
                    </motion.svg>


                </Grid>
                <Grid item xs={1} sm={2} md={1} className={classes.center}>
                    <Link 
                        to="/about"
                        className={classes.link}
                    >
                        ABOUT
                    </Link>
                </Grid>

                <Grid item xs={1} sm={2} md={1} className={classes.center}>
                    <a 
                        className={classes.link}
                        href={Resume}
                    >
                        RESUME
                    </a>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}

export default Header;