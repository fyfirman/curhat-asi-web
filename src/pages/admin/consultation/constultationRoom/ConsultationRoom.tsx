import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { requestConsultation } from '@redux/actions/consultationActions';
import { makeStyles, Theme } from '@material-ui/core';
import Breadcrumbs from '@components/CustomBreadcrumbs';
import { RootState } from '@redux/reducers';
import ChatContainer from './components/ChatContainer';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(2),
  },
}));

const ConsultationRoom = () => {
  const classes = useStyles();

  const { id } = useParams<{ id: string }>();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestConsultation(id));
  }, []);

  const consultation = useSelector((state: RootState) => state.consultation);

  // TODO: add loading when dispatching

  return (
    <div className={classes.root}>
      <Breadcrumbs
        levelOneLabel="Konsultasi"
        levelOneTo="/admin/consultation"
        levelTwoLabel={`${consultation?.user?.fullName || 'Belum mengisi profile'} ${consultation.description}`}
      />
      <ChatContainer />
    </div>
  );
};

export default ConsultationRoom;
