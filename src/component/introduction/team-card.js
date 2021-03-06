import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';



const useStyles = makeStyles({
  root: {
    maxWidth: 320,
     marginTop:10,
     
  },
  media: {
    height: 140,
  },
  img:{
      height:200,
  }
});


// image
//  name
//  post
// email
// emailseccond
// phone
 const TeamCard=(props)=> {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.image}
          title="Contemplative Reptile"
          className={classes.img}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props. name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          {props.post}
          </Typography>

          <Typography variant="body2" color="textSecondary" component="p">
          {props.email}
          </Typography>


          <Typography variant="body2" color="textSecondary" component="p">
          {props.emailseccond}
          </Typography>

          <Typography variant="body2" color="textSecondary" component="p">
          {props.phone}
          </Typography>

          
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
             View Detail
        </Button>
       
      </CardActions>
    </Card>
  );
}
export default TeamCard;