import React from 'react';
import { IonButtons, IonContent, IonHeader, IonIcon, IonMenuButton, IonPage, IonTitle, IonToolbar, IonItem, IonLabel } from '@ionic/react';
import { arrowForward } from 'ionicons/icons';
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
                              <IonLabel className="fonts"> {item.procedure} </IonLabel>
                              <IonIcon icon={arrowForward}></IonIcon>
                         </IonItem>
                    )})
               }
               </IonContent> 
          </IonPage>
     );
}

export default FirstAid;