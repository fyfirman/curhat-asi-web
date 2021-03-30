import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { RootState } from '@redux/reducers';
import { Breadcrumbs, Typography } from '@material-ui/core';
import { requestConsultation } from '@redux/actions/consultationActions';

const ConsultationRoom = () => {
  const { id } = useParams<{ id: string }>();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestConsultation(id));
  }, []);

  const consultation = useSelector((state: RootState) => state.consultation);

  const renderPosts = () => consultation?.posts.map((post) => (
    <div key={post.id}>{post.message}</div>
  ));

  return (
    <div>
      <Breadcrumbs aria-label="breadcrumb">
        <Link to="/admin/consultation">
          Konsultasi
        </Link>
        <Typography color="textPrimary">{consultation?.user?.fullName || 'Belum mengisi profile'}</Typography>
      </Breadcrumbs>
      {id}
      {renderPosts()}
    </div>
  );
};

export default ConsultationRoom;
