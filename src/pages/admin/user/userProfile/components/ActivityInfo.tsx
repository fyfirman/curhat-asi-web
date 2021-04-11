import TabPanel from './TabPanel';

interface ActivityInfoProps {
  index: number;
  value: number;
}

const ActivityInfo = ({ index, value }: ActivityInfoProps) => {
  return (
    <TabPanel index={index} value={value}>
      <div>test</div>
    </TabPanel>
  );
};

export default ActivityInfo;
