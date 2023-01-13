import {IonAvatar, IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonLabel} from "@ionic/react";

interface ContainerProps {
    idUtilisateur: string;
    nom: string;
    valeur: number;
}

const DemandeRechargement: React.FC<ContainerProps> = ({idUtilisateur, nom, valeur}) => {
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
                        <p>Valeur: {valeur} Ar</p>
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
