import React from 'react';

import { IonButtons, IonContent, IonHeader, IonIcon, IonMenuButton, IonPage, IonTitle, IonToolbar, IonItem, IonLabel } from '@ionic/react';
import { arrowForward } from 'ionicons/icons';
import data from '../../data.json';

import './Survival.css';
import '../general.css';



const Survival: React.FC = () => {

     const pageItems = data.survival;
     
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
                    pageItems.map((item, key)=> {return(
                         <IonItem button key={key} routerLink={"survival/"+item.link}>
                              <IonLabel className="fonts"> {item.category} </IonLabel>
                              <IonIcon icon={arrowForward}></IonIcon>
                         </IonItem>
                    )})
               }
               </IonContent>
          </IonPage>
     );
}

export default Survival;