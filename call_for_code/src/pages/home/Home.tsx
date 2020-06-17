import React from 'react';
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Home.css';

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
               <div id="background-circle"></div>

               <section id="title-box">
                    <img src="../../../../public/assets/favicon.png" alt="" />
                    <h1 id="title">Home</h1>

               </section>

          </IonContent>


     </IonPage>
     );
}

export default Home;