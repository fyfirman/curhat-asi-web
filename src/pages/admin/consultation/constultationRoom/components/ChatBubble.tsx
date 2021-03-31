import * as React from 'react';
import { Avatar, makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((_theme: Theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
  },
  info: {
    display: 'flex',
    flexDirection: 'column',
  },
}));

interface ChatBubbleProps{
  avatarUri?: string;
  message: string;
  name: string;
  time: string;
}

const ChatBubble: React.FC<ChatBubbleProps> = (props:ChatBubbleProps) => {
  const {
    message, name, time, avatarUri, ...rest
  } = props;

  const classes = useStyles();

  return (
    <div className={classes.root} {...rest}>
      <Avatar>
        {avatarUri}
      </Avatar>
      <div className={classes.info}>
        <span>{name}</span>
        <span>{message}</span>
        <span>{time}</span>
      </div>
    </div>
  );
};

export default ChatBubble;
