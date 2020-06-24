import React from 'react';
import { IonButtons, IonContent, IonHeader, IonIcon, IonMenuButton, IonPage, IonTitle, IonToolbar, IonItem, IonLabel } from '@ionic/react';
import { helpOutline } from 'ionicons/icons';
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
               <IonButtons slot="end">
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