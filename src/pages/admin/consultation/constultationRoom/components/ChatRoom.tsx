import React from 'react';
import { makeStyles, Theme } from '@material-ui/core';
import ChatBubble from './ChatBubble';

const useStyles = makeStyles((theme: Theme) => ({
  chatRoom: {
    overflowY: 'scroll',
    paddingTop: theme.spacing(2),
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
      <ChatBubble message="Haloaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa" name="Dessy" time="12:19" opposite />
      <ChatBubble message="Haloaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa" name="Dessy" time="12:19" />
      <ChatBubble message="Halo" name="Dessy" time="12:19" opposite />
      <ChatBubble message="Halo" name="Dessy" time="12:19" imageUri="https://via.placeholder.com/350x150" />
      <ChatBubble message="Halo" name="Dessy" time="12:19" imageUri="https://via.placeholder.com/1050x250" />
      <ChatBubble message="Halo" name="Dessy" time="12:19" imageUri="https://via.placeholder.com/105x600" opposite />
      <ChatBubble message="Halo" name="Dessy" time="12:19" />
      <ChatBubble message="Halo" name="Dessy" time="12:19" />
      <ChatBubble message="Halo" name="Dessy" time="12:19" />
      <ChatBubble message="Halo" name="Dessy" time="12:19" />
      <ChatBubble message="Halo" name="Dessy" time="12:19" />
      <ChatBubble message="Halo" name="Dessy" time="12:19" />
      <ChatBubble message="Halo" name="Dessy" time="12:19" />
      <ChatBubble message="Halo" name="Dessy" time="12:19" />
      <ChatBubble message="Halo" name="Dessy" time="12:19" />
      <ChatBubble message="Halo" name="Dessy" time="12:19" />
      <ChatBubble message="Halo" name="Dessy" time="12:19" />
      <ChatBubble message="Halo" name="Dessy" time="12:19" />
      <ChatBubble message="Halo" name="Dessy" time="12:19" />
      <ChatBubble message="Halo" name="Dessy" time="12:19" />
      <ChatBubble message="Halo" name="Dessy" time="12:19" />
      <ChatBubble message="Halo" name="Dessy" time="12:19" />
      <ChatBubble message="Halo" name="Dessy" time="12:19" />
      <ChatBubble message="Halo" name="Dessy" time="12:19" />
    </div>
  );
};

export default ChatRoom;
