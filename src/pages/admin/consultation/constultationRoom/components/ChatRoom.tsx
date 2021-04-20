import { makeStyles, Theme } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { RootState } from '@redux/reducers';
import { useQuery } from 'react-query';
import { getConsultationPost } from '@services/ConsultationServices';
import { useParams } from 'react-router-dom';
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
  const { id } = useParams<{ id: string }>();

  const classes = useStyles();

  const { isSuccess, data } = useQuery(['consultation', id], () => getConsultationPost(id));

  const user = useSelector((state: RootState) => state.selfUser.payload);

  const renderPosts = () =>
    data?.map((post: IConsultationPost) => (
      <ChatBubble
        key={post.id}
        imageUri={post.picture?.original}
        message={post.message}
        name={post.user.fullName || 'Belum mengisi profile'}
        time={post.createdAt}
        opposite={post.userId === user.id}
      />
    ));

  return <div className={classes.chatRoom}>{isSuccess && renderPosts()}</div>;
};

export default ChatRoom;
