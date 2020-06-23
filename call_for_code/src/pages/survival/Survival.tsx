import React from 'react';
import { IonButtons, IonContent, IonHeader, IonIcon, IonMenuButton, IonPage, IonTitle, IonToolbar, IonItem, IonLabel } from '@ionic/react';
import { sadOutline, compassOutline, fitnessOutline, heartOutline, personOutline, restaurantOutline } from 'ionicons/icons';
import './Survival.css';

const Survival: React.FC = () => {

     const items = [
          {
               icon: sadOutline,
               name: "Test Link",
               color: "danger"
          },
          {
               icon: compassOutline,
               name: "Test Link",
               color: "danger"
          },
          {
               icon: fitnessOutline,
               name: "Test Link",
               color: "danger"
          },
          {
               icon: heartOutline,
               name: "Test Link",
               color: "danger"
          },
          {
               icon: personOutline,
               name: "Test Link",
               color: "danger"
          },
          {
               icon: restaurantOutline,
               name: "Test Link",
               color: "danger"
          },
          {
               icon: restaurantOutline,
               name: "Test Link",
               color: "danger"
          },
          {
               icon: restaurantOutline,
               name: "Test Link",
               color: "danger"
          },
          {
               icon: restaurantOutline,
               name: "Test Link",
               color: "danger"
          },
          {
               icon: restaurantOutline,
               name: "Test Link",
               color: "danger"
          },
          {
               icon: restaurantOutline,
               name: "Test Link",
               color: "danger"
          },
          {
               icon: restaurantOutline,
               name: "Test Link",
               color: "danger"
          },
          {
               icon: restaurantOutline,
               name: "Test Link",
               color: "danger"
          },
          {
               icon: restaurantOutline,
               name: "Test Link",
               color: "danger"
          },
          {
               icon: restaurantOutline,
               name: "Test Link",
               color: "danger"
          },
     ]

     return(
     <IonPage>
          <IonHeader>
          <IonToolbar color="primary">
               <IonButtons slot="end">
               <IonMenuButton />
               </IonButtons>
               <IonTitle>Survival</IonTitle>
          </IonToolbar>
          </IonHeader>

          <IonContent>
               {
                    items.map((item, key) => { return(
                         <IonItem button key={key}>
                              <IonIcon icon={item.icon} color={item.color}></IonIcon>
                              <IonLabel className="fonts"> {item.name} </IonLabel>
                         </IonItem> 
                    )})
               }
          </IonContent> 
     </IonPage>
     );
}

export default Survival;