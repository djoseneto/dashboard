import ReactApexChart from 'react-apexcharts';

import { ApexOptions } from 'apexcharts'; // Importando ApexOptions para tipagem

const ApexChartBarHelthMap: React.FC = () => {
  const series = [{
    name: 'PRODUCT A',
    data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
  }, {
    name: 'PRODUCT B',
    data: [42, 45, 50, 60, 59, 65, 75, 92, 100]
  }, {
    name: 'PRODUCT C',
    data: [20, 30, 35, 40, 39, 50, 60, 81, 95]
  }];

  const options: ApexOptions = {
    chart: {
      type: 'heatmap',
      stacked: false,
      height: '100%',
      zoom: {
        enabled: false
      },
    },
    dataLabels: {
      enabled: false
    },
    tooltip: {
      shared: false
    },
    xaxis: {
      type: 'category',
      labels: {
        show: false
      }
    },
    yaxis: {
      labels: {
        show: false
      }
    },
    legend: {
      show: false
    }
  };

  return (
    <div id="chart" >
      <ReactApexChart options={options} series={series} type="heatmap" />
    </div >
  );
};

export default ApexChartBarHelthMap;
