import React from "react";
import GoogleMapsAPI from '../AppBuisnessComp/MapComponentLogic.js';

class GoogleMapsComponent extends React.Component{
	state = {
		latOrigin : 37.773972,
		lngOrigin : -122.431297,
		isMarkerShown : true
	}

	handleMarkerClick = () => {
		console.log("hello world");
	}

	render(){
		return(
			<GoogleMapsAPI 
			 isMarkerShown = {this.state.isMarkerShown}
			 onMarkerClick = {this.handleMarkerClick}
			 latOrigin = {this.state.latOrigin}
			 lngOrigin = {this.state.lngOrigin}
			 />
		);
	}
}

export default GoogleMapsComponent;




