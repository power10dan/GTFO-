import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, {CardContent, CardMedia, CardActions} from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';

const styles = theme => ({
	root:{
		width: 125,
		height: 145,
	},
	card: {
		marginTop: '15px',
		display: 'block',
		width: '325px',
		height: '140px',
		marginLeft: '5px'
	},

	details: {
		display: 'flex',
		flexDirection: 'column'
	},

	content: {
		fontSize: 8,
		flex: '1 0 auto'
		
	},

	cover: {
		width: 110,
		height: 140,
		marginLeft:'215px',
		position: 'absolute',
	},

	buttonStyle: {
		marginTop: theme.spacing.unit,
		marginLeft: '5px'
	}
});

const GTFOCardThree = (props) =>{
	return(

		<div className={props.classes.root}>
			<Card className={props.classes.card} >
				<div className={props.classes.details}>
					<CardContent className={props.classes.content}>
						<Typography type="subheading"> Divisidero Street </Typography>
						<Typography type="subheading" color="secondary"> Good Road</Typography>
					</CardContent>
					
					<CardMedia 
					   className = {props.classes.cover}
					   image="https://i.imgur.com/3i53Rba.jpg"
					   title="Bad Condition"
					/>

					<CardActions>
			        	<Button color="primary" >
				        	Use Route
				    	</Button>
			 		</CardActions>
				</div>
			</Card>
		</div>
	)
}






export default withStyles(styles)(GTFOCardThree)
