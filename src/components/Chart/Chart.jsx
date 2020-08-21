import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';

import { fetchDailyData } from '../../api';

import styles from './Chart.module.css';

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

const Chart = ({data}) => {
  const [dailyData, setDailyData] = useState({});
  const [windowDimensions, setWindowDimensions] = useState({});

  console.log(windowDimensions);
  
  useEffect(() => {
    const fetchMyAPI = async () => {
      const initialDailyData = await fetchDailyData();

      setDailyData(initialDailyData);
      setWindowDimensions(getWindowDimensions());
    };

    fetchMyAPI();
  }, []);

  const lineChart = (
    dailyData[0] ? (
      <Line
        data={{
          labels: dailyData.map(({ data }) => data),
          datasets: [{
            data: dailyData.map((data) => data.casosConfirmados),
            label: 'Infectados',
            backgroundColor: 'rgba(0, 0, 255, 0.3)',
            borderColor: 'blue',
            fill: true,
          }, {
            data: dailyData.map((data) => data.casosCurados),
            label: 'Recuperados',
            borderColor: 'green',
            backgroundColor: 'rgba(0, 255, 0, 0.3)',
            fill: true,
          }, {
            data: dailyData.map((data) => data.obitos),
            label: 'Óbitos',
            borderColor: 'red',
            backgroundColor: 'rgba(255, 0, 0, 0.3)',
            fill: true,
          },
          ],
        }}

        
        options={
          {responsive: true}
        }
      />
    ) : null
  );

  return (
    <div className={styles.container}>
      {lineChart}
    </div>
  );
};

export default Chart;
