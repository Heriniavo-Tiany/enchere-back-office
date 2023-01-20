import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from '@ionic/react';

import { useLocation } from 'react-router-dom';
import {
  archiveOutline,
  archiveSharp, bagHandleOutline, bagHandleSharp,
  barChartOutline, barChartSharp,
  bookmarkOutline, cashOutline, cashSharp, enterOutline, enterSharp, exitOutline, exitSharp, gridOutline, gridSharp,
  heartOutline,
  heartSharp,
  mailOutline,
  mailSharp,
  paperPlaneOutline,
  paperPlaneSharp,
  trashOutline,
  trashSharp,
  warningOutline,
  warningSharp
} from 'ionicons/icons';
import './Menu.css';

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: 'Enchères',
    url: '/encheres',
    iosIcon: bagHandleOutline,
    mdIcon: bagHandleSharp
  },
  {
    title: 'Demandes de Rechargements',
    url: '/rechargements',
    iosIcon: cashOutline,
    mdIcon: cashSharp
  },
  {
    title: 'Statistiques',
    url: '/statistiques',
    iosIcon: barChartOutline,
    mdIcon: barChartSharp
  },
   {
    title: 'Log in',
    url: '/login',
    iosIcon: enterOutline,
    mdIcon: enterSharp
  },
  {
    title: 'Inscription',
    url: '/inscription',
    iosIcon: enterOutline,
    mdIcon: enterSharp
  },
  {
    title: 'Catégories',
    url: '/categories',
    iosIcon: gridOutline,
    mdIcon: gridSharp
  },
  {
    title: 'Logout',
    url: '/logout',
    iosIcon: exitOutline,
    mdIcon: exitSharp
  }
];


const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>Enchère</IonListHeader>
          <IonNote>ETU 1679, 1509, 1479, 1080</IonNote>
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

      </IonContent>
    </IonMenu>
  );
};

export default Menu;
