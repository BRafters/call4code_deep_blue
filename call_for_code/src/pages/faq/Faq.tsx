import React from 'react';
import { useParams } from 'react-router';
import { IonButtons, IonContent, IonHeader, IonIcon, IonMenuButton, IonPage, IonTitle, IonToolbar, IonNav, IonItem, IonLabel, IonList } from '@ionic/react';
import { sadOutline, compassOutline, fitnessOutline, heartOutline, personOutline, restaurantOutline, roseOutline, snowOutline, walkOutline, helpOutline } from 'ionicons/icons';
import './Faq.css';

const Faq: React.FC = () => {

     const items = [
          {
               question: "Does this thing work?",
               answer: "Yes"
          }
     ]

     return(
     <IonPage>
          <IonHeader>
          <IonToolbar color="primary">
               <IonButtons slot="start">
               <IonMenuButton />
               </IonButtons>
               <IonTitle>FAQ</IonTitle>
          </IonToolbar>
          </IonHeader>

          <IonContent>

               {
                    items.map((item, key) => { return(
                         <IonItem button key={key}>
                              <IonIcon icon={helpOutline} color="dark"></IonIcon>
                              <IonLabel className="fonts"> {item.question} </IonLabel>
                         </IonItem> 
                    )})
               }
     
          </IonContent> 
     </IonPage>
     );
}

export default Faq;