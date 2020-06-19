import React from 'react';
import {sunnyOutline } from 'ionicons/icons';
import {IonIcon} from '@ionic/react';

class WeatherData extends React.Component {
     constructor(props){
          super(props);
          this.state = {
               weather: {}
          }
     }
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
          var temp, icon;
          if(weather){
               temp = weather.current.temp;
               if(weather.current.weather[0].main === "Clear"){
                    icon = sunnyOutline;
               }
          }
          return(
               <div>
                    <IonIcon className="icons" icon={icon}/>
                    {!!temp && <h1 className="temp">{temp.toFixed(0)}°C</h1> }
                    {/*<h3>High {daily.}</h3> */}
               </div>
          );

     }
}

export default WeatherData