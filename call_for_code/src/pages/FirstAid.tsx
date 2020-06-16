import React from 'react';
import { useParams } from 'react-router';
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';

const FirstAid: React.FC = () => {
     const { name } = useParams<{name: string;}>();
     return(
          <IonPage>
          <IonHeader>
          <IonToolbar color="primary">
               <IonButtons slot="start">
               <IonMenuButton />
               </IonButtons>
               <IonTitle>This is the First Aid Page</IonTitle>
          </IonToolbar>
          </IonHeader>

          <IonContent>
          <IonHeader collapse="condense">
               <IonToolbar>
               <IonTitle size="large">{name}</IonTitle>
               </IonToolbar>
          </IonHeader>
          <ExploreContainer name={name} />
          </IonContent>
     </IonPage>
     );
}

export default FirstAid;