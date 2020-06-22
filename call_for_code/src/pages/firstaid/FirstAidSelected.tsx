import React from 'react';
import { useParams } from 'react-router';
import { IonButtons, IonContent, IonHeader, IonIcon, IonMenuButton, IonPage, IonTitle, IonToolbar, IonNav, IonItem, IonLabel, IonList, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonBackButton } from '@ionic/react';
import data from '../../data.json';
import './FirstAid.css';

const FirstAidSelected: React.FC = () => {
    const { id } = useParams<{ id: string; }>();

    const firstAidData = data[0].firstaid;

    const item = firstAidData.filter(FAProcedure => FAProcedure.id === parseInt(id));

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
               <IonTitle> {item[0].procedure} </IonTitle>
          </IonToolbar>
          </IonHeader>

          <IonContent>
          <IonCard>
               <IonCardHeader>
                    <IonCardTitle>Steps</IonCardTitle>
               </IonCardHeader>
               <IonCardContent>
                    <IonList>
                         {
                              item[0].steps.map((step, index) => {
                                   return(
                                        <IonItem key={index}>
                                             {step}
                                        </IonItem>
                                   )
                              })
                         }
                    </IonList>
               </IonCardContent>    
          </IonCard>

     
          </IonContent> 
     </IonPage>
     );
}

export default FirstAidSelected;