import React from 'react';
import { useParams } from 'react-router';
import { IonButtons, IonContent, IonHeader, IonIcon, IonMenuButton, IonPage, IonTitle, IonToolbar, IonNav, IonItem, IonLabel, IonList } from '@ionic/react';
import { sadOutline, compassOutline, fitnessOutline, heartOutline, personOutline, restaurantOutline, roseOutline, snowOutline, walkOutline } from 'ionicons/icons';
import data from '../../data.json';
import './FirstAid.css';

const FirstAid: React.FC = () => {

     const items = data[0].firstaid;
     // const items = [
     //      {
     //           icon: sadOutline,
     //           name: "Test Link",
     //           color: "danger"
     //      },
     //      {
     //           icon: compassOutline,
     //           name: "Test Link",
     //           color: "danger"
     //      },
     //      {
     //           icon: fitnessOutline,
     //           name: "Test Link",
     //           color: "danger"
     //      },
     //      {
     //           icon: heartOutline,
     //           name: "Test Link",
     //           color: "danger"
     //      },
     //      {
     //           icon: personOutline,
     //           name: "Test Link",
     //           color: "danger"
     //      },
     //      {
     //           icon: restaurantOutline,
     //           name: "Test Link",
     //           color: "danger"
     //      },
     //      {
     //           icon: restaurantOutline,
     //           name: "Test Link",
     //           color: "danger"
     //      },
     //      {
     //           icon: restaurantOutline,
     //           name: "Test Link",
     //           color: "danger"
     //      },
     //      {
     //           icon: restaurantOutline,
     //           name: "Test Link",
     //           color: "danger"
     //      },
     //      {
     //           icon: restaurantOutline,
     //           name: "Test Link",
     //           color: "danger"
     //      },
     //      {
     //           icon: restaurantOutline,
     //           name: "Test Link",
     //           color: "danger"
     //      },
     //      {
     //           icon: restaurantOutline,
     //           name: "Test Link",
     //           color: "danger"
     //      },
     //      {
     //           icon: restaurantOutline,
     //           name: "Test Link",
     //           color: "danger"
     //      },
     //      {
     //           icon: restaurantOutline,
     //           name: "Test Link",
     //           color: "danger"
     //      },
     //      {
     //           icon: restaurantOutline,
     //           name: "Test Link",
     //           color: "danger"
     //      },
     // ]


     return(
     <IonPage>
          <IonHeader>
          <IonToolbar color="primary">
               <IonButtons slot="end">
               <IonMenuButton />
               </IonButtons>
               <IonTitle>First Aid</IonTitle>
          </IonToolbar>
          </IonHeader>

          <IonContent>
               {
                    items.map((item, key) => { return(
                         <IonItem button key={key} routerLink={`firstaid/${item.id}`} >
                              <IonIcon icon={heartOutline} color="danger"></IonIcon>
                              <IonLabel className="fonts"> {item.procedure} </IonLabel>
                         </IonItem> 
                    )})
               }
     
          </IonContent> 
     </IonPage>
     );
}

export default FirstAid;