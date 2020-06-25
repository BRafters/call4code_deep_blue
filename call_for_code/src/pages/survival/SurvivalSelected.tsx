import React from 'react';
import { useParams } from 'react-router';
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonItem, IonList, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonBackButton } from '@ionic/react';
import data from '../../data.json';
import './Survival.css';
import '../general.css';

const SurvivalSelected: React.FC = () => {
     
    const { name } = useParams<{ name: string; }>();

    const pageData = data.survival;

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

export default SurvivalSelected;