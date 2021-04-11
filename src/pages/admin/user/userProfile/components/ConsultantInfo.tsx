import { RootState } from '@redux/reducers';
import { useSelector } from 'react-redux';
import Info from './Info';
import { consultantProfile } from './data';
import TabPanel, { InfoList } from './TabPanel';

const ConsultantInfo = () => {
  const user = useSelector((state: RootState) => state.userProfile.payload);

  const renderInfoList = (infoList: InfoList) => Object.keys(infoList).map((key, i) => (
    <Info key={i} label={key} info={infoList[key]} />
  ));

  return (
    <TabPanel value={0} index={0}>
      {renderInfoList(consultantProfile(user))}
    </TabPanel>
  );
};

export default ConsultantInfo;
