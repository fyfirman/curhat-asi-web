import Typography from '@material-ui/core/Typography';
import { makeStyles, Theme } from '@material-ui/core';
import Button from '@components/LinkButton';
import { RootState } from '@redux/reducers';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { resetAddUser } from '@redux/actions/addUserActions';
import CalendarDataGrid from './components/CalendarDataGrid';

const useStyle = makeStyles((theme: Theme) => ({
  header: {},
  tableContainer: {
    height: '80vh',
  },
  headerContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: theme.spacing(3),
  },
}));

const Calendar = () => {
  const classes = useStyle();

  const { level } = useSelector((state: RootState) => state.selfUser.payload.userGroup);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetAddUser());
  }, []);

  return (
    <>
      <div className={classes.headerContainer}>
        <Typography variant="h4" className={classes.header}>
          Diary ASI
        </Typography>
        {level === 0 && (
          <Button to="/" variant="contained" color="secondary">
            Download
          </Button>
        )}
      </div>
      <div>
        <CalendarDataGrid />
      </div>
    </>
  );
};

export default Calendar;
