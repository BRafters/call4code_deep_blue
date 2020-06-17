import React from 'react';
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Faq.css';

const Faq: React.FC = () => {
     
     return(
          <IonPage>
          <IonHeader>
          <IonToolbar color="primary">
               <IonButtons slot="start">
               <IonMenuButton />
               </IonButtons>
               <IonTitle>Faq</IonTitle>
          </IonToolbar>
          </IonHeader>

          <IonContent>
            FAQ Page
          </IonContent>


     </IonPage>
     );
}

export default Faq;