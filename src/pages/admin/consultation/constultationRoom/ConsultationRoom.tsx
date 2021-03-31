import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { requestConsultation } from '@redux/actions/consultationActions';
import { makeStyles } from '@material-ui/core';
import Breadcrumbs from './components/Breadcrumbs';
import ChatContainer from './components/ChatContainer';

const useStyles = makeStyles(() => ({
  root: {
    height: '100%',
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
