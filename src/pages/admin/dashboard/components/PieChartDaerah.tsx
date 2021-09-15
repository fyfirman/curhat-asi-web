import { Bar } from 'react-chartjs-2';
import { Typography } from '@material-ui/core';
import { useQuery } from 'react-query';

import Box from '@material-ui/core/Box';
import { getUserbyDomicile } from '@services/StatisticServices';

const DoughnutChartDaerah = (props: any) => {
  const UserbyDomicileQuery = useQuery('userbydomicile', () => {
    return getUserbyDomicile(props.user);
  });

  const data = {
    labels: UserbyDomicileQuery.data?.payload.label,
    datasets: [
      {
        data: UserbyDomicileQuery.data?.payload.values,
        backgroundColor: ['rgb(255, 99, 132)', 'rgb(54, 162, 235)', 'rgb(255, 205, 86)'],
        hoverOffset: 4,
      },
    ],
  };

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
            plugins: { legend: { display: false } },
          }}
        />
      </div>
    </>
  );
};

export default DoughnutChartDaerah;
