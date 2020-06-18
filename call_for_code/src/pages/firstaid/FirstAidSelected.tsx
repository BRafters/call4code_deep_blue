import React from 'react';
import { useParams } from 'react-router';
import { IonButtons, IonContent, IonHeader, IonIcon, IonMenuButton, IonPage, IonTitle, IonToolbar, IonNav, IonItem, IonLabel, IonList, IonBackButton } from '@ionic/react';
import './FirstAid.css';

const FirstAidSelected: React.FC = () => {
    const { id } = useParams<{ id: string; }>();

    

     return(
     <IonPage>
          <IonHeader>
          <IonToolbar color="primary">
               <IonButtons slot="start">
                <IonBackButton/>
               </IonButtons>
               <IonButtons slot="end">
               <IonMenuButton />
               </IonButtons>
               <IonTitle> {id} </IonTitle>
          </IonToolbar>
          </IonHeader>

          <IonContent>


     
          </IonContent> 
     </IonPage>
     );
}

export default FirstAidSelected;