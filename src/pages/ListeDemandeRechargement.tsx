import {IonButtons, IonContent, IonHeader, IonList, IonMenuButton, IonPage, IonTitle, IonToolbar} from '@ionic/react';
import {useParams} from 'react-router';
import DemandeRechargement from '../components/DemandeRechargement';
import './Page.css';

const Page: React.FC = () => {

    const arr = [
        {
            name: "Finn",
            desc: "High School Student"
        },
        {
            name: "Han",
            desc: "Mother of 3"
        },
        {
            name: "Rey",
            desc: "Crazy guy"
        }
    ]

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton/>
                    </IonButtons>
                    <IonTitle>Toutes les demandes de rechargements</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Toutes les demandes de rechargements</IonTitle>
                    </IonToolbar>
                </IonHeader>

                <IonContent className="ion-padding">
                    <IonList>
                        {
                            arr.map(elem => (
                                    <DemandeRechargement idUtilisateur={elem.name} nom={elem.desc} valeur={3}/>
                                )
                            )
                        }
                    </IonList>
                </IonContent>
            </IonContent>
        </IonPage>
    );
};

export default Page;
