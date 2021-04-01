import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { requestConsultation } from '@redux/actions/consultationActions';
import { makeStyles, Theme } from '@material-ui/core';
import Breadcrumbs from './components/Breadcrumbs';
import ChatContainer from './components/ChatContainer';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(2),
  },
}));

const ConsultationRoom = () => {
  const classes = useStyles();

  const { id } = useParams<{ id: string }>();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestConsultation(id));
  }, []);

  return (
    <div className={classes.root}>
      <Breadcrumbs />
      <ChatContainer />
    </div>
  );
};

export default ConsultationRoom;
