import { makeStyles } from '@material-ui/core';
import { useParams } from 'react-router-dom';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import { SyntheticEvent } from 'react';

const locales = {
  // eslint-disable-next-line global-require
  id: require('date-fns/locale/id'),
};
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const useStyles = makeStyles(() => ({
  container: {
    textAlign: 'right',

    '&>*': {
      marginBottom: 16,
    },
  },
}));

const DiaryASI = () => {
  const event = [
    {
      id: 0,
      title: 'All Day Event very long title',
      allDay: true,
      start: new Date(2021, 4, 8),
      end: new Date(2021, 4, 8),
      keterangan: 'test',
    },
    {
      id: 1,
      title: 'Long Event',
      start: new Date(2015, 3, 7),
      end: new Date(2015, 3, 10),
    },
  ];

  const { id } = useParams<{ id: string }>();

  const classes = useStyles();

  const handleSelect = (eventx: Object, e: SyntheticEvent) => {
    console.log(eventx);
    console.log(e);
  };

  return (
    <div className={classes.container}>
      Ini kalender {id}
      <Calendar
        localizer={localizer}
        events={event}
        startAccessor="start"
        endAccessor="end"
        style={{ height: '60vh' }}
        defaultDate={new Date(2021, 3, 8)}
        views={{ month: true }}
        onSelectEvent={handleSelect}
      />
    </div>
  );
};

export default DiaryASI;
