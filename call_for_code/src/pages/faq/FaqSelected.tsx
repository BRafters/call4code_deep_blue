import React from 'react';
import { useParams } from 'react-router';
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonItem, IonList, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonBackButton } from '@ionic/react';
import data from '../../data.json';
import './Faq.css';

const FaqSelected: React.FC = () => {
     
    const { question } = useParams<{ question: string; }>();

    const pageData = data.faq;

    const item:any = pageData.find(item => item.link === question);

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
                    <IonTitle> Question and Answer </IonTitle>
               </IonToolbar>
               </IonHeader>

               <IonContent>
                    <IonCard>
                         <IonCardHeader>
                              <IonCardTitle>{item.question}</IonCardTitle>
                         </IonCardHeader>
                         <IonCardContent>
                              <IonList>
                              {
                                   item.answer.map((ans: string, index: number) => {
                                   return(
                                        <IonItem key={index}>
                                             {ans}
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

export default FaqSelected;