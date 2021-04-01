import React, { useState } from 'react';
import { Tab, Tabs } from '@material-ui/core';
import UserGroup from '@constants/UserGroupEnum';
import TabPanel from './TabPanel';

// TODO: change with components
const tabsData: { label: string; type: UserGroup }[] = [
  { label: 'Profil', type: UserGroup.Mommies },
  { label: 'Kehamilan', type: UserGroup.Cadre },
  { label: 'Bayi', type: UserGroup.Midwife },
  { label: 'Anggota Keluarga Lain', type: UserGroup.Conselor },
];

const UserTabsInfo = () => {
  const [value, setValue] = useState(0);

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
    <TabPanel value={value} index={index}>
      <span>{index}</span>
    </TabPanel>
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
