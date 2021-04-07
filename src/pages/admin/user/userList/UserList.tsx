
import Typography from '@material-ui/core/Typography';
import { makeStyles, Theme } from '@material-ui/core';
import Button from '@components/LinkButton';
import UserContent from './components/UserContent';

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

const Users = () => {
  const classes = useStyle();

  return (
    <>
      <div className={classes.headerContainer}>
        <Typography variant="h4" className={classes.header}>
          Daftar Pengguna
        </Typography>
        <Button to="user/add" variant="contained" color="secondary">
          Tambah
        </Button>
      </div>
      <div>
        <UserContent />
      </div>
    </>
  );
};

export default Users;
