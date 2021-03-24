import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles, Theme } from '@material-ui/core';
import { DataGrid } from '@material-ui/data-grid';
import Button from '@components/LinkButton';
import { columns, rows } from './mock.data';
// import { Link } from "react-router-dom";

const useStyle = makeStyles((theme: Theme) => ({
  header: {},
  tableContainer: {
    height: '80vh',
  },
  headerContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: theme.spacing(3),
  },
}));

const Users = () => {
  const classes = useStyle();

  return (
    <>
      <div className={classes.headerContainer}>
        <Typography variant="h4" className={classes.header}>
          Daftar Pengguna
        </Typography>
        <Button to="user/add" variant="contained" color="secondary">
          Tambah
        </Button>
      </div>
      <DataGrid autoHeight rows={rows} columns={columns} pageSize={20} checkboxSelection={false} />
    </>
  );
};

export default Users;
