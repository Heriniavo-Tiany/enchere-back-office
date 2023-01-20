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
import {useLocation, useParams} from 'react-router';
import ExploreContainer from '../components/ExploreContainer';
import './Page.css';
import {useState} from "react";
import {isValid} from "ionicons/dist/types/components/icon/validate";
import {Link} from "react-router-dom";
import axios from "axios";
import { useHistory } from 'react-router-dom';

const Login: React.FC = () => {

    const [email, setEmail] = useState('')
    const [pwd, setPwd] = useState('')
    const history = useHistory();
    const login = async () => {
        
        const params = {
            email: "koto@gmail.com",
            mdp: "koto",
        };
        

        try {
            console.log(email);
            const response = await axios.post(`https://wsenchere.up.railway.app/Admin`, {}, { params });
            if (response.status === 200) {
                    console.log(response.data);
                    const data = response.data;

                        if(response.data.code === 202){
                            history.push(`/encheres`);
                        }
                        if(response.data.code === 404){
                            history.push(`/login`);

                        }
                }else{
                    console.log("Loading");
                }
            }
        catch (error) {
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

                    <IonTitle>Connexion </IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Se Connecter</IonTitle>
                    </IonToolbar>
                </IonHeader>

                <div className="container">

                    <IonItem fill="solid"
                             className={`${isValid && 'ion-valid'} ${isValid === false && 'ion-invalid'} ${isTouched && 'ion-touched'}`}>
                        <IonLabel position="floating">Email</IonLabel>
                        <IonInput value = "koto@gmail.com" type="email" onIonChange={(e: any) => setEmail(e.target.value)} clearInput={true}
                                  onIonInput={(event) => validate(event)} onIonBlur={() => markTouched()}></IonInput>
                    </IonItem>

                    <IonItem fill="solid">
                        <IonLabel position="floating">Mot de Passe</IonLabel>
                        <IonInput value="koto" type="password" clearInput={true}
                                  onIonChange={(e: any) => setPwd(e.target.value)}></IonInput>
                    </IonItem>
                    <IonButton onClick={()=>login()}>Se connecter</IonButton>
                </div>


            </IonContent>
        </IonPage>
    );
};

export default Login;
