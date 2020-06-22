import React from 'react';
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Assistant.css';



const Home: React.FC = () => {
     
     return(
          <IonPage>
          <IonHeader>
          <IonToolbar color="primary">
               <IonButtons slot="end">
               <IonMenuButton />
               </IonButtons>
               <IonTitle>Assistant</IonTitle>
          </IonToolbar>
          </IonHeader>

          <IonContent>
               <h1>Header</h1>
               <h2>Header 2</h2>
               <p>Paragraph text</p>
               <a href="#">link</a>
          </IonContent>


     </IonPage>
     );
}

export default Home;