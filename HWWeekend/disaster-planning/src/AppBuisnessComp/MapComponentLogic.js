import React from "react";
import {compose, withProps} from 'recompose';
import {withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

const GoogleMapKey = "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyC1ikzH_ZtMBJ9Os4CBd0X7eJ3ZLe6GJbA";

const GoogleMapsAPI = compose(
		  withProps({
		    googleMapURL: GoogleMapKey,
		    loadingElement: <div style={{ height: `400px` }} />,
		    containerElement: <div style={{ width: `55%`, height: `0px`, marginLeft: '335px', marginTop: '0px', marginRight: '650px'}} />,
		    mapElement: <div style={{ height: `950px`, width: '1036px', marginBottm: '125px'}} />,
		  }),
		  withScriptjs,
		  withGoogleMap
	)((props) =>
		  <GoogleMap
		    defaultZoom={15}
		    defaultCenter={{ lat: props.latOrigin, lng: props.lngOrigin }}
		  >
		   {props.isMarkerShown && <Marker position={{ lat: props.latOrigin, 
		   											   lng: props.lngOrigin }} />}
		  </GoogleMap>
	)

export default GoogleMapsAPI;