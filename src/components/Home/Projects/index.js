import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import roboImg from '../../../assets/images/Robofriends.png';
import touristImg from '../../../assets/images/Touristplace.jpg';
import faceImg from '../../../assets/images/Face_detection.JPG'
import goodealImg from '../../../assets/images/Prooject4.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: '60rem',
    height: '45rem',
  },
  gridListsingle: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
  header: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '5rem',
    padding: '1rem',
    fontSize: '1.5rem'
  }
}));

const aiData = [
  {
    img: roboImg,
    title: 'Robo Friends',
    link:'https://n-e-k-0.github.io/Robofriends/',
  },
  {
    img: touristImg,
    title: 'Tourist Place',
    link:'https://n-e-k-0.github.io/TouristPlace/',

  },
]

const webAppData = [
  {
    img: roboImg,
    title: 'Robo Friends',
    link:'https://n-e-k-0.github.io/Robofriends/',
  },
  {
    img: touristImg,
    title: 'Tourist Place',
    link:'https://n-e-k-0.github.io/TouristPlace/',

  },
  {
    img: faceImg,
    title: 'Face Detection',
    link:'https://github.com/N-E-K-0/Face_detection',
  },
  {
    img: goodealImg,
    title: 'Good Deal',
    link:'https://drive.google.com/file/d/13u0c-qfRbad0btDWF78aZeOtb2QMh_CU/view?usp=sharing',
  },
];

export default function SingleLineGridList() {
  const classes = useStyles();

  return (
    <div>
      {/* AI Projects */}
      <div className={classes.root}>
        <h1 className={classes.header}>AI Projects</h1>
        <GridList className={classes.gridListsingle} cols={3}>
          {aiData.map((project) => (
            <GridListTile key={project.img}>
              <img src={project.img} alt={project.title} />
              <GridListTileBar
                title={project.title}
                classes={{
                  root: classes.titleBar,
                  title: classes.title,
                }}
              />
            </GridListTile>
          ))}
        </GridList>
      </div>
      

      {/*  Web Apps */}
      <div className={classes.root}>
        <h1 className={classes.header}>Web Apps</h1>
        <GridList className={classes.gridListsingle} cols={3}>
          {webAppData.map((project) => (
            <GridListTile key={project.img}>
              <img src={project.img} alt={project.title} />
              <GridListTileBar
                title={project.title}
                classes={{
                  root: classes.titleBar,
                  title: classes.title,
                }}
              />
            </GridListTile>
          ))}
        </GridList>
      </div>
      
      {/* Mobile Apps */}
      <div></div>
    </div>
  );
}
