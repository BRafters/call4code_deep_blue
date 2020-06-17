import React from 'react';
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Survival.css';

const Home: React.FC = () => {
     
     return(
          <IonPage>
          <IonHeader>
          <IonToolbar color="primary">
               <IonButtons slot="start">
               <IonMenuButton />
               </IonButtons>
               <IonTitle>Home</IonTitle>
          </IonToolbar>
          </IonHeader>

          <IonContent>
               Survival Page
          </IonContent>


     </IonPage>
     );
}

export default Home;