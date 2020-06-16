import React from 'react';
import { useParams } from 'react-router';
import { IonButtons, 
     IonContent, 
     IonHeader, 
     IonMenuButton, 
     IonPage, 
     IonTitle, 
     IonToolbar, 
     IonNav, 
     IonItem, 
     IonLabel,
     IonIcon,
     IonList } from '@ionic/react';

import { cameraOutline } from 'ionicons/icons';
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
               <IonNav className="hydrated">
                    <IonList>
                         <IonItem button>
                              <IonIcon icon={cameraOutline}></IonIcon>
                              <IonLabel>This is a label</IonLabel>
                         </IonItem>
                         <IonItem button>
                              <IonIcon icon={cameraOutline}></IonIcon>
                              <IonLabel>This is another label</IonLabel>
                         </IonItem>
                    </IonList>
               </IonNav>
          <ExploreContainer name={name} />
          </IonContent>
     </IonPage>
     );
}

export default FirstAid;