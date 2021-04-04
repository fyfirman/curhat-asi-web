import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Breadcrumbs from '@components/CustomBreadcrumbs';
import { makeStyles, Theme } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@redux/reducers';
import { requestUserProfile } from '@redux/actions/userProfileActions';
import UserGroup from '@constants/UserGroupEnum';
import Container from '@components/Container';
import Header from './components/Header';
import MomsTabsInfo from './components/MomsTabsInfo';
import ConsultantInfo from './components/ConsultantInfo';

const useStyles = makeStyles((theme: Theme) => ({
  breadCrumbs: {
    marginBottom: theme.spacing(2),
  },
}));

const ShowUser = () => {
  const { id } = useParams<{ id: string }>();

  // eslint-disable-next-line no-underscore-dangle
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestUserProfile(parseInt(id, 10)));
  }, []);

  const user = useSelector((state: RootState) => state.userProfile.payload);

  const classes = useStyles();

  return (
    <div>
      <Breadcrumbs
        className={classes.breadCrumbs}
        levelOneLabel="Pengguna"
        levelOneTo="/admin/user"
        levelTwoLabel={user?.fullName || 'Belum mengisi profile'}
      />
      <Container>
        <Header />
        {user?.userGroup.id === UserGroup.Mommies ? <MomsTabsInfo /> : <ConsultantInfo />}
      </Container>
    </div>
  );
};

export default ShowUser;
