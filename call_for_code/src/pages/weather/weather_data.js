import React from 'react';
import { sunnyOutline, cloudOutline, rainyOutline, thunderstormOutline } from 'ionicons/icons';
import {IonIcon} from '@ionic/react';

class WeatherData extends React.Component {
     constructor(props){
          super(props);
          this.state = {
               weather: {}
          }
     }
     lat = localStorage.getItem('lat');
     long = localStorage.getItem('lon');

     componentWillMount(){
          navigator.geolocation.getCurrentPosition(async (position) => {
               let { latitude, longitude } = position.coords;
               localStorage.setItem('lat', latitude.toString());
               localStorage.setItem('lon', longitude.toString());
               
          });
          fetch("https://api.openweathermap.org/data/2.5/onecall?lat=" + localStorage.getItem('lat') + "&lon=" + localStorage.getItem('lon') + "&exclude=hourly,minutely&units=metric&appid=323064339112e50c196f2652093e2a60")
          .then(res => res.json())
          .then(resjson => this.setState({weather: resjson}))
          localStorage.clear();
     }
     render(){
          
          if(!this.state.weather.current){
               return(
                    <Header err="loading"/>
               );
          }
          else{
               return(
                    <Header curr_weather={this.state.weather} />
               )
          }
     }
}
class Header extends React.Component{
     constructor(props){
          super(props);
     }

     render(){
          const weather = this.props.curr_weather
          var temp, icon, daily_high, daily_low;
          if(weather){
               temp = weather.current.temp;
               if(weather.current.weather[0].main === "Clear"){
                    icon = sunnyOutline;
               }
               else if(weather.current.weather[0].main === "Cloudy"){
                    icon = cloudOutline;
               }
               else if(weather.current.weather[0].main === "Rain"){
                    icon = rainyOutline;
               }
               else if(weather.current.weather[0].main === "Thunderstorm"){
                    icon = thunderstormOutline;
               }
               console.log(weather.daily[0]);
               daily_high = +weather.daily[0].temp.max;
               daily_low = +weather.daily[0].temp.min;
          }
          return(
               <div>
                    <IonIcon className="icons" icon={icon}/>
                    {!!temp && <h1 className="temp_h1">{temp.toFixed(0)}°C</h1> }
                    {!!daily_high && <h4 className="high_low">High: {daily_high.toFixed(0)}°C</h4>}
                    {!!daily_low && <h4 className="high_low">Low: {daily_low.toFixed(0)}°C</h4>}
               </div>
          );

     }
}

export default WeatherData