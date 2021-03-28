import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { requestConsultationPosts } from '@redux/actions/consultationPostActions';
import { RootState } from '@redux/reducers';

const ConsultationRoom = () => {
  const { id } = useParams<{ id: string }>();

  const dispatch = useDispatch();

  const consultationPosts = useSelector(
    (state: RootState) => state.consultationPosts,
  );

  useEffect(() => {
    dispatch(requestConsultationPosts(parseInt(id, 10)));
  }, []);

  const renderPosts = () => consultationPosts?.data.map((post) => (
    <div key={post.id}>{post.message}</div>
  ));

  return consultationPosts?.isLoaded ? (
    <div>
      Consultation id :
      {id}
      {renderPosts()}
    </div>
  ) : (
    <div>Loading</div>
  );
};

export default ConsultationRoom;
