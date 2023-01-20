import './Page.css';
import {Redirect} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import {IonButton, IonItem, IonItemSliding, IonLabel, IonList} from "@ionic/react";
import BtnUpdateCategorie from "../components/BtnUpdateCategorie";

const deleteCat = async (idCategorie: any) => {
    try {
        const response = await axios.delete(`https://wsenchere.up.railway.app/categories/${idCategorie}`, {});
        if (response.status === 200) {
            console.log(response.data);
            // history.push(`/login`);
        }
    } catch (error) {
        console.log(error);
    }
};

const ListCategories: React.FC = () => {

    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios(`https://wsenchere.up.railway.app/CategoriesEnchere`)
            .then((response) => {
                setData(response.data);
                setError(null);
            })
            .catch(setError);

    }, []);
    if (error) return <p>An error occurred</p>

    return (
        <>
            {/*<table>*/}
            {/*    <tr>*/}
            {/*        <th>#</th>*/}
            {/*        <th>Nom</th>*/}
            {/*        <th></th>*/}
            {/*        <th></th>*/}
            {/*    </tr>*/}
            {/*    {*/}
            {/*        data.map(({*/}
            {/*                      idcategorie,*/}
            {/*                      nom*/}
            {/*                  }) => (*/}
            {/*            <tr>*/}
            {/*                <td>{idcategorie}</td>*/}
            {/*                <td>{nom}</td>*/}
            {/*                <td><IonButton onClick={() => deleteCat(idcategorie)} >Delete</IonButton></td>*/}
            {/*                <td><BtnUpdateCategorie idCategorie={idcategorie} nom={nom}/></td>*/}
            {/*            </tr>*/}
            {/*        ))*/}
            {/*    }*/}
            {/*</table>*/}
            <IonList>
                {
                    data.map(({
                                  idcategorie,
                                  nom
                              }) => (
                        <IonItemSliding>
                            <IonItem>
                                <IonLabel className="ion-padding">
                                    <h2>{nom}</h2>

                                    <p>id: {idcategorie}</p>

                                    <BtnUpdateCategorie idCategorie={idcategorie} nom={nom}/>
                                </IonLabel>
                            </IonItem>
                        </IonItemSliding>
                    ))
                }
            </IonList>
        </>
    );
};

export default ListCategories;
