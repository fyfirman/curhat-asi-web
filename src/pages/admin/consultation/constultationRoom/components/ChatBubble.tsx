import * as React from 'react';
import { Avatar, makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
  root: (props: any) => ({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: props.opposite ? 'flex-end' : 'flex-start',
  }),
  info: (props: any) => ({
    minWidth: '7.5%',
    maxWidth: '60%',
    marginLeft: theme.spacing(1),
    backgroundColor: !props.opposite
      ? theme.palette.chatBubble?.default
      : theme.palette.chatBubble?.opposite,
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(1),
    borderRadius: !props.opposite
      ? '0 8px 8px 8px'
      : '8px 0 8px 8px',
    wordWrap: 'break-word',
  }),
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
  const classes = useStyles({ opposite });

  return (
    <div className={classes.root} {...rest}>
      {!opposite && <Avatar>{avatarUri}</Avatar>}
      <div className={classes.info}>
        {!opposite && <span className={classes.name}>{name}</span>}
        <span className={classes.message}>{message}</span>
        <span className={classes.time}>{time}</span>
      </div>
    </div>
  );
};

export default ChatBubble;
