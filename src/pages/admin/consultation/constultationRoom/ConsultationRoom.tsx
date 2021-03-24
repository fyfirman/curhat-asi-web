import React from 'react';
import { useParams } from 'react-router-dom';

const ConsultationRoom = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <div>
      Consultation id :
      {id}
    </div>
  );
};

export default ConsultationRoom;
