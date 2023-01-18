import {
    IonAvatar, IonButton, IonButtons, IonContent,
    IonFab,
    IonFabButton, IonHeader, IonIcon,
    IonInput,
    IonItem,
    IonItemOption,
    IonItemOptions,
    IonItemSliding,
    IonLabel, IonModal, IonTitle, IonToolbar
} from "@ionic/react";
import axios from "axios";
import {add} from "ionicons/icons";
import {useRef, useState} from "react";
import {OverlayEventDetail} from "@ionic/react/dist/types/components/react-component-lib/interfaces";

const BtnAddCategorie: React.FC = () => {

    const modal = useRef<HTMLIonModalElement>(null);
    const input = useRef<HTMLIonInputElement>(null);

    const [message, setMessage] = useState(
        'This modal example uses triggers to automatically open a modal when the button is clicked.'
    );

    function confirm() {
        modal.current?.dismiss(input.current?.value, 'confirm');
    }

    function onWillDismiss(ev: CustomEvent<OverlayEventDetail>) {
        if (ev.detail.role === 'confirm') {
            setMessage(`Hello, ${ev.detail.data}!`);
        }
    }


    return (
        <>
            <IonFab slot="fixed" vertical="bottom" horizontal="end">
                <IonFabButton id="open-modal">
                    <IonIcon icon={add}></IonIcon>
                </IonFabButton>
            </IonFab>
            <p>{message}</p>

            <IonModal ref={modal} trigger="open-modal" onWillDismiss={(ev) => onWillDismiss(ev)}>
                <IonHeader>
                    <IonToolbar>
                        <IonButtons slot="start">
                            <IonButton onClick={() => modal.current?.dismiss()}>Cancel</IonButton>
                        </IonButtons>
                        <IonTitle>Ajouter un catégorie</IonTitle>
                        <IonButtons slot="end">
                            <IonButton strong={true} onClick={() => confirm()}>
                                Confirm
                            </IonButton>
                        </IonButtons>
                    </IonToolbar>
                </IonHeader>
                <IonContent className="ion-padding">
                    <IonItem>
                        <IonLabel position="stacked">Nom de la catégorie</IonLabel>
                        <IonInput ref={input} type="text" placeholder="Catégorie"/>
                    </IonItem>
                </IonContent>
            </IonModal>
        </>
    );
};

export default BtnAddCategorie;
