import React from 'react';
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonIcon, IonItem, IonChip, IonLabel} from '@ionic/react';
import { alertCircleOutline } from 'ionicons/icons';
import './Home.css';

const Home: React.FC = () => {
     
     return(
          <IonPage>
          <IonHeader>
          <IonToolbar color="primary">
               <IonButtons slot="end">
               <IonMenuButton />
               </IonButtons>
               <IonTitle>Home</IonTitle>
          </IonToolbar>
          </IonHeader>

          <IonContent>
               <div id="background-circle"></div>

               <section id="home__overlay">
                    <img id="home__logo" src="assets/icon/favicon.png" alt="logo" />
                    <h1 id="home__title">Home</h1>

                    <div id="home__info">
                         <IonChip>
                              <IonIcon size="large" icon={alertCircleOutline}></IonIcon>
                              <IonLabel>Information here</IonLabel>
                         </IonChip>
                    </div>

               </section>

          </IonContent>


     </IonPage>
     );
}

export default Home;