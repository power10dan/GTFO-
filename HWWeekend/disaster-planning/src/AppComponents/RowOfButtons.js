import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import GTFOCard from './BestDirectionCard.js';

const styles = theme =>({
	container: {
		marginTop: '15px',
		marginLeft: '5px',

	},
	
	button: {
		textAlign: 'left'

	},	
});

const ButtonGroups = (props) => {
	return(
		<div className={props.classes.container}>
			<Button 
				color="primary" 
				className={props.classes.button}
				onClick= {props.onGTFOClick}
			>
				GTFO 
			</Button>

			<Button 
				color="primary" 
				className={props.classes.button}
				onClick={props.onCondClick}
			>
				 Conditions
			</Button>

			<Button 
				color="primary" 
				className={props.classes.button}
				onClick={props.onFEMAClick}
			>
				FEMA sites
			</Button>

		</div>
	);
};

export default withStyles(styles)(ButtonGroups);