import React from 'react';
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Report.css';
import '../general.css';


const Report: React.FC = () => {
     
     return(
          <IonPage>
          <IonHeader>
          <IonToolbar color="primary">
               <IonButtons slot="end">
               <IonMenuButton />
               </IonButtons>
               <IonTitle>Report</IonTitle>
          </IonToolbar>
          </IonHeader>

          <IonContent>
            Report Page
          </IonContent>


     </IonPage>
     );
}

export default Report;