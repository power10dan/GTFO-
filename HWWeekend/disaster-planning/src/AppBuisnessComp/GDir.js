/* global google */
import React from 'react';
import { compose, withProps, lifecycle } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Polyline,
  DirectionsRenderer,
  Marker
} from "react-google-maps";

import DirectionComp from '../AppComponents/DirectionComp.js';
import GTFOCard from '../AppComponents/BestDirectionCard.js';
import HeatmapLayer from "react-google-maps/lib/components/visualization/HeatmapLayer";

var stateOutside = {
	startLat: 37.7749,
	startLng: -122.4194,
	resp : ""
};

const googleMapsURL = "https://maps.googleapis.com/maps/api/js?key=AIzaSyC1ikzH_ZtMBJ9Os4CBd0X7eJ3ZLe6GJbA&v=3.exp&libraries=geometry,drawing,places,visualization"

const MapWithADirectionsRenderer = compose(
  withProps({
    googleMapURL: googleMapsURL,
    loadingElement: <div style={{ height: `400px` }} />,
    containerElement: <div style={{ width: `55%`, height: `0px`, marginLeft: '335px', marginTop: '0px', marginRight: '650px'}} />,
	mapElement: <div style={{ height: `950px`, width: '1036px', marginBottm: '125px'}} />,
  }),
  withScriptjs,
  withGoogleMap,
  lifecycle({
    componentDidMount() {
      const DirectionsService = new google.maps.DirectionsService();
      DirectionsService.route({
        origin: new google.maps.LatLng(stateOutside.startLat, stateOutside.startLng),
        destination: new google.maps.LatLng(37.8199, -122.4783),
        travelMode: google.maps.TravelMode.DRIVING,
        provideRouteAlternatives: true
      }, (result, status) => {
        if (status === google.maps.DirectionsStatus.OK) {
        	var dirObjs = []
        	var roadNames = []
           for(var i = 0; i < result.routes.length; i++){
      				var dirObj = result.routes[i].overview_path.map(function(o){
      					return {lat:o.lat(), lng:o.lng()};
      				});

      				var roadName = result.routes[i].summary
      				roadNames.push(roadName)

      				dirObjs.push(dirObj);
		      }
          
          var dirs = assignWeights(dirObjs)
          console.log(dirs[0].direct)
          this.setState({
          	name: roadNames[0],
          	directions: dirs[0].direct,
          	weight: dirs[0].color,
          	routeCond: dirs[0].best,
          	nameOne: roadName[1],
          	directionTwo: dirs[1].direct,
          	routeCondTwo: dirs[1].best,
          	weightTwo: dirs[1].color,
          	nameTwo: roadName[2],
          	directionThree: dirs[2].direct,
          	weightThree: dirs[2].color,
          	roadCondThree: dirs[2].best
          })

          console.log(this.state)

        } else {
          console.error(`error fetching directions ${result}`);
        }
      });
    }
  })
)(props =>	
	<div>
		  <GoogleMap
		    defaultZoom={13}
		    defaultCenter={new google.maps.LatLng(37.811730000000004, -122.47754)}>
		    	<Polyline path={props.directions} options={{strokeColor: props.weight,strokeWeight: 3}}/>
		    	<Polyline path={props.directionTwo} options={{strokeColor: props.weightTwo,strokeWeight: 3}}/>
		    	<Polyline path={props.directionThree} options={{strokeColor: props.weightThree3,strokeWeight: 3}} />
          <Marker
            position={{ lat: 37.77492, lng: -122.41928000000001 }}
          />

          <Marker
            position={{ lat: 37.798860000000005, lng: -122.44466000000001 }}
          />

		  </GoogleMap>	
      <HeatmapLayer
            data={[
                new google.maps.LatLng(37.77492, -122.41928000000001),
                new google.maps.LatLng( 37.77362,  -122.41888000000002),
                new google.maps.LatLng(37.77358, -122.41893),
                new google.maps.LatLng(37.773540000000004, -122.41899000000001),
                new google.maps.LatLng(37.773520000000005, -122.41907),
                new google.maps.LatLng(37.800560000000004, -122.43090000000001),
                new google.maps.LatLng(37.800320000000006, -122.43279000000001),
                new google.maps.LatLng(37.798860000000005, -122.44466000000001),
                new google.maps.LatLng(37.798930000000006, -122.44491000000001),
                new google.maps.LatLng(37.798860000000005, -122.44466000000001),
                new google.maps.LatLng(37.798930000000006, -122.44491000000001),
                new google.maps.LatLng(37.798860000000005, -122.44466000000001),
                new google.maps.LatLng(37.798930000000006, -122.44491000000001),
                new google.maps.LatLng(37.798860000000005, -122.44466000000001),
                new google.maps.LatLng(37.798930000000006, -122.44491000000001),
            ]}
        />
		  
	 </div>

	 		  
);

function assignWeights(input){
	var dirObjs = []
	for(var i = 0; i < input.length; i++){
		var weight = "";
		var randomWeight = Math.floor(Math.random() * 3) + 1 
		var isBest = "" 
		if(randomWeight === 3){
			weight="#800080";
			isBest=false
		}

		if(randomWeight === 2){
			weight="#0000ff";
			isBest=true
		}

		if(randomWeight === 1){
			weight="#FF0000";
			isBest=false
		}

		dirObjs.push({direct: input[i], color: weight, best: isBest})

	}


	return dirObjs;
}

export default MapWithADirectionsRenderer;
