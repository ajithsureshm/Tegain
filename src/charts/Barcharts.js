import React,{ useEffect, useState } from "react";
import { Chart as ChartJs, Tooltip, Title, ArcElement, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import axios from "axios";

ChartJs.register(Tooltip, Title, ArcElement, Legend);

const data = {
  datasets: [
    {
      data: [10, 20, 30],
      backgroundColor: ["red", "blue", "yellow"],
    },
  ],
  // These labels appear in the legend and in the tooltips when hovering different arcs
  labels: [],
};

const Barcharts = () => {
    const [circle, setCircle] = useState([])

    const [label, setlabel] = useState([])

    var res=circle

    const [chart, setChart] = useState({
        datasets: [{
            datas: {circle},
            backgroundColor:[
              'red',
              'blue',
              'yellow'
            ]
        },
      ],
      labels: [
          {label}
      ], 
    });
  

  const fetchData = async () => {
    let user = JSON.parse(localStorage.getItem("user"));

    var token = user.data.access;

    console.log("token", token);
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const {data} = await axios.get(
        "http://saaskit.tegain.com/api/dashboard/pie-chart/",
        config
      );

      console.log("result",data.data);
      console.log(data.data.active);

      setChart(data.data);

     

       

      setChart({
        datasets: [
          {
            datas: data,
            backgroundColor: ["red", "blue", "yellow"],
          },
        ],
        labels: [
          {data}
      ], 
      });

      setCircle(chart.datasets[0].datas.data)

      setlabel(chart.labels[0].data.data)

      // console.log("label",chart.labels[0].data.data);


    } catch (error) {
      console.log(error);
    }
  };

  // console.log("data",chart.datasets[0].datas.data.active);



  useEffect(() => {
    fetchData();
  }, []);

 
  var options = {
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    legend: {
      labels: {
        fontSize: 26,
      },
    },
  };

return (
    <div className="App" style={{width:'40%', height:'30%', "padding-left": "13rem","margin-left":"36rem", "padding-top":"12rem" }}>
                  <h>Task</h>

      <Doughnut data={data}/>
    </div>
  );
};

export default Barcharts;
