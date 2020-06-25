import React from 'react';
import { useParams } from 'react-router';
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonItem, IonList, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonBackButton } from '@ionic/react';
import data from '../../data.json';
import './Survival.css';

const SurvivalSelected: React.FC = () => {
     
    const { name } = useParams<{ name: string; }>();

    const page = data.survival;

    const item:any = page.find(item => item.link === name);

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
                    <IonTitle> {item.category} </IonTitle>
               </IonToolbar>
               </IonHeader>

               <IonContent>
                    <div>
                    {
                         item.methods.map((method: any, index: number) => {
                              return (
                                   <IonCard>
                                        <IonCardHeader>
                                             <IonCardTitle>{method.name}</IonCardTitle>
                                        </IonCardHeader>
                                        <IonCardContent>
                                             <IonList> 
                                                  {
                                                       method.steps.map((step: string, key: number) => {
                                                            return (                                  
                                                                 <IonItem key={key}>
                                                                      {step}
                                                                 </IonItem>
                                                            );
                                                       })
                                                  }
                                             </IonList>
                                        </IonCardContent>    
                                   </IonCard>
                              )
    
                         })
                    }
                    </div>
               </IonContent> 
          </IonPage>
     );
}

export default SurvivalSelected;