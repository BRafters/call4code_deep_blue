import React from 'react';
import {GoogleMap, LoadScript, Marker } from '@react-google-maps/api';


navigator.geolocation.getCurrentPosition((position) => {
     localStorage.setItem('lat', position.coords.latitude);
     localStorage.setItem('lon', position.coords.longitude);
});


const container_size = {
     height: '100%',
     width: '100vw'
}


var coords = {lat: +localStorage.getItem('lat'), lng: +localStorage.getItem('lon')}

function CreateMap(){
     const [map, setMap] = React.useState(null);
     const onload = React.useCallback(function callback(map){
          const map_bounds = new window.google.maps.LatLngBounds();
          map.position = coords;
          // map.fitBounds(map_bounds);
          
          setMap(map);
     }, []);

     const marker_onload = marker => {
          console.log("Marker: " + marker);
     }

     const onUnmount = React.useCallback(function callback(map){
          setMap(null);
     }, []);

     return(
          <LoadScript googleMapsApiKey="AIzaSyD7XNWpI2t8d0tyEXl1IJn0FTf0xGobHD8">
               <GoogleMap
                    mapContainerStyle={container_size}
                    center={coords}
                    zoom={12}
                    onLoad={onload}
                    onUnmount={onUnmount}>
                    <Marker onLoad={marker_onload} position={coords}/>
               </GoogleMap>
          </LoadScript>
     );
}

export default React.memo(CreateMap);
