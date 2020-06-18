import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { IonButtons, 
     IonContent, 
     IonHeader, 
     IonMenuButton, 
     IonPage, 
     IonTitle, 
     IonToolbar, 
     IonCard,
     IonCardHeader,
     IonCardSubtitle,
     IonCardTitle,
     IonCardContent,
     IonList,
     IonItem } from '@ionic/react';
import data from './firstAidData.json';
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
               <IonTitle>Emergency First Aid Procedures</IonTitle>
          </IonToolbar>
          </IonHeader>
          <IonContent>
          <IonHeader collapse="condense">
               <IonToolbar>
               <IonTitle size="large">{name}</IonTitle>
               </IonToolbar>
          </IonHeader>
               <IonList>
                    {
                         data.map((firstAidProcedure, index)=>{
                              return (
                                   <IonItem href={`/FirstAid/${firstAidProcedure.id}`} key={index}>
                                             {firstAidProcedure.procedure}
                                   </IonItem>
                              )
                         })
                    }
               </IonList>
          </IonContent>

          
     </IonPage>
     );
}

export default FirstAid;