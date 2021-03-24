import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles, Theme } from "@material-ui/core";
import { DataGrid } from "@material-ui/data-grid";
import { columns, rows } from "./mock.data";

const useStyle = makeStyles((theme: Theme) => ({
  container: {
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(4)
  },
  header: {
    marginBottom: theme.spacing(3)
  },
  tableContainer: {
    height: "80vh"
  }
}));

const Users = () => {
  const classes = useStyle();

  return (
    <div className={classes.container}>
      <Typography variant="h4" className={classes.header}>
        Daftar Pengguna
      </Typography>
      <DataGrid autoHeight rows={rows} columns={columns} pageSize={20} checkboxSelection={false} />
    </div>
  );
};

export default Users;
