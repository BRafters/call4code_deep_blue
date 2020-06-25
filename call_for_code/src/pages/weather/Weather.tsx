import React from 'react';
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonToolbar, IonFab, IonFabButton, IonIcon, IonTitle} from '@ionic/react';
import { arrowUp } from 'ionicons/icons';
import WeatherData from './weather_data.js';
import CreateMap from './maps.js';
import './Weather.css';

const Weather: React.FC = () => {
     let overlayOn = true;

     function moveOverlay() {
          let overlay = document.getElementById("weather__overlay");
          let background = document.getElementById("weather__background-circle");
          let button = document.getElementById("showOverlayBtn");

          if (overlay !== null && background !== null && button !== null) {
               if (overlayOn) {
                    overlay.style.top = "-100vh";
                    background.style.top = "-100vh";
                    button.style.top = "1vh";
                    button.style.transform = "rotate(180deg)"
                    overlayOn = false;
               } else {
                    overlay.style.top = "0";
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
               <IonTitle>Weather</IonTitle>
               <IonButtons slot="end">
                    <IonMenuButton />
               </IonButtons>
          </IonToolbar>
          </IonHeader>

          <IonContent id="content" >
               <div id="weather__background-circle"></div>
               <section id="weather__overlay">
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