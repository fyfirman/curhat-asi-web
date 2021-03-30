import React from 'react';
import { RootState } from '@redux/reducers';
import { useSelector } from 'react-redux';

const ChatContainer = () => {
  const consultation = useSelector((state: RootState) => state.consultation);

  const renderPosts = () => consultation?.posts.map((post) => (
    <div key={post.id}>{post.message}</div>
  ));

  return (
    <div>
      {JSON.stringify(consultation)}
      {renderPosts()}
    </div>
  );
};

export default ChatContainer;
