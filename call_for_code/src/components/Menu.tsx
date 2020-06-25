import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle
} from '@ionic/react';

import React from 'react';
import { useLocation } from 'react-router-dom';
import { helpOutline, helpSharp, homeOutline, homeSharp, bugOutline, bugSharp, cloudOutline, cloudSharp, chatboxOutline, chatboxSharp, medkitSharp, medkitOutline, pulseOutline, pulseSharp } from 'ionicons/icons';
import './Menu.css';

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}
interface Label{
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: 'Home',
    url: '/home',
    iosIcon: homeOutline,
    mdIcon: homeSharp
  },
  {
    title: 'First Aid Steps',
    url: '/firstaid',
    iosIcon: medkitOutline,
    mdIcon: medkitSharp
  },
  {
    title: 'Survival Tips',
    url: '/survival',
    iosIcon: pulseOutline,
    mdIcon: pulseSharp
  },
  {
    title: 'Local Weather',
    url: '/weather',
    iosIcon: cloudOutline,
    mdIcon: cloudSharp
  }
];

const labels: Label[] = [
  {
    title: 'Report Bug',
    url: '/report',
    iosIcon: bugOutline,
    mdIcon: bugSharp
  },
  {
    title: 'FAQ',
    url: '/faq',
    iosIcon: helpOutline,
    mdIcon: helpSharp
  }
];

const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
        <IonListHeader className="ion-margin-bottom">Menu</IonListHeader>
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                  <IonIcon slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>

        <IonList id="labels-list">
          <IonListHeader>Support</IonListHeader>
          {labels.map((label, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem className={location.pathname === label.url ? 'selected' : ''} routerLink={label.url} routerDirection="none" lines="none" detail={false}>
                  <IonIcon slot="start" ios={label.iosIcon} md={label.mdIcon} />
                  <IonLabel>{label.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
            })}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
