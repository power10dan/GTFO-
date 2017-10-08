import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GoogleMapsComponent from './AppComponents/MapComponent.js';
import AppTopBar from './AppComponents/AppActBar.js';
import ComposedTextField from './AppComponents/TextInput.js';
import ButtonComp from './AppBuisnessComp/ButtonComp.js';
import MapWithADirectionsRenderer from './AppBuisnessComp/GDir.js';
import GTFOCard from './AppComponents/BestDirectionCard.js';


class App extends Component {
  render() {
    return (
      <div>
        <MapWithADirectionsRenderer startLat={41.8507300} startLng={-87.6512600}/>
        <AppTopBar />
        <ComposedTextField />
        <ButtonComp />
      </div>
    );
  }
}

export default App;
