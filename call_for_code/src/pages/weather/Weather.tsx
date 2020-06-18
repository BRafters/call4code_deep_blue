import React from 'react';
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Weather.css';

const Home: React.FC = () => {
     
     return(
          <IonPage>
          <IonHeader>
          <IonToolbar color="primary">
               <IonButtons slot="end">
               <IonMenuButton />
               </IonButtons>
               <IonTitle>Home</IonTitle>
          </IonToolbar>
          </IonHeader>

          <IonContent>
               Weather Page
          </IonContent>


     </IonPage>
     );
}

export default Home;