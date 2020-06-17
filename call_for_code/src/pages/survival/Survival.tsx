import React from 'react';
import { useParams } from 'react-router';
import { IonButtons, IonContent, IonHeader, IonIcon, IonMenuButton, IonPage, IonTitle, IonToolbar, IonNav, IonItem, IonLabel, IonList } from '@ionic/react';
import { sadOutline, compassOutline, fitnessOutline, heartOutline, personOutline, restaurantOutline, roseOutline, snowOutline, walkOutline } from 'ionicons/icons';
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
               <IonButtons slot="start">
               <IonMenuButton />
               </IonButtons>
               <IonTitle>Survival</IonTitle>
          </IonToolbar>
          </IonHeader>

          <IonContent>

               {
                    items.map(item => { return(
                         <IonItem button >
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