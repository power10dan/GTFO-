import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import GTFOCard from '../AppComponents/BestDirectionCard.js';
import GTFOCardTwo from '../AppComponents/BestDirectionCardTwo.js';
import GTFOCardThree from '../AppComponents/BestDirectionCardThree.js';
import ButtonGroup from '../AppComponents/RowOfButtons.js';
import ConditionCard from '../AppComponents/RoadCondCard.js';
import FEMAStationCard from '../AppComponents/FEMACard.js';

class ButtonGroups extends React.Component{
	state = {
		GTFO: true,
		Cond: false,
		FEMA: false
	};

	getInitialSate = () => {
		if(this.state.GTFO === true){
			return true;
		} else {
			return false;
		}
	}

	onClickGTFO= () =>{
		this.setState({GTFO: true, Cond: false, FEMA: false});
	}

	onClickCond = () =>{
		this.setState({GTFO: false, Cond: true, FEMA: false});

	}

	onClickFEMA = ()=>{
		this.setState({ GTFO: false, Cond: false, FEMA:true});
	}

	render(){
		if(this.state.GTFO === true){
			return (
				<div>
					<ButtonGroup 
					  onGTFOClick={this.onClickGTFO} 
					  onCondClick={this.onClickCond}
					  onFEMAClick={this.onClickFEMA} 
					/>

					<GTFOCard />
					<GTFOCardTwo />
					<GTFOCardThree />
				</div>
			)
		} else if (this.state.Cond === true){
			return(
				<div>
					<ButtonGroup 
					  onGTFOClick={this.onClickGTFO} 
					  onCondClick={this.onClickCond}
					  onFEMAClick={this.onClickFEMA} 
					/>

					<ConditionCard  
					  title={"Franklin Street"} 
					  desc={"ET GO HOME"}
					  description={"Everything is bad"} 
					  mediaLink={"https://i.imgur.com/wenqdAY.jpg"}
					/>

					<ConditionCard  
					  title={"Balboa Street"}
					  desc={"I am dying"} 
					  description={"Too much storm "} 
					  mediaLink={"https://i.imgur.com/UZOFoFx.jpg"}
					/>

					<ConditionCard  
					  title={"Divisidero Street "} 
					  desc={"I think I am OK here"}
					  description={"OMG I AM DYING"} 
					  mediaLink={"https://i.imgur.com/NyQheVz.jpg"}
					/>

				</div>
			)
		} else {
			return(
			<div>
					<ButtonGroup 
					  onGTFOClick={this.onClickGTFO} 
					  onCondClick={this.onClickCond}
					  onFEMAClick={this.onClickFEMA} 
					/>

					<FEMAStationCard />
				</div>
			)
		}

		
	}
}

export default ButtonGroups