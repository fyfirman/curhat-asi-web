import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { requestConsultation } from '@redux/actions/consultationActions';
import Breadcrumbs from './components/Breadcrumbs';
import ChatContainer from './components/ChatContainer';

const ConsultationRoom = () => {
  const { id } = useParams<{ id: string }>();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestConsultation(id));
  }, []);

  return (
    <div>
      <Breadcrumbs />
      <ChatContainer />
    </div>
  );
};

export default ConsultationRoom;
