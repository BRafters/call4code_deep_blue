import React, { useState, useEffect, Component } from 'react';
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonToolbar, IonFab, IonFabButton, IonIcon, IonTitle} from '@ionic/react';
import './Weather.css';
import WeatherData from './weather_data.js';
import CreateMap from './maps.js';
import { arrowUp } from 'ionicons/icons';

const Weather: React.FC = () => {
     let overlayOn = true;

     function moveOverlay() {
          let overlay = document.getElementById("home__overlay");
          let background = document.getElementById("background-circle");
          let button = document.getElementById("showOverlayBtn");

          if (overlay != null && background != null && button != null) {
               if (overlayOn) {
                    overlay.style.top = "-100vh";
                    background.style.top = "-100vh";
                    button.style.top = "1vh";
                    button.style.transform = "rotate(180deg)"
                    overlayOn = false;
               } else {
                    overlay.style.top = "-10vh";
                    background.style.top = "-25vh";
                    button.style.top = "58vh";
                    button.style.transform = "rotate(0deg)"
                    overlayOn = true;
               }
          }
     }

     return(
          <IonPage>
          <IonHeader>
          <IonToolbar color="primary">
               <IonButtons slot="end">
               <IonTitle>Weather</IonTitle>
               <IonMenuButton />
               </IonButtons>
          </IonToolbar>
          </IonHeader>

          <IonContent id="content" >
               <div id="background-circle"></div>
               <section id="home__overlay">
                    <WeatherData /> 
               </section>
               <IonFab id="showOverlayBtn" horizontal="center" slot="fixed">
                    <IonFabButton color="primary" onMouseDown={moveOverlay}> 
                         <IonIcon id="btnHideOverlay" icon={arrowUp} />
                    </IonFabButton>
               </IonFab>
               
               <section id="map_overlay">
                    <CreateMap />
               </section>
          </IonContent>
     </IonPage>
     );
     
}

export default Weather;