import React from 'react';

// Referred to the tutorial from HERE -> https://developer.here.com/tutorials/react/
class DisplayMap extends React.Component{
     constructor(props){
          super(props);
          mapRef = React.createRef();

          this.state = {
               // The map will be set to default 
               map: null
          }
     }
     componentDidMount(){
          const coords = {latitude: localStorage.getItem('lat'), longitude: localStorage.getItem('lon')};
          const here_api_key = '1qDEkj05axzzZAiYKEtqwyovdBuc4SfyxuLktBbYNWA';
          const H = window.H;
          const platform = new H.service.Platform({
               apiKey: here_api_key
          });

          const default_layers = platform.createDefaultLayers();

          // Now, we will create an instance of the map
          const map = new H.map(
               this.mapRef.current,
               default_layers.vector.normal.map,
               {
                    center: {lat: coords.latitude, lon: coords.longitude},
                    zoom: 4,
                    pixelRatio: window.devicePixelRatio || 1
               }
          );

          this.setState({
               map
          });
     }

     // Clean up for the maps to avoid mem leaks
     componentWillUnmount(){
          this.state.map.dispose;
     }
 
     render(){
          return(
               <div ref={this.mapRef} style={{height: '500px'}}/>
          );
     }
}