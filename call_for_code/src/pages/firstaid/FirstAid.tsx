import React from 'react';
import { useParams } from 'react-router';
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonNav, IonItem, IonLabel } from '@ionic/react';
import './FirstAid.css';

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
               <IonNav>
                    <IonItem button >
                         <IonLabel className="fonts">Test link</IonLabel>
                    </IonItem>
                    <IonItem button >
                         <IonLabel className="fonts">Test link</IonLabel>
                    </IonItem>
                    <IonItem button >
                         <IonLabel className="fonts">Test link</IonLabel>
                    </IonItem>
                    <IonItem button >
                         <IonLabel className="fonts">Test link</IonLabel>
                    </IonItem>
                    <IonItem button >
                         <IonLabel className="fonts">Test link</IonLabel>
                    </IonItem>
                    <IonItem button >
                         <IonLabel className="fonts">Test link</IonLabel>
                    </IonItem>
                    <IonItem button >
                         <IonLabel className="fonts">Test link</IonLabel>
                    </IonItem> 
                    <IonItem button >
                         <IonLabel className="fonts">Test link</IonLabel>
                    </IonItem>
                    <IonItem button >
                         <IonLabel className="fonts">Test link</IonLabel>
                    </IonItem>
               </IonNav>
          </IonContent> 
     </IonPage>
     );
}

export default FirstAid;