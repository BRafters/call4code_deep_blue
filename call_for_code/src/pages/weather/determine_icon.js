import React from 'react';
import {WiFog, WiSprinkle, WiRain, WiThunderstorm, WiSnow, WiDaySunny, WiCloud} from 'react-icons/wi';

const DetermineWeather = (props) => {
     switch(props.current_weather){
          case "Rain":
               return <WiRain />;
               break;
          case "Drizzle":
          case "Mist":
               return <WiSprinkle />;
               break;
          case "Thunderstorm":
               return <WiThunderstorm />;
               break;
          case "Fog":
               return <WiFog />;
               break;
          case "Snow":
               return <WiSnow />;
               break;
          case "Clear":
               return <WiDaySunny />;
               break;
          case "Clouds":
               return <WiCloud />;
               break;
     }
}

export default DetermineWeather;