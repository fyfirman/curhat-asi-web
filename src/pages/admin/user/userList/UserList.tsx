import React, { useEffect, useState } from 'react';
import Typography from '@material-ui/core/Typography';
import {
  makeStyles, Tab, Tabs, Theme,
} from '@material-ui/core';
import { DataGrid } from '@material-ui/data-grid';
import Button from '@components/LinkButton';
import { useDispatch } from 'react-redux';
import { columns, rows } from './mock.data';
import TabPanel from './components/TabPanel';
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

  const [value, setValue] = useState(0);

  // eslint-disable-next-line no-underscore-dangle
  const _dispatch = useDispatch();

  useEffect(() => {
    // dispatch(requestUsers());
  }, []);

  const handleChange = (_event: any, newValue: number) => {
    setValue(newValue);
  };

  const a11yProps = (index: number) => ({
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  });

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
      <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
        <Tab label="Item One" {...a11yProps(0)} />
        <Tab label="Item Two" {...a11yProps(1)} />
        <Tab label="Item Three" {...a11yProps(2)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        Item One
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
        <DataGrid
          autoHeight
          rows={rows}
          columns={columns}
          pageSize={20}
          checkboxSelection={false}
        />
      </TabPanel>
    </>
  );
};

export default Users;
