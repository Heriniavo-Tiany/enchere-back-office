import {IonAvatar, IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonLabel} from "@ionic/react";

interface ContainerProps {
    idUtilisateur: string;
    nom: string;
    valeur: number;
    idRechargement: string;
    dateRechargement: any
}

const DemandeRechargement: React.FC<ContainerProps> = ({idUtilisateur, nom, valeur, idRechargement, dateRechargement}) => {
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
                    <IonItemOption onClick={() => alert("Do you really want to remove it from the list?")} >Valider</IonItemOption>
                </IonItemOptions>

                <IonItemOptions side="start">
                    <IonItemOption>Refuser</IonItemOption>
                </IonItemOptions>
            </IonItemSliding>
    );
};

export default DemandeRechargement;
