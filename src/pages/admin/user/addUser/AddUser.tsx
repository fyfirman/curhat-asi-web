import { useEffect } from 'react';
import Breadcrumbs from '@components/CustomBreadcrumbs';
import { makeStyles, Theme } from '@material-ui/core';
import Container from '@components/Container';
import { useSelector } from 'react-redux';
import { RootState } from '@redux/reducers';
import { useHistory } from 'react-router-dom';
import AddUserForm from './components/AddUserForm';

const useStyles = makeStyles((theme: Theme) => ({
  breadCrumbs: {
    marginBottom: theme.spacing(2),
  },
}));

const AddUser = () => {
  const classes = useStyles();

  const { isSubmitted } = useSelector((state: RootState) => state.addUser);

  const history = useHistory();

  useEffect(() => {
    if (isSubmitted) {
      history.push('/admin');
    }
  }, [isSubmitted]);

  return (
    <div>
      <Breadcrumbs
        className={classes.breadCrumbs}
        levelOneLabel="Pengguna"
        levelOneTo="/admin/user"
        levelTwoLabel="Tambahkan pengguna"
      />
      <Container>
        <AddUserForm />
      </Container>
    </div>
  );
};

export default AddUser;
