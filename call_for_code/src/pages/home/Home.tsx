import React from 'react';
import { useParams } from 'react-router';
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Home.css';

const Home: React.FC = () => {
     const { name } = useParams<{name: string;}>();
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
          <IonHeader collapse="condense">
               <IonToolbar>
               <IonTitle size="large">{name}</IonTitle>
               </IonToolbar>
          </IonHeader>
            
          </IonContent>

          <IonContent>
               <IonHeader>
                    Home
               </IonHeader>
               
          </IonContent>

     </IonPage>
     );
}

export default Home;