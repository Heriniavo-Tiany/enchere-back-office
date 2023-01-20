import {IonButton, IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar} from '@ionic/react';
import { useParams } from 'react-router';
import './Page.css';
import {usePhotoGallery} from "../components/Photo";
import Menu from '../components/Mn';


const Page: React.FC = () => {

  const { name } = useParams<{ name: string; }>();
    const {photos, takePhoto} = usePhotoGallery();

  return (
    <>
    <Mn />
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{name}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{name}</IonTitle>
          </IonToolbar>
        </IonHeader>

          <IonButton onClick={() => takePhoto(1) }>Click</IonButton>


      </IonContent>
    </IonPage>
    </>
  );
};

export default Page;
