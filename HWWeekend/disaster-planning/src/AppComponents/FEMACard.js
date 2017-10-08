import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import classnames from 'classnames';
import Card, { CardHeader, CardMedia, CardContent, CardActions } from 'material-ui/Card';
import Collapse from 'material-ui/transitions/Collapse';
import Avatar from 'material-ui/Avatar';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

const styles = theme => ({
  root: {
  	marginBottom: 155,
  	height: 255
  },

  card: {
    marginTop: '10px',
    maxWidth: 295,
    marginLeft: '15px',
    maxHeight: 120
  },
  media: {
    height: 154,
  },
  expand: {
  	display: 'flex',
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: '#F44336',
  },
  flexGrow: {
    flex: '1 1 auto',
  },
  button: {
		textAlign: 'left'

   }	
});

class FEMAStationCard extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState({ expanded: !this.state.expanded });
  };

  render() {
    const classes = this.props.classes;

    return (
      <div className={classes.root}>
        <Card className={classes.card}>
          <CardHeader
            avatar={
              <Avatar aria-label="Recipe" className={classes.avatar}>
                F
              </Avatar>
            }
            title="FEMA Camp 1"
            subheader="Posted Today"
          />
          <CardMedia
            className={classes.media}
            image="https://i.imgur.com/crisKjl.jpg"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography component="p">
              Summary of review: Not good, stay away! No more this camp! 
              This camp sucks! I hate this, don't ever come here again.
            </Typography>
          </CardContent>
          <CardActions disableActionSpacing>
           	<Button color="primary" className={classes.button}>
				Learn more
			</Button>
          </CardActions>
          
        </Card>
      </div>
    );
  }
}

export default withStyles(styles)(FEMAStationCard)
