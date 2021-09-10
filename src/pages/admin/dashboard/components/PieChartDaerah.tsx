import { Bar } from 'react-chartjs-2';
import { Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';

const data = {
  labels: ['Jatuhandap', 'Jatinangor', 'Cimuncang', 'Ciseke', 'Riung'],
  datasets: [
    {
      label: 'My First Dataset',
      data: [23, 14, 55, 66, 72, 23, 14, 55, 66, 72, 23, 14, 55, 66, 72, 23, 14, 55, 66, 72],
      backgroundColor: ['rgb(255, 99, 132)', 'rgb(54, 162, 235)', 'rgb(255, 205, 86)'],
      hoverOffset: 4,
    },
  ],
};

const DoughnutChartDaerah = () => {
  return (
    <>
      <Box p={2}>
        <Typography align="center" variant="h5">
          Jumlah Ibu berdasarakan Daerah
        </Typography>
      </Box>
      <div>
        <Bar
          type="line"
          data={data}
          height={200}
          width={800}
          options={{
            indexAxis: 'y',
            maintainAspectRatio: false,
            plugins: { legend: { display: true, position: 'right' } },
          }}
        />
      </div>
    </>
  );
};

export default DoughnutChartDaerah;
