import React from 'react';
import { useParams } from 'react-router';
import { IonButtons, IonContent, IonHeader, IonIcon, IonMenuButton, IonPage, IonTitle, IonToolbar, IonNav, IonItem, IonLabel, IonList, IonVirtualScroll } from '@ionic/react';
import { sadOutline, compassOutline, fitnessOutline, heartOutline, personOutline, restaurantOutline, roseOutline, snowOutline, walkOutline } from 'ionicons/icons';
import './FirstAid.css';

const FirstAid: React.FC = () => {

     const items = [
          {
               icon: sadOutline,
               name: "Test Link",
               color: "danger",
               size: "16px"
          },
          {
               icon: compassOutline,
               name: "Test Link",
               color: "danger",
               size: "16px"
          },
          {
               icon: fitnessOutline,
               name: "Test Link",
               color: "danger",
               size: "16px"
          },
          {
               icon: heartOutline,
               name: "Test Link",
               color: "danger",
               size: "16px"
          },
          {
               icon: personOutline,
               name: "Test Link",
               color: "danger",
               size: "16px"
          },
          {
               icon: restaurantOutline,
               name: "Test Link",
               color: "danger",
               size: "16px"
          },
          {
               icon: restaurantOutline,
               name: "Test Link",
               color: "danger",
               size: "16px"
          },
          {
               icon: restaurantOutline,
               name: "Test Link",
               color: "danger",
               size: "16px"
          },
          {
               icon: restaurantOutline,
               name: "Test Link",
               color: "danger",
               size: "16px"
          },
          {
               icon: restaurantOutline,
               name: "Test Link",
               color: "danger",
               size: "16px"
          },
          {
               icon: restaurantOutline,
               name: "Test Link",
               color: "danger",
               size: "16px"
          },
          {
               icon: restaurantOutline,
               name: "Test Link",
               color: "danger",
               size: "16px"
          },
          {
               icon: restaurantOutline,
               name: "Test Link",
               color: "danger",
               size: "16px"
          },
          {
               icon: restaurantOutline,
               name: "Test Link",
               color: "danger",
               size: "16px"
          },
          {
               icon: restaurantOutline,
               name: "Test Link",
               color: "danger",
               size: "16px"
          },
     ]

     return(
     <IonPage>
          <IonHeader>
          <IonToolbar color="primary">
               <IonButtons slot="start">
               <IonMenuButton />
               </IonButtons>
               <IonTitle>First Aid</IonTitle>
          </IonToolbar>
          </IonHeader>
          <IonContent>
               {
                    items.map(item => { return (
                         <IonItem button class="ion-item">
                              <IonIcon className="healthicon" icon={item.icon} color={item.color} size={item.size}></IonIcon>
                              <IonLabel className="fonts">{item.name}</IonLabel>
                         </IonItem> 
                    )})
               }
     
          </IonContent> 
     </IonPage>
     );
}

export default FirstAid;