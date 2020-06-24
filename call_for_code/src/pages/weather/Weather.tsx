import React, { useState, useEffect, Component } from 'react';
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonToolbar, IonTitle } from '@ionic/react';
import './Weather.css';
import WeatherData from './weather_data.js';
import CreateMap from './maps.js';

const Weather: React.FC = () => {
     return(
          <IonPage>
          <IonHeader id="header">
               <IonToolbar color="primary" >
                    <IonButtons slot="end">
                    <IonTitle id="title">Weather</IonTitle>
                    <IonMenuButton />
                    </IonButtons>
               </IonToolbar>
          </IonHeader>

          <IonContent id="content" >
               <div id="background-circle"></div>
               <section id="home__overlay">
                    <WeatherData />
               </section>
               <section id="map_overlay">
                    <CreateMap />
               </section>
          </IonContent>
     </IonPage>
     );
}

export default Weather;