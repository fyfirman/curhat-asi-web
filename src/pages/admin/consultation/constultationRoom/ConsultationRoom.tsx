import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { requestConsultationPosts } from '@redux/actions/consultationPostActions';

const ConsultationRoom = () => {
  const { id } = useParams<{ id: string }>();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestConsultationPosts(parseInt(id, 10)));
  }, []);

  return (
    <div>
      Consultation id :
      {id}
    </div>
  );
};

export default ConsultationRoom;
