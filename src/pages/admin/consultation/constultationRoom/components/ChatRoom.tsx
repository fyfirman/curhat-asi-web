import React from 'react';
import { makeStyles, Theme } from '@material-ui/core';
import ChatBubble from './ChatBubble';

const useStyles = makeStyles((theme: Theme) => ({
  chatRoom: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    '&>*': {
      marginBottom: theme.spacing(2),
    },
  },
}));

const ChatRoom = () => {
  const classes = useStyles();

  return (
    <div className={classes.chatRoom}>
      <ChatBubble message="Halo" name="Dessy" time="12:19" />
      <ChatBubble message="Halo" name="Dessy" time="12:19" />
      <ChatBubble message="Halo" name="Dessy" time="12:19" />
      <ChatBubble message="Halo" name="Dessy" time="12:19" />
    </div>
  );
};

export default ChatRoom;
