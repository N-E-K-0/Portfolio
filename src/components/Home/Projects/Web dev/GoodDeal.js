import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import ProjectImg4 from '../../../../assets/images/Prooject4.jpg';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function GoodDeal() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={ProjectImg4}
          title="ProjectImg4"
          onClick={() => window.open('https://drive.google.com/file/d/13u0c-qfRbad0btDWF78aZeOtb2QMh_CU/view?usp=sharing')}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            GoodDeal
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            This website assists you find right price for the right product.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
