import React from 'react';
import Breadcrumbs from '@components/CustomBreadcrumbs';
import { makeStyles, Theme } from '@material-ui/core';
import Container from '@components/Container';
import AddUserForm from './components/AddUserForm';

const useStyles = makeStyles((theme: Theme) => ({
  breadCrumbs: {
    marginBottom: theme.spacing(2),
  },
}));

const AddUser = () => {
  const classes = useStyles();

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
