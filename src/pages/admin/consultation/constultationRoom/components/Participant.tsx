import { Avatar, makeStyles, Theme } from '@material-ui/core';
import * as React from 'react';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    flexDirection: 'row',
  },
  info: {
    marginLeft: theme.spacing(1),
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    borderStyle: 'solid',
    borderColor: theme.palette.background.default,
    borderWidth: '0 0 1px 0',
  },
}));

interface ParticipantProps{
  avatarUri?: string;
  name: string;
  phoneNumber: string;
}

const Participant: React.FC<ParticipantProps> = (props: ParticipantProps) => {
  const { name, phoneNumber } = props;

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Avatar />
      <div className={classes.info}>
        <span>{name}</span>
        <span>{phoneNumber}</span>
      </div>
    </div>
  );
};

export default Participant;
