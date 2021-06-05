import React, { useState } from 'react';
import { Chart } from "react-google-charts";

const GraficoBarras = () => {
  const [options, setOptions] = useState({
    title: 'Gráfico de Pizza'
  });
  const [data, setData] = useState([
    ['Linguagens', 'Quantidade'],
    ['React', 100],
    ['Angula', 80],
    ['Vue', 50],
  ]);
  const [dataBar, setDataBar] = useState([
    ['Cidades', '2010 População', '2000 População'],
    ['New York City, NY', 8175000, 8008000],
    ['Los Angeles, CA', 3792000, 3694000],
    ['Chicago, IL', 2695000, 2896000],
    ['Houston, TX', 2099000, 1953000],
    ['Philadelphia, PA', 1526000, 1517000],
  ])
  return (
    <div className="App">
      <header className="App-header">
        <div style={{ display: "flex" }}>
          <Chart
            width={'500px'}
            height={'300px'}
            chartType="PieChart"
            data={data}
            options={options}
          />

        </div>
      </header>
    </div>
  );
}

export default GraficoBarras;