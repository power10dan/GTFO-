import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

const styles = theme => ({
	root: {
		width: '335px',
		position: 'relative',
	},
	flex: {
	    flex: 1,
	},

	toolStyle: {
		marginRight: 335,

	}
});

const AppTopBar = (props) =>{
	return(
		<div className={props.classes.root}>
			<AppBar position="static">
		        <Toolbar >
		          <Typography type="title" color="inherit" className={props.classes.flex}>
		            GTFO 
		          </Typography>
		        </Toolbar>
		      </AppBar>
		</div>
	);
};

export default withStyles(styles)(AppTopBar);
