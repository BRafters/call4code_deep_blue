import React from 'react';
import {WiFog, WiSprinkle, WiRain, WiThunderstorm, WiSnow, WiDaySunny, WiCloud} from 'react-icons/wi';

const DetermineWeather = (props) => {
     switch(props.current_weather){
          case "Rain":
               return <WiRain />;
          case "Drizzle":
               return <WiSprinkle />;
          case "Mist":
               return <WiSprinkle />;
          case "Thunderstorm":
               return <WiThunderstorm />;
          case "Fog":
               return <WiFog />;
          case "Snow":
               return <WiSnow />;
          case "Clear":
               return <WiDaySunny />;
          case "Clouds":
               return <WiCloud />;
          default: return "";
     }
}

export default DetermineWeather;