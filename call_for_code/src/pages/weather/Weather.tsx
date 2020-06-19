import React, { useState, useEffect, Component } from 'react';
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonToolbar } from '@ionic/react';
import './Weather.css';
import { setTimeout } from 'timers';
import { usePlatform} from "here-maps-react";
import WeatherData from './weather_data.js';

const Weather: React.FC = () => {
     // Here, we will do an API call using React hooks
     var [weather, setWeather] = useState<{}>();
     const [here, setHere] = useState<{}>();
     const [location, setLocation] = useState<{}>();

     // Weather URLS
     const weather_api_key = '323064339112e50c196f2652093e2a60';


     // HERE URLS
     const here_api_key = '1qDEkj05axzzZAiYKEtqwyovdBuc4SfyxuLktBbYNWA';
     const here_app_id = 'LAYxqcMgc4AzIuFwAVcR';
     const here_url = ``;

     

     const Header = (props: any) => <h1>{props.temp}</h1>

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
                    <WeatherData />
               </section>
          </IonContent>
     </IonPage>
     );
}

export default Weather;