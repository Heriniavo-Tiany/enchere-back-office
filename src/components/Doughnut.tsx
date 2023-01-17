import React, {useEffect, useState} from 'react';
import {Chart as ChartJS, ArcElement, Tooltip, Legend} from 'chart.js';
import {Pie} from 'react-chartjs-2';
import axios from 'axios';
import randomcolor from 'randomcolor';

ChartJS.register(ArcElement, Tooltip, Legend);

/*export const data = {
    labels: ['Eléctronique', 'Nourriture', 'Meuble', 'Habits', 'Voiture', 'Livre'],
    datasets: [
        {
            label: '# enchères',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
        },
    ],
};*/


export const data = {
    labels: [],
    datasets: [
        {
            label: '# of encheres',
            data: [],
            backgroundColor: [],
            borderColor: [],
            borderWidth: 1,
        },
    ],
};

export function Doughnut() {

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios.get('http://localhost:8080/stats/categories')
            .then(response => {
                data.labels = response.data.map((item: { nom: any; }) => item.nom);
                data.datasets[0].data = response.data.map((item: { nb: any; }) => item.nb);
                data.datasets[0].backgroundColor = response.data.map(() => randomcolor({ luminosity: 'light' }));
                data.datasets[0].borderColor = response.data.map(() => randomcolor({ luminosity: 'dark' }));
                setIsLoading(false);
            })
            .catch(error => {
                console.log(error);
                setIsLoading(false);
            });
    }, []);

    if (isLoading) {
        return <p>Loading...</p>;
    }


    return (
        <>
            <h1>Enchères selon les catégories</h1>
            <Pie data={data}/>
        </>
    );
}
