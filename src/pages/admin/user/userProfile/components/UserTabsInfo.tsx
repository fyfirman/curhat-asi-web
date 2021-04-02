import React, { useState } from 'react';
import { Tab, Tabs } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { RootState } from '@redux/reducers';
import TabPanel from './TabPanel';
import { momsProfile, pregnancyInfo } from './data';

const UserTabsInfo = () => {
  const [value, setValue] = useState(0);

  // Change with opened user
  const user = useSelector((state: RootState) => state.userList.mommies.payload[0]);

  const tabsData: { label: string; infoList: Record<string, string | undefined> }[] = [
    { label: 'Profil', infoList: momsProfile(user) },
    { label: 'Kehamilan', infoList: pregnancyInfo(user.profile?.pregnancy) },
    { label: 'Bayi', infoList: momsProfile(user) },
    { label: 'Anggota Keluarga Lain', infoList: momsProfile(user) },
  ];

  const handleChange = (_event: any, newValue: number) => {
    setValue(newValue);
  };

  const a11yProps = (index: number) => ({
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  });

  const renderTabs = () => tabsData.map((tab, index) => (
    <Tab label={tab.label} {...a11yProps(index)} />
  ));

  const renderTabPanels = () => tabsData.map((tab, index) => (
    <TabPanel value={value} index={index} infoList={tab.infoList} />
  ));

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
        {renderTabs()}
      </Tabs>
      {renderTabPanels()}
    </>
  );
};

export default UserTabsInfo;
