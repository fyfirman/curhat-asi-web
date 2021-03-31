import React from 'react';
import { RootState } from '@redux/reducers';
import { useSelector } from 'react-redux';
import { Avatar, makeStyles, Theme } from '@material-ui/core';
import ChatBubble from './ChatBubble';
import Info from './Info';
import Participant from './Participant';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: 'white',
    borderRadius: theme.shape.borderRadius,
    display: 'flex',
    height: '100%',
  },
  borderStyle: {
    borderStyle: 'solid',
    borderColor: theme.palette.background.default,
  },
  main: {
    extend: 'borderStyle',
    display: 'flex',
    flex: 3,
    flexDirection: 'column',
    borderWidth: '0 1px 0 0',
  },
  secondary: {
    display: 'flex',
    flexDirection: 'column',
    flex: 2,
  },
  header: {
    extend: 'borderStyle',
    padding: theme.spacing(1),
    height: '56px',
    display: 'flex',
    alignItems: 'center',
  },
  headerChat: {
    borderTopWidth: 0,
    borderBottomWidth: 1,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    extend: 'header',
    flexDirection: 'row',
  },
  headerContent: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: theme.spacing(1),
  },
  headerInfo: {
    extend: 'header',
    borderTopWidth: 0,
    borderBottomWidth: 1,
    borderLeftWidth: 0,
    borderRightWidth: 0,
  },
  chatRoom: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
  generalInfo: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  subHeader: {
    marginLeft: theme.spacing(2),
  },
  participant: {
    '&> span': {
      extend: 'subHeader',
    },
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    borderStyle: 'solid',
    borderColor: theme.palette.background.default,
    borderWidth: '8px 0',
  },
  information: {
    '&> span': {
      extend: 'subHeader',
    },
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
}));

const ChatContainer:React.FC = () => {
  const classes = useStyles();

  const consultation = useSelector((state: RootState) => state.consultation);

  // eslint-disable-next-line no-underscore-dangle
  const _renderPosts = () => consultation?.posts.map((post) => (
    <div key={post.id}>{post.message}</div>
  ));

  return (
    <div className={classes.root}>
      <div className={classes.main}>
        <div className={classes.headerChat}>
          <Avatar>Dessy</Avatar>
          <div className={classes.headerContent}>
            <span>Dessy</span>
            <span>Masalah : Tidak mau diberi asi</span>
          </div>
        </div>
        <div className={classes.chatRoom}>
          <ChatBubble message="Halo" name="Dessy" time="12:19" />
          <ChatBubble message="Halo" name="Dessy" time="12:19" />
          <ChatBubble message="Halo" name="Dessy" time="12:19" />
          <ChatBubble message="Halo" name="Dessy" time="12:19" />
        </div>
      </div>
      <div className={classes.secondary}>
        <div className={classes.headerInfo}>
          Informasi Konsultasi
        </div>
        <div className={classes.generalInfo}>
          <Info label="Waktu dibuat" info="16:31, 14 Maret 2021" />
          <Info label="Waktu ditutup" info="-" />
        </div>
        <div className={classes.participant}>
          <span>Partisipan</span>
          <Participant name="Dessy" phoneNumber="+62631276372" />
          <Participant name="Ratna" phoneNumber="+62631276372" />
        </div>
        <div className={classes.information}>
          <span>Informasi Umum</span>
          <Info label="Waktu dibuat" info="16:31, 14 Maret 2021" />
          <Info label="Waktu ditutup" info="-" />
          <Info label="Waktu ditutup" info="-" />
          <Info label="Waktu ditutup" info="-" />
          <Info label="Waktu ditutup" info="-" />
        </div>
      </div>
    </div>
  );
};

export default ChatContainer;
