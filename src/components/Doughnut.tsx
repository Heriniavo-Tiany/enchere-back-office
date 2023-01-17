import React, {useEffect, useState} from 'react';
import {Chart as ChartJS, ArcElement, Tooltip, Legend} from 'chart.js';
import {Pie} from 'react-chartjs-2';
import axios from 'axios';
import randomcolor from 'randomcolor';

ChartJS.register(ArcElement, Tooltip, Legend);

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
