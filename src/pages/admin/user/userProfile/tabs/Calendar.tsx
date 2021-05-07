import { makeStyles } from '@material-ui/core';
import { useParams } from 'react-router-dom';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import { SyntheticEvent, useMemo } from 'react';
import { useQuery } from 'react-query';
import { getCalendar } from '@services/UserServices';
import { parseISO } from 'date-fns/esm';

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
  const { id } = useParams<{ id: string }>();

  const { isLoading, data } = useQuery(['calendars'], () => getCalendar(parseInt(id, 10)));

  const events = useMemo(
    () =>
      data
        ? data.payload.map((event) => {
            console.log(event.calenderDate);
            return {
              ...event,
              date: parseISO(event.calenderDate),
              title: 'Sudah menyusui',
            };
          })
        : [],
    [data],
  );

  const classes = useStyles();

  const handleSelect = (eventx: Object, e: SyntheticEvent) => {
    console.log(eventx);
    console.log(e);
  };

  return (
    <div className={classes.container}>
      {!isLoading ? (
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="date"
          endAccessor="date"
          style={{ height: '60vh' }}
          defaultDate={new Date(2021, 3, 8)}
          views={{ month: true }}
          onSelectEvent={handleSelect}
        />
      ) : (
        <div>Ini kalender {id}</div>
      )}
    </div>
  );
};

export default DiaryASI;
