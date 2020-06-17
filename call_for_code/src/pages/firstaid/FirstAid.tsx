import React from 'react';
import { useParams } from 'react-router';
import { IonButtons, IonContent, IonHeader, IonIcon, IonMenuButton, IonPage, IonTitle, IonToolbar, IonNav, IonItem, IonLabel,
      IonList, IonVirtualScroll } from '@ionic/react';
import { IonButtons, IonContent, IonHeader, IonIcon, IonMenuButton, IonPage, IonTitle, IonToolbar, IonNav, IonItem, IonLabel, IonList } from '@ionic/react';
import { sadOutline, compassOutline, fitnessOutline, heartOutline, personOutline, restaurantOutline, roseOutline, snowOutline, walkOutline } from 'ionicons/icons';
import './FirstAid.css';

const FirstAid: React.FC = () => {

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
               <IonTitle>First Aid</IonTitle>
          </IonToolbar>
          </IonHeader>
          <IonContent>
               <IonItem button >
                    <IonIcon icon={sadOutline} className="health"></IonIcon>
                    <IonLabel className="fonts">Test link</IonLabel>
               </IonItem>
               <IonItem button >
                    <IonIcon icon={compassOutline} className="health"></IonIcon>
                    <IonLabel className="fonts">Test link</IonLabel>
               </IonItem>
               <IonItem button >
                    <IonIcon icon={fitnessOutline} className="health"></IonIcon>    
                    <IonLabel className="fonts">Test link</IonLabel>
               </IonItem>
               <IonItem button >
                    <IonIcon icon={heartOutline} className="health"></IonIcon>
                    <IonLabel className="fonts">Test link</IonLabel>
               </IonItem>
               <IonItem button >
                    <IonIcon icon={personOutline} className="health"></IonIcon>
                    <IonLabel className="fonts">Test link</IonLabel>
               </IonItem>
               <IonItem button >
                    <IonIcon icon={restaurantOutline} className="health"></IonIcon>
                    <IonLabel className="fonts">Test link</IonLabel>
               </IonItem>
               <IonItem button >
                    <IonIcon icon={roseOutline} className="health"></IonIcon>
                    <IonLabel className="fonts">Test link</IonLabel>
               </IonItem> 
               <IonItem button >
                    <IonIcon icon={snowOutline} className="health"></IonIcon>
                    <IonLabel className="fonts">Test link</IonLabel>
               </IonItem>
               <IonItem button >
                    <IonIcon icon={walkOutline} className="health"></IonIcon>
                    <IonLabel className="fonts">Test link</IonLabel>
               </IonItem>

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

export default FirstAid;