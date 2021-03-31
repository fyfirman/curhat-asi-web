import * as React from 'react';
import { Avatar, makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
  },
  info: {
    minWidth: '7.5%',
    maxWidth: '60%',
    marginLeft: theme.spacing(1),
    backgroundColor: theme.palette.chatBubble?.default,
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(1),
    borderRadius: '0 8px 8px 8px',
    wordWrap: 'break-word',
  },
  name: {
    fontWeight: 500,
    fontSize: 14,
  },
  message: {
    fontSize: 14,
  },
  time: {
    textAlign: 'right',
    fontSize: 11,
  },
}));

interface ChatBubbleProps {
  opposite?: boolean
  avatarUri?: string
  message: string
  name: string
  time: string
}

const ChatBubble = ({
  message,
  name,
  time,
  avatarUri,
  opposite = false,
  ...rest
}: ChatBubbleProps) => {
  const classes = useStyles();

  return (
    <>
      {!opposite && (
      <div className={classes.root} {...rest}>
        <Avatar>{avatarUri}</Avatar>
        <div className={classes.info}>
          <span className={classes.name}>{name}</span>
          <span className={classes.message}>{message}</span>
          <span className={classes.time}>{time}</span>
        </div>
      </div>
      )}
    </>
  );
};

export default ChatBubble;
