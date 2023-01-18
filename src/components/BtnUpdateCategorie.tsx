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

interface ContainerProps {
    idCategorie: string;
    nom: string;
}

const BtnUpdateCategorie: React.FC<ContainerProps> = ({idCategorie, nom}) => {

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
            modifier(ev.detail.data);
        }
    }

    const modifier = async (m: any) => {
        const params = {
            id: idCategorie,
            nom: m
        };

        try {
            const response = await axios.post(`http://localhost:8080/updateCatEnchere`, {}, {params});
            if (response.status === 200) {
                console.log(response.data);
                window.location.replace("/categories")
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            {/*<IonFab slot="fixed" vertical="bottom" horizontal="end">*/}
            {/*    <IonFabButton id={`open-modal${idCategorie`}>*/}
            {/*        <IonIcon icon={add}></IonIcon>*/}
            {/*    </IonFabButton>*/}
            {/*</IonFab>*/}

            <IonButton key={idCategorie} id={`open-modal${idCategorie}`} expand="block">
                Modifier
            </IonButton>
            {/*<p>{message}</p>*/}

            <IonModal ref={modal} trigger={`open-modal${idCategorie}`} onWillDismiss={(ev) => onWillDismiss(ev)}>
                <IonHeader>
                    <IonToolbar>
                        <IonButtons slot="start">
                            <IonButton onClick={() => modal.current?.dismiss()}>Cancel</IonButton>
                        </IonButtons>
                        <IonTitle>Modifier un catégorie</IonTitle>
                        <IonButtons slot="end">
                            <IonButton strong={true} onClick={() => confirm()}>
                                Confirm
                            </IonButton>
                        </IonButtons>
                    </IonToolbar>
                </IonHeader>
                <IonContent className="ion-padding">
                    <IonItem>
                        <IonLabel position="stacked">Nouveau Nom de la catégorie</IonLabel>
                        <IonInput ref={input} type="text" value={nom}/>
                    </IonItem>
                </IonContent>
            </IonModal>
        </>
    );
};

export default BtnUpdateCategorie;
