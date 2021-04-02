import React from 'react';
import { useParams } from 'react-router-dom';
import Breadcrumbs from '@components/CustomBreadcrumbs';
import { makeStyles, Theme } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { RootState } from '@redux/reducers';
import Container from './components/Container';
import Header from './components/Header';
import UserTabsInfo from './components/UserTabsInfo';

const useStyles = makeStyles((theme: Theme) => ({
  breadCrumbs: {
    marginBottom: theme.spacing(2),
  },
}));

const ShowUser = () => {
  const { id } = useParams<{ id: string }>();

  const user = useSelector((state: RootState) => state.userList.mommies.payload[0]);

  const classes = useStyles();

  return (
    <div>
      {id}
      <Breadcrumbs
        className={classes.breadCrumbs}
        levelOneLabel="Pengguna"
        levelOneTo="/admin/user"
        levelTwoLabel={user.fullName || 'Belum mengisi profile'}
      />
      <Container>
        <Header />
        <UserTabsInfo />
      </Container>
    </div>
  );
};

export default ShowUser;
