import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import { useState } from "react";
import { Bar, Doughnut } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const Dashboard_body: React.FC = () => {
  const labels = ["Janvier", "Fevrier","Mars","Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre","Octobre"];
  const [data, setData] = useState({
    labels: labels,
    datasets: [
      {
        label: "70-",
        data: [65, 59, 80, 81, 56, 84],
        backgroundColor: ["#7327a5","#7327a5","#146CDF","#146CDF","#7327a5","#146CDF"],
        borderColor: ["#146cdf00"],
        borderWidth: 0,
        borderRadius: 12,
      },
    ],
  });

  const [data1, setData1] = useState({
    labels: [
      'Production',
      'Marketing',
      'Ventes',
      'Logistique',
      'Ressources humaines',
      'Finances et comptabilités',
      'Recherche'
    ],
    datasets: [{
      label: "Nombre d' employés",
      data: [30, 50, 20,30,40,50,60],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)',
        'rgb(81, 128, 7)',
        'rgb(80, 7, 128)',
        'rgb(10, 153, 146)',
        'rgb(199, 53, 155)'
      ],
      hoverOffset: 4
    }]
  });

  const [data2, setData2] = useState({
    labels: [
      'Production',
      'Marketing',
      'Ventes',
      'Logistique',
      'Ressources humaines',
      'Finances et comptabilités',
      'Recherche'
    ],
    datasets: [{
      label: "Nombre d' employés",
      data: [30, 70, 80,30,40,100,80],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)',
        'rgb(81, 128, 7)',
        'rgb(80, 7, 128)',
        'rgb(10, 153, 146)',
        'rgb(199, 53, 155)'
      ],
      hoverOffset: 4
    }]
  });

  

  return (
    <div className="app-body">
      <div className="container">
        <div className="row gx-5 gy-4">
          <div className="col-12" id="col-1">
            <div className="client">
               <div className="title">
                 <h1>Total des stocks par mois </h1>
                 <div className="border"></div>
               </div>
               <div className="variation" >
              <Bar data={data} id="bar"/>
              </div>
            </div>
          </div>

          <div className="col-6" id="col2">
            <div className="client">
               <div className="title">
                 <h1>Répartition  départements  </h1>
                 <div className="border"></div>
               </div>
               <div className="variation mt-4 text-center d-flex justify-content-center"  style={{ width: '322px', height: '322px', marginLeft:'4vw' }}>
                 <Doughnut data={data1} className="text-center" id="circle"/>
              </div>
            </div>
          </div>

          <div className="col-6" id="col2">
            <div className="client">
               <div className="title">
                 <h1>Nombres de clients  </h1>
                 <div className="border"></div>
               </div>
               <div className="variation mt-4 text-center"  style={{ width: '322px', height: '322px',marginLeft:'4vw' }}>
                 <Doughnut data={data2} id="circle"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard_body;

