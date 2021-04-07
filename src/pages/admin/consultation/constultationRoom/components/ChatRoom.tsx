import React from 'react';
import { makeStyles, Theme } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { RootState } from '@redux/reducers';
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

  const consultation = useSelector((state: RootState) => state.consultation);

  const user = useSelector((state: RootState) => state.user);

  const renderPosts = () => consultation?.posts.map((post: IConsultationPost) => (
    <ChatBubble
      key={post.id}
      imageUri={post.picture}
      message={post.message}
      name={post.user.fullName || 'Belum mengisi profile'}
      time={post.createdAt}
      opposite={post.userId === user.id}
    />
  ));

  return (
    <div className={classes.chatRoom}>
      {renderPosts()}
    </div>
  );
};

export default ChatRoom;
