import React from 'react';
import { useParams } from 'react-router-dom';
import Breadcrumbs from '@components/CustomBreadcrumbs';
import { makeStyles, Theme } from '@material-ui/core';
import Container from './components/Container';
import Header from './components/Header';
import UserTabsInfo from './components/UserTabsInfo';

const useStyles = makeStyles((theme: Theme) => ({
  header: {
    padding: theme.spacing(0),
  },
}));

const ShowUser = () => {
  const { id } = useParams<{ id: string }>();

  // eslint-disable-next-line no-underscore-dangle
  const _classes = useStyles();

  return (
    <div>
      {id}
      <Breadcrumbs
        levelOneLabel="Pengguna"
        levelOneTo="/admin/user"
        levelTwoLabel={'user.fullName' || 'Belum mengisi profile'}
      />
      <Container>
        <Header />
        <UserTabsInfo />
      </Container>
    </div>
  );
};

export default ShowUser;
