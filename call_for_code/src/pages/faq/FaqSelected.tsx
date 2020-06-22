import React from 'react';
import { useParams } from 'react-router';
import { IonButtons, IonContent, IonHeader, IonIcon, IonMenuButton, IonPage, IonTitle, IonToolbar, IonNav, IonItem, IonLabel, IonList } from '@ionic/react';
import './Faq.css';

const FaqSelected: React.FC = () => {
    const { question } = useParams<{ question: string; }>();

     return(
     <IonPage>
          <IonHeader>
          <IonToolbar color="primary">
               <IonButtons slot="end">
               <IonMenuButton />
               </IonButtons>
               <IonTitle> {question} </IonTitle>
          </IonToolbar>
          </IonHeader>

          <IonContent>


     
          </IonContent> 
     </IonPage>
     );
}

export default FaqSelected;