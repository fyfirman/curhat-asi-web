import React from 'react';

import { Avatar, makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
  header: {
    padding: theme.spacing(0),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    width: 128,
    height: 128,
    marginBottom: 4,
  },
  name: {
    fontSize: 20,
    letterSpacing: '0.15px',
  },
  title: {
    color: theme.palette.text.secondary,
    fontSize: 14,
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.header}>
      <Avatar className={classes.avatar} />
      <span className={classes.name}>Insi Farisa Desy Arya</span>
      <span className={classes.title}>Administrator</span>
    </div>
  );
};

export default Header;
