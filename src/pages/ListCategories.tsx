import './Page.css';
import {Redirect} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import DemandeRechargement from "../components/DemandeRechargement";
import {IonButton} from "@ionic/react";
import BtnUpdateCategorie from "../components/BtnUpdateCategorie";

    const deleteCat = async (idCategorie : any) => {
    try {
        const response = await axios.delete(`http://localhost:8080/categories/${idCategorie}`, {});
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
        axios(`http://localhost:8080/CategoriesEnchere`)
            .then((response) => {
                setData(response.data);
                setError(null);
            })
            .catch(setError);

    }, []);
    if (error) return <p>An error occurred</p>

    return (
        <>
            <table>
                <tr>
                    <th>#</th>
                    <th>Nom</th>
                    <th></th>
                    <th></th>
                </tr>
                {
                    data.map(({
                                  idcategorie,
                                  nom
                              }) => (
                        <tr>
                            <td>{idcategorie}</td>
                            <td>{nom}</td>
                            {/*<td><IonButton onClick={() => deleteCat(idcategorie)} >Delete</IonButton></td>*/}
                            <td><BtnUpdateCategorie idCategorie={idcategorie} nom={nom}/></td>
                        </tr>
                    ))
                }
            </table>
        </>
    );
};

export default ListCategories;
