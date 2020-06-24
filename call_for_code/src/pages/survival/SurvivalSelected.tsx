import React from 'react';
import { useParams } from 'react-router';
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar} from '@ionic/react';
import './Survival.css';
import '../general.css';

const SurvivalSelected: React.FC = () => {
    const { id } = useParams<{ id: string; }>();

     return(
     <IonPage>
          <IonHeader>
          <IonToolbar color="primary">
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

export default SurvivalSelected;