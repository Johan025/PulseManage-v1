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
  const labels = ["Janvier", "Fevrier","Mars","Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre"];
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
      'Tech lead',
      'Blue',
      'Yellow'
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [300, 50, 100],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)'
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
               <div className="variation mt-4 text-center"  style={{ width: '262px', height: '262px', marginLeft:'19%' }}>
                 <Doughnut data={data1} id="circle"/>
              </div>
            </div>
          </div>

          <div className="col-6" id="col2">
            <div className="client">
               <div className="title">
                 <h1>Nombres de clients  </h1>
                 <div className="border"></div>
               </div>
               <div className="variation mt-4 text-center"   style={{ width: '262px', height: '262px', marginLeft:'15%' }}>
                 <Doughnut data={data1} id="circle"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard_body;
