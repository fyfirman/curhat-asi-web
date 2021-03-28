import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { requestConsultationPosts } from '@redux/actions/consultationPostActions';
import { RootState } from '@redux/reducers';

const ConsultationRoom = () => {
  const { id } = useParams<{ id: string }>();

  const dispatch = useDispatch();

  const posts = useSelector((state : RootState) => state.consultationPosts);

  useEffect(() => {
    dispatch(requestConsultationPosts(parseInt(id, 10)));
  }, []);

  const renderPosts = () => posts?.map((post) => (<div key={post.id}>{post.message}</div>));

  return (
    <div>
      Consultation id :
      {id}
      {renderPosts()}
    </div>
  );
};

export default ConsultationRoom;
