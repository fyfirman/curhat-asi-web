import React from 'react';
import {
  Breadcrumbs, makeStyles, Theme, Typography,
} from '@material-ui/core';
import { RootState } from '@redux/reducers';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme:Theme) => ({
  prev: {
    fontSize: 16,
    textDecoration: 'none',
    color: theme.palette.text.secondary,
  },
}));

interface CustomBreadcrumbsProps {
  className?: string;
}

const CustomBreadcrumbs :React.FC<CustomBreadcrumbsProps> = () => {
  const classes = useStyles();

  const consultation = useSelector((state: RootState) => state.consultation);

  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Link to="/admin/consultation" className={classes.prev}>
        Konsultasi
      </Link>
      <Typography color="textPrimary">
        {consultation?.user?.fullName || 'Belum mengisi profile'}
        {` (${consultation.description})`}
      </Typography>
    </Breadcrumbs>
  );
};

export default CustomBreadcrumbs;
