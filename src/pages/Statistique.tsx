import {IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar} from '@ionic/react';
import {useParams} from 'react-router';
import ExploreContainer from '../components/ExploreContainer';
import './Page.css';
import {Doughnut} from "../components/Doughnut";
import {AreaChart} from "../components/AreaChart";

const Page: React.FC = () => {


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
                        <IonTitle size="large">Statistiques</IonTitle>
                    </IonToolbar>
                </IonHeader>

                <Doughnut/>
                <div className="chart-container">
                    <AreaChart />
                </div>

            </IonContent>
        </IonPage>
    );
};

export default Page;
