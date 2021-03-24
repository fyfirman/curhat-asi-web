import React from "react";
import Typography from "@material-ui/core/Typography";
import { Button, makeStyles, Theme } from "@material-ui/core";
import { DataGrid } from "@material-ui/data-grid";
import { columns, rows } from "./mock.data";

const useStyle = makeStyles((theme: Theme) => ({
  container: {
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(4)
  },
  header: {},
  tableContainer: {
    height: "80vh"
  },
  headerContainer: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: theme.spacing(3)
  }
}));

const Users = () => {
  const classes = useStyle();

  return (
    <div className={classes.container}>
      <div className={classes.headerContainer}>
        <Typography variant="h4" className={classes.header}>
          Daftar Pengguna
        </Typography>
        <Button variant="contained" color="secondary">
          Tambah
        </Button>
      </div>
      <DataGrid autoHeight rows={rows} columns={columns} pageSize={20} checkboxSelection={false} />
    </div>
  );
};

export default Users;
