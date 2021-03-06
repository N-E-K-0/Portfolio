import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '25rem',
    cursor: 'pointer',
    '&:hover':{
      flexGrow: 1,
      transform: 'scale(1.05)',
      transition:'0.5s'
    }
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  avatar: {
    backgroundColor: '#E7473A',
  },
}));

const ProjectCard = (props) => {
  const classes = useStyles();
  const {img, text, header, link} = props

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {props.letter}
          </Avatar>
        }
        title={header}
      />
      <CardMedia
        className={classes.media}
        image={img}
        title={header}
        onClick={() => window.open(link)}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {text}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default ProjectCard;
