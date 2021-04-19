import { useState } from 'react';
import { makeStyles, Tab, Tabs, Theme } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { RootState } from '@redux/reducers';
import Info from '@pages/admin/consultation/constultationRoom/components/Info';
import TabPanel, { InfoList } from './TabPanel';
import { babyInfo, consultantProfile, husbandInfo, momsProfile, pregnancyInfo } from './data';
import ActivityInfo from './ActivityInfo';

const useStyles = makeStyles((_theme: Theme) => ({
  tab: {
    minWidth: 120,
    padding: '8px 24px',
  },
}));

interface TabsInfoProps {
  consultant: boolean;
}

const TabsInfo = ({ consultant }: TabsInfoProps) => {
  const [value, setValue] = useState(0);

  const classes = useStyles();

  const user = useSelector((state: RootState) => state.userProfile.payload);

  const momTabsData: { label: string; infoList: InfoList }[] = [
    { label: 'Profil', infoList: momsProfile(user) },
    { label: 'Kehamilan', infoList: pregnancyInfo(user?.profile?.pregnancy) },
    { label: 'Bayi', infoList: babyInfo(user?.profile?.baby) },
    { label: 'Anggota Keluarga Lain', infoList: husbandInfo(user?.profile?.husband) },
  ];

  const consultantTabsData: { label: string; infoList: InfoList }[] = [
    { label: 'Profil', infoList: consultantProfile(user) },
  ];

  const tabsData = consultant ? consultantTabsData : momTabsData;

  const handleChange = (_event: any, newValue: number) => {
    setValue(newValue);
  };

  const a11yProps = (index: number) => ({
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  });

  const renderTabs = () =>
    tabsData.map((tab, index) => (
      <Tab className={classes.tab} label={tab.label} {...a11yProps(index + 1)} key={index + 1} />
    ));

  const renderTabPanels = () =>
    tabsData.map((tab, index) => (
      <TabPanel value={value} index={index + 1} key={index + 1}>
        {renderInfoList(tab.infoList)}
      </TabPanel>
    ));

  const renderInfoList = (infoList: InfoList) =>
    Object.keys(infoList).map((key, i) => <Info key={i} label={key} info={infoList[key]} />);

  return (
    <>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        variant="scrollable"
        scrollButtons="auto"
        aria-label="tabs user"
      >
        <Tab className={classes.tab} label="Aktivitas" {...a11yProps(0)} />
        {renderTabs()}
      </Tabs>
      <TabPanel value={value} index={0}>
        <ActivityInfo />
      </TabPanel>
      {renderTabPanels()}
    </>
  );
};

export default TabsInfo;
