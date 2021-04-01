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
}));

const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.header}>
      <Avatar className={classes.avatar} />
      <span>Insi Farisa Desy Arya</span>
      <span>Administrator</span>
    </div>
  );
};

export default Header;
