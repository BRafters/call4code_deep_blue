import React, { useState, useEffect } from 'react';
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Weather.css';
import { setTimeout } from 'timers';
import HEREMap from "here-maps-react";

const Weather: React.FC = () => {
     // Here, we will do an API call using React hooks
     const [weather, setWeather] = useState<{}>();
     const [here, setHere] = useState<{}>();

     // HERE URLS
     const here_api_key = '1qDEkj05axzzZAiYKEtqwyovdBuc4SfyxuLktBbYNWA';
     const here_app_id = 'LAYxqcMgc4AzIuFwAVcR';
     const here_url = `https://geocoder.api.here.com/search/6.2/geocode.json?languages=en-US&maxresults=4&app_id=${here_app_id}&app_code=${here_api_key}`;

     // Weather URLS
     const weather_api_key = 'e048464ad4461828615936fb1833883a';
     const weather_url = `
          https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&
          exclude=daily,hourly&appid=${weather_api_key}
     `;


     // Creating an asyncronous function that will update weather in useEffect
     async function get_weather(){
          await fetch(weather_url)
          .then(res => res.json())
          .then(res => setWeather({status: 'loaded', payload: res}));
     }

     function get_location(){
          fetch(here_url)
          .then(res => res.json())
          .then(res => setHere({status: 'loaded', payload: res}))
     }

     useEffect(() => {
          get_location();
     }, []);


     console.log(here);
     
     return(
          <IonPage>
          <IonHeader>
          <IonToolbar color="primary">
               <IonButtons slot="start">
               <IonMenuButton />
               </IonButtons>
          </IonToolbar>
          </IonHeader>

          <IonContent>
               <div id="background-circle"></div>
               <section id="home__overlay">
                    <h1 id="home__title">Home</h1>


                         <p>Hello</p>
                         <p>This is an information thing</p>


               </section>
          </IonContent>


     </IonPage>
     );
}

export default Weather;