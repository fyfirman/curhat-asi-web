import * as React from 'react';
import { Avatar, makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
  },
  info: {
    marginLeft: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(1),
    borderRadius: '0 8px 8px 8px',
  },
  name: {},
  message: {},
  time: {},

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
        <span className={classes.name}>{name}</span>
        <span className={classes.message}>{message}</span>
        <span className={classes.time}>{time}</span>
      </div>
    </div>
  );
};

export default ChatBubble;
