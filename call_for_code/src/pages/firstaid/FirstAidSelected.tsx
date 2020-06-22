import React from 'react';
import { useParams } from 'react-router';
import { IonButtons, IonContent, IonHeader, IonIcon, IonMenuButton, IonPage, IonTitle, IonToolbar, IonNav, IonItem, IonLabel, IonList, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonBackButton } from '@ionic/react';
import data from '../../data.json';
import './FirstAid.css';

const FirstAidSelected: React.FC = () => {
     
    const { name } = useParams<{ name: string; }>();

    const pageData = data.firstaid;

    const item:any = pageData.find(item => item.link === name);

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
                    <IonTitle> {item.procedure} </IonTitle>
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
                                   item.steps.map((step: string, index: number) => {
                                   return(
                                        <IonItem key={index}>
                                             {step}
                                        </IonItem>
                                   )})
                              }
                              </IonList>
                         </IonCardContent>    
                    </IonCard>

               </IonContent> 
          </IonPage>
     );
}

export default FirstAidSelected;