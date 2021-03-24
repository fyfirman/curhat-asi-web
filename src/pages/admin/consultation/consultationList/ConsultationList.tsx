import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles, Theme } from '@material-ui/core';
import { DataGrid } from '@material-ui/data-grid';
import { columns, rows } from './mock.data';

const useStyle = makeStyles((theme: Theme) => ({
  header: {
    marginBottom: theme.spacing(3),
  },
}));

const Consultations = () => {
  const classes = useStyle();

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
