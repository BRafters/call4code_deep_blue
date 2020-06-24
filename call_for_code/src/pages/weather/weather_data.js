import React from 'react';
import DetermineWeather from './determine_icon';


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
          const weather = this.props.curr_weather;
          var temp, daily_high, daily_low, description, current_weather_activity;

          // Making sure that weather is not null or undefined
          if(weather){
               temp = weather.current.temp;

               // Retrieving the current weather 
               current_weather_activity = weather.current.weather[0].main;

               daily_high = +weather.daily[0].temp.max;
               daily_low = +weather.daily[0].temp.min;
               description = weather.current.weather[0].description;
               console.log(weather.current.weather[0].main)
               if(typeof(description) === 'string'){
                    description = description.charAt(0).toUpperCase() + description.slice(1);
               }
          }
          return(
               <div className="weather-content">
                    {!!current_weather_activity && <DetermineWeather id="icon" current_weather={current_weather_activity} />}
                    {!!temp && <h1 className="temp_h1">{temp.toFixed(0)}°C</h1>}
                    {!!description && <h2 className="temp_h2">{description}</h2>}
                    {!!daily_high && <h4 className="high_low">High: {daily_high.toFixed(0)}°C</h4>}
                    {!!daily_low && <h4 className="high_low">Low: {daily_low.toFixed(0)}°C</h4>}
               </div>
          );

     }
}

export default WeatherData;