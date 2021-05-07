import { makeStyles } from '@material-ui/core';
import { useParams } from 'react-router-dom';

const useStyles = makeStyles(() => ({
  container: {
    textAlign: 'right',

    '&>*': {
      marginBottom: 16,
    },
  },
}));

const Calendar = () => {
  const { id } = useParams<{ id: string }>();

  const classes = useStyles();

  return <div className={classes.container}>Ini kalender {id}</div>;
};

export default Calendar;
