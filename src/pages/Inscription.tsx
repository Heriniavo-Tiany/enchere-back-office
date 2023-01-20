import {
    IonButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonInput, IonItem, IonLabel, IonList,
    IonMenuButton,
    IonNote,
    IonPage,
    IonTitle,
    IonToolbar
} from '@ionic/react';
import {useParams} from 'react-router';
import ExploreContainer from '../components/ExploreContainer';
import './Page.css';
import {useState} from "react";
import {isValid} from "ionicons/dist/types/components/icon/validate";
import {Link} from "react-router-dom";
import axios from "axios";
import { useHistory } from 'react-router-dom';

const Inscription: React.FC = () => {

    const [nom, setNom] = useState('')
    const [email, setEmail] = useState('')
    const [pwd, setPwd] = useState('')
    const [contact, setContact] = useState('')
    const history = useHistory();
    const inscription = async () => {
        const params = {
            nom: nom,
            email: email,
            motDePasse: pwd,
            contact: contact
        };

        try {
            const response = await axios.post(`https://wsenchere.up.railway.app/admins`, {}, { params });
            if (response.status === 200) {
                console.log(response.data);
                history.push(`/login`);
            }
        } catch (error) {
            console.log(error);
        }
    };


    /*-------Email Verif------------*/
    const [isTouched, setIsTouched] = useState(false);
    const [isValid, setIsValid] = useState<boolean>();

    const validateEmail = (email: string) => {
        return email.match(
            /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
        );
    };

    const validate = (ev: Event) => {
        const value = (ev.target as HTMLInputElement).value;

        setIsValid(undefined);

        if (value === '') return;

        validateEmail(value) !== null ? setIsValid(true) : setIsValid(false);
    };

    const markTouched = () => {
        setIsTouched(true);
    };
    /*-------/Email Verif------------*/

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton/>
                    </IonButtons>
                    <IonTitle>Inscription </IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Inscription</IonTitle>
                    </IonToolbar>
                </IonHeader>

                <div className="container">
                    <IonItem fill="solid">
                        <IonLabel position="floating">Nom</IonLabel>
                        <IonInput clearInput={true} onIonChange={(e: any) => setNom(e.target.value)}></IonInput>
                    </IonItem>
                    <IonItem fill="solid"
                             className={`${isValid && 'ion-valid'} ${isValid === false && 'ion-invalid'} ${isTouched && 'ion-touched'}`}>
                        <IonLabel position="floating">Email</IonLabel>
                        <IonInput type="email" onIonChange={(e: any) => setEmail(e.target.value)} clearInput={true}
                                  onIonInput={(event) => validate(event)} onIonBlur={() => markTouched()}></IonInput>
                    </IonItem>
                    <IonItem fill="solid">
                        <IonLabel position="floating">Contact</IonLabel>
                        <IonInput type="tel" clearInput={true}
                                  onIonChange={(e: any) => setContact(e.target.value)}></IonInput>
                    </IonItem>
                    <IonItem fill="solid">
                        <IonLabel position="floating">Mot de Passe</IonLabel>
                        <IonInput type="password" clearInput={true}
                                  onIonChange={(e: any) => setPwd(e.target.value)}></IonInput>
                    </IonItem>
                    <IonButton onClick={inscription}>S'inscrire</IonButton>
                    <p> Vous avez déja un compte? <Link  color="primary" to={`/login`}>Se connecter</Link></p>
                </div>


            </IonContent>
        </IonPage>
    );
};

export default Inscription;
