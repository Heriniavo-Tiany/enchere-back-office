import {IonAvatar, IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonLabel} from "@ionic/react";
import axios from "axios";

interface ContainerProps {
    idUtilisateur: string;
    nom: string;
    valeur: number;
    idRechargement: string;
    dateRechargement: any
}

const DemandeRechargement: React.FC<ContainerProps> = ({idUtilisateur, nom, valeur, idRechargement, dateRechargement}) => {

    const valider = async () => {
        const params = {
            idRechargement: idRechargement,
            admin: 1
        };

        try {
            const response = await axios.post(`https://wsenchere.up.railway.app/rechargements`, {}, { params });
            if (response.status === 200) {
                console.log(response.data);
                // history.push(`/login`);
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
            <IonItemSliding key={idUtilisateur}>
                <IonItem>
                    <IonAvatar>
                        <img
                            src={`https://ionicframework.com/docs/demos/api/list/avatar-${idUtilisateur.toLocaleLowerCase()}.png`}
                            alt=""/>
                    </IonAvatar>
                    <IonLabel className="ion-padding">
                        <h2>{nom}</h2>

                        <p>id: {idRechargement}</p>
                        <p>date: {dateRechargement}</p>

                        <h3>Valeur: {valeur} Ar</h3>
                    </IonLabel>
                </IonItem>
                <IonItemOptions side="end">
                    <IonItemOption onClick={() => valider()} >Valider</IonItemOption>
                </IonItemOptions>

                <IonItemOptions side="start">
                    <IonItemOption>Refuser</IonItemOption>
                </IonItemOptions>
            </IonItemSliding>
    );
};

export default DemandeRechargement;
