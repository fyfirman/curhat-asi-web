import Typography from '@material-ui/core/Typography';
import { Button, makeStyles, Theme } from '@material-ui/core';
import { RootState } from '@redux/reducers';
import { useSelector } from 'react-redux';
import { getCalenderDownload } from '@services/CalendarServices';
import FileSaver from 'file-saver';
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

  const handleDownload = async () => {
    const response = await getCalenderDownload();
    FileSaver.saveAs(response as Blob);
  };

  return (
    <>
      <div className={classes.headerContainer}>
        <Typography variant="h4" className={classes.header}>
          Daftar dIdary ASi
        </Typography>
        {level === 0 && (
          <Button onClick={handleDownload} variant="contained" color="secondary">
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
