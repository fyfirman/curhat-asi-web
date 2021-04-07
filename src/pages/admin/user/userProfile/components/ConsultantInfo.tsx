import { RootState } from '@redux/reducers';
import { useSelector } from 'react-redux';
import { consultantProfile } from './data';
import TabPanel from './TabPanel';

const ConsultantInfo = () => {
  const user = useSelector((state: RootState) => state.userProfile.payload);

  return (
    <TabPanel value={0} index={0} infoList={consultantProfile(user)} />
  );
};

export default ConsultantInfo;
