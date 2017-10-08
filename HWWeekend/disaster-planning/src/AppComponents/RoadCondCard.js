import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

const styles = {
  card: {
  	maxHeight: 270,
    maxWidth: 295,
    marginBottom: 40,
    marginTop: 10,
    marginLeft: '15px'
  },
  media: {
    height: 155,
  },
};

const ConditionCard = (props)=>{
	return(
		<div>
			<Card className={props.classes.card}>
				<CardMedia 
					className = {props.classes.media}
					image={props.mediaLink}
					title="Bad Condition"
				/>
				<CardContent>
			          <Typography type="headline" component="h2">
			            {props.title}
			          </Typography>
			          <ul>
			          	<li> {props.desc} </li>
			          	<li> {props.description}</li>
			          </ul>
		        </CardContent>
			</Card>
		</div>
	);	
}

export default withStyles(styles)(ConditionCard);