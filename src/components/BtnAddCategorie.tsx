import {
    IonAvatar,
    IonFab,
    IonFabButton, IonIcon,
    IonItem,
    IonItemOption,
    IonItemOptions,
    IonItemSliding,
    IonLabel
} from "@ionic/react";
import axios from "axios";
import {add} from "ionicons/icons";

const BtnAddCategorie: React.FC = () => {


    return (
        <IonFab slot="fixed" vertical="bottom" horizontal="end">
            <IonFabButton>
                <IonIcon icon={add}></IonIcon>
            </IonFabButton>
        </IonFab>
    );
};

export default BtnAddCategorie;
