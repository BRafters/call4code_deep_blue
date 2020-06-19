import React from 'react';
import { useParams } from 'react-router';
import { IonButtons, IonContent, IonHeader, IonIcon, IonMenuButton, IonPage, IonTitle, IonToolbar, IonNav, IonItem, IonLabel, IonList, IonBackButton, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent} from '@ionic/react';
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
               <IonTitle>{item[0].procedure}</IonTitle>
               <IonCard>
            <IonCardHeader>
                <IonCardTitle>Care steps</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <IonList>
              {
                item[0].steps.map((step, index) => {
                  return (
                      <IonItem>
                        {step}
                      </IonItem>
                  )
                })

              }
              </IonList>
            </IonCardContent>
        </IonCard>
          </IonToolbar>
          </IonHeader>

          <IonContent>


     
          </IonContent> 
     </IonPage>
     );
}

export default FirstAidSelected;