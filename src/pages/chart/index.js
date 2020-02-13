import React from 'react';
import Highcharts from 'highcharts';
import HighChartsReact from 'highcharts-react-official';
import timeseries from './timeseries.json';

const options = {
  title: {
    text: 'Line Chart'
  },
  series: [
    {
      type: 'line',
      data: timeseries,
    },
  ],
  xAxis: [
    {
      type: "datetime",
      labels: {
        format: "{value:%Y-%m-%d}" 
      }
    },
  ],
};

const ChartPage = () => {
  return (
    <HighChartsReact
      highcharts={Highcharts}
      options={options}
    />
  );
}

export default ChartPage;
