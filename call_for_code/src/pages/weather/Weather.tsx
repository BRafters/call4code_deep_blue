import React, { useState, useEffect, Component } from 'react';
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonToolbar } from '@ionic/react';
import './Weather.css';
import WeatherData from './weather_data.js';

const Weather: React.FC = () => {
     // Here, we will do an API call using React hooks
     // var [weather, setWeather] = useState<{}>();
     // const [here, setHere] = useState<{}>();
     // const [location, setLocation] = useState<{}>();

     // HERE URLS
     const here_app_id = 'LAYxqcMgc4AzIuFwAVcR';

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
               <section id="map_overlay">
               </section>
          </IonContent>
     </IonPage>
     );
}

export default Weather;