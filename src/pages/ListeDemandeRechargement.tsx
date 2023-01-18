import {IonButtons, IonContent, IonHeader, IonList, IonMenuButton, IonPage, IonTitle, IonToolbar} from '@ionic/react';
import {useEffect, useState} from 'react';
import {useParams} from 'react-router';
import DemandeRechargement from '../components/DemandeRechargement';
import './Page.css';
import axios from "axios";

const Page: React.FC = () => {

    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios(`http://localhost:8080/demandeRechargements`)
            .then((response) => {
                setData(response.data);
                setError(null);
            })
            .catch(setError);

    }, []);
    if (error) return <p>An error occurred</p>

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
                            data.map(({
                                          idRechargement,
                                          idUser,
                                          dateDemande,
                                          compte
                                      }) => (
                                <DemandeRechargement idRechargement={idRechargement} dateRechargement={dateDemande} idUtilisateur={idUser} nom={"nom"} valeur={compte}/>
                            ))
                        }
                    </IonList>
                </IonContent>
            </IonContent>
        </IonPage>
    );
};

export default Page;
