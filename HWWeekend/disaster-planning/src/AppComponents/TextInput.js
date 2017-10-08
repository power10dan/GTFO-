import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Input, { InputLabel } from 'material-ui/Input';
import { FormControl, FormHelperText } from 'material-ui/Form';


const styles = theme =>({
	container: {
	    display: 'block',
	    flexWrap: 'wrap',
	    marginLeft: '20px',
	    marginTop: '15px',
	},
	
	formControl: {
	    width: theme.spacing.unit*38,
	    marginBottom: '8px'
	},

	formControlNext: {
		display: 'flex',
	    flexWrap: 'wrap',
	    martinTop: '425px',
	    marginRight: '425px',
	    minWidth: '290px',
	    width: theme.spacing.unit*38
	}

});

class ComposedTextField extends React.Component {
  state = {
    name: 'San Francisco',
  };

  stateWhere = {
  	goto: 'Golden Gate Bridge'

  };

  handleChange = event => {
    this.setState({ name: event.target.value });
  };

  handleWhere = event =>{
  	this.setState({goto: event.target.value})
  };

  render() {
    const classes = this.props.classes;

    return (
      <div className={classes.container}>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="name-simple" >Where are you?</InputLabel>
          <Input id="name-simple" className={classes.formControl} value={this.state.name} onChange={this.handleChange} />
        </FormControl>
		<FormControl className={classes.formControlNext}>
		    <InputLabel htmlFor="name-helper"> Where are you going?</InputLabel>
		    <Input id="name-helper" value={this.stateWhere.goto} onChange={this.handleWhere} />
		</FormControl>
	 </div>
      
    );
  }
}

export default withStyles(styles)(ComposedTextField);