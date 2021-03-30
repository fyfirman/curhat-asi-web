import React from 'react';
import { Breadcrumbs, Typography } from '@material-ui/core';
import { RootState } from '@redux/reducers';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const CustomBreadcrumbs = () => {
  const consultation = useSelector((state: RootState) => state.consultation);

  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Link to="/admin/consultation">
        Konsultasi
      </Link>
      <Typography color="textPrimary">{consultation?.user?.fullName || 'Belum mengisi profile'}</Typography>
    </Breadcrumbs>
  );
};

export default CustomBreadcrumbs;
