import React, { useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles, Theme } from '@material-ui/core';
import { DataGrid } from '@material-ui/data-grid';
import { useDispatch } from 'react-redux';
import { requestConsultations } from '@redux/actions/consultationActions';
import { columns, rows } from './mock.data';

const useStyle = makeStyles((theme: Theme) => ({
  header: {
    marginBottom: theme.spacing(3),
  },
}));

const Consultations = () => {
  const classes = useStyle();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestConsultations());
  }, []);

  return (
    <>
      <Typography variant="h4" className={classes.header}>
        Daftar Konsultasi
      </Typography>
      <DataGrid autoHeight rows={rows} columns={columns} pageSize={20} checkboxSelection={false} />
    </>
  );
};

export default Consultations;
