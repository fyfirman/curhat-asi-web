import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { requestConsultationPosts } from '@redux/actions/consultationPostActions';
import { RootState } from '@redux/reducers';
import { Breadcrumbs, Typography } from '@material-ui/core';

const ConsultationRoom = () => {
  const { id } = useParams<{ id: string }>();

  const dispatch = useDispatch();

  const consultation = useSelector(
    (state: RootState) => state.consultations.payload.data.find(
      (item) => item.id === id,
    ),
  );

  useEffect(() => {
    dispatch(requestConsultationPosts(parseInt(id, 10)));
  }, []);

  const renderPosts = () => consultation?.posts.map((post) => (
    <div key={post.id}>{post.message}</div>
  ));

  return (
    <div>
      <Breadcrumbs aria-label="breadcrumb">
        <Link to="/admin/consultation">
          Konsultasi
        </Link>
        <Typography color="textPrimary">{consultation?.user.fullName || 'Belum mengisi profile'}</Typography>
      </Breadcrumbs>
      {id}
      {renderPosts()}
    </div>
  );
};

export default ConsultationRoom;
