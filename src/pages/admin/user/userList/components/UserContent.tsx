import React, { useState } from 'react';
import { Tab, Tabs } from '@material-ui/core';
import UserGroup from '@constants/UserGroupEnum';
import TabPanel from './TabPanel';
import UserDataGrid from './UserDataGrid';

const tabsData: { label: string; type: UserGroup }[] = [
  { label: 'Ibu', type: UserGroup.Mommies },
  { label: 'Kader', type: UserGroup.Cadre },
  { label: 'Bidan', type: UserGroup.Midwife },
  { label: 'Konselor', type: UserGroup.Conselor },
  { label: 'Dokter Umum', type: UserGroup.DoctorGeneral },
  { label: 'Dokter Spesialis', type: UserGroup.DoctorSpecialist },
];

const UserContent = () => {
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
      <UserDataGrid type={tab.type} />
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

export default UserContent;
