import React from 'react';
import { makeStyles, Theme } from '@material-ui/core';
import Info from './Info';
import Participant from './Participant';

const useStyles = makeStyles((theme: Theme) => ({
  itemGap: {
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
  },
  generalInfo: {
    extend: 'itemGap',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  header: {
    marginLeft: theme.spacing(2),
    fontSize: 14,
    color: theme.palette.primary.main,
  },
  participant: {
    extend: 'itemGap',
    '& > span': {
      extend: 'header',
    },
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    borderStyle: 'solid',
    borderColor: theme.palette.background.default,
    borderWidth: '8px 0',
  },
  information: {
    extend: 'itemGap',
    '& > span': {
      extend: 'header',
    },
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
}));

const ChatInfo = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.generalInfo}>
        <Info label="Waktu dibuat" info="16:31, 14 Maret 2021" />
        <Info label="Waktu ditutup" info="-" />
      </div>
      <div className={classes.participant}>
        <span>Partisipan</span>
        <Participant name="Dessy" phoneNumber="+62631276372" />
        <Participant name="Ratna" phoneNumber="+62631276372" />
      </div>
      <div className={classes.information}>
        <span>Informasi Umum</span>
        <Info label="Waktu dibuat" info="16:31, 14 Maret 2021" />
        <Info label="Waktu ditutup" info="-" />
        <Info label="Waktu ditutup" info="-" />
        <Info label="Waktu ditutup" info="-" />
        <Info label="Waktu ditutup" info="-" />
        <Info label="Jenis Kelamin" info="Perempuan" />
        <Info label="Jenis Kelamin" info="Perempuan" />
        <Info label="Jenis Kelamin" info="Perempuan" />
        <Info label="Jenis Kelamin" info="Perempuan" />
        <Info label="Jenis Kelamin" info="Perempuan" />
        <Info label="Jenis Kelamin" info="Perempuan" />
        <Info label="Jenis Kelamin" info="Perempuan" />
        <Info label="Jenis Kelamin" info="Perempuan" />
        <Info label="Jenis Kelamin" info="Perempuan" />
        <Info label="Jenis Kelamin" info="Perempuan" />
        <Info label="Jenis Kelamin" info="Perempuan" />
        <Info label="Jenis Kelamin" info="Perempuan" />
        <Info label="Jenis Kelamin" info="Perempuan" />
        <Info label="Jenis Kelamin" info="Perempuan" />
        <Info label="Jenis Kelamin" info="Perempuan" />
        <Info label="Jenis Kelamin" info="Perempuan" />
        <Info label="Jenis Kelamin" info="Perempuan" />
        <Info label="Jenis Kelamin" info="Perempuan" />
        <Info label="Jenis Kelamin" info="Perempuan" />
        <Info label="Jenis Kelamin" info="Perempuan" />
        <Info label="Jenis Kelamin" info="Perempuan" />
        <Info label="Jenis Kelamin" info="Perempuan" />
        <Info label="Jenis Kelamin" info="Perempuan" />
        <Info label="Jenis Kelamin" info="Perempuan" />
        <Info label="Jenis Kelamin" info="Perempuan" />
        <Info label="Jenis Kelamin" info="Perempuan" />
        <Info label="Jenis Kelamin" info="Perempuan" />
        <Info label="Jenis Kelamin" info="Perempuan" />
        <Info label="Jenis Kelamin" info="Perempuan" />
        <Info label="Jenis Kelamin" info="Perempuan" />
        <Info label="Jenis Kelamin" info="Perempuan" />
        <Info label="Jenis Kelamin" info="Perempuan" />
        <Info label="Jenis Kelamin" info="Perempuan" />
        <Info label="Jenis Kelamin" info="Perempuan" />
        <Info label="Jenis Kelamin" info="Perempuan" />
        <Info label="Jenis Kelamin" info="Perempuan" />
        <Info label="Jenis Kelamin" info="Perempuan" />
        <Info label="Jenis Kelamin" info="Perempuan" />
        <Info label="Jenis Kelamin" info="Perempuan" />
      </div>
    </>
  );
};

export default ChatInfo;
