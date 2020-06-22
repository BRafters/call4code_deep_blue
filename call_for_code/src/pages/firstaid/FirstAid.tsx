import React from 'react';
import { IonButtons, IonContent, IonHeader, IonIcon, IonMenuButton, IonPage, IonTitle, IonToolbar, IonNav, IonItem, IonLabel, IonList } from '@ionic/react';
import { sadOutline, compassOutline, fitnessOutline, heartOutline, personOutline, restaurantOutline, roseOutline, snowOutline, walkOutline } from 'ionicons/icons';
import data from '../../data.json';
import './FirstAid.css';


const FirstAid: React.FC = () => {

     const pageItems = data.firstaid;
     
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
                    pageItems.map((item, key)=> {return(
                         <IonItem button key={key} routerLink={"firstaid/"+item.link}>
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