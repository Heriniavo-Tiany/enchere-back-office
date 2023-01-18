import {IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar} from '@ionic/react';
import {useParams} from 'react-router';
import ExploreContainer from '../components/ExploreContainer';
import './Page.css';
import {Doughnut} from "../components/Doughnut";
import {AreaChart} from "../components/AreaChart";
import BtnAddCategorie from "../components/BtnAddCategorie";
import ListCategories from "./ListCategories";

const Categories: React.FC = () => {


    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton/>
                    </IonButtons>
                    <IonTitle>Statistiques</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Catégories</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <ListCategories/>
                <BtnAddCategorie/>
            </IonContent>
        </IonPage>
    );
};

export default Categories;
