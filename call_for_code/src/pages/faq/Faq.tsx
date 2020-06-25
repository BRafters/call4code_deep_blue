import React from 'react';
import { IonButtons, IonContent, IonHeader, IonIcon, IonMenuButton, IonPage, IonTitle, IonToolbar, IonNav, IonItem, IonLabel } from '@ionic/react';
import { arrowForward } from 'ionicons/icons';
import data from '../../data.json';
import './Faq.css';


const Faq: React.FC = () => {

     const pageItems = data.faq;
     
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
                    pageItems.map((item, key)=> {return(
                         <IonItem button key={key} routerLink={"faq/"+item.link}>
                              <IonLabel className="fonts"> {item.question} </IonLabel>
                              <IonIcon icon={arrowForward}></IonIcon>
                         </IonItem>
                    )})
               }
               </IonContent> 
          </IonPage>
     );
}

export default Faq;