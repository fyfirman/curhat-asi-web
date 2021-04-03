import React, { useState } from 'react';
import {
  makeStyles, Tab, Tabs, Theme,
} from '@material-ui/core';
import { useSelector } from 'react-redux';
import { RootState } from '@redux/reducers';
import TabPanel from './TabPanel';
import {
  babyInfo, husbandInfo, momsProfile, pregnancyInfo,
} from './data';

const useStyles = makeStyles((_theme: Theme) => ({
  tab: {
    minWidth: 120,
    padding: '8px 24px',
  },
}));

const UserTabsInfo = () => {
  const [value, setValue] = useState(0);
  const classes = useStyles();

  // Change with opened user
  const user = useSelector((state: RootState) => state.userProfile.payload);

  const tabsData: { label: string; infoList: Record<string, string | undefined> }[] = [
    { label: 'Profil', infoList: momsProfile(user) },
    { label: 'Kehamilan', infoList: pregnancyInfo(user?.profile?.pregnancy) },
    { label: 'Bayi', infoList: babyInfo(user?.profile?.baby) },
    { label: 'Anggota Keluarga Lain', infoList: husbandInfo(user?.profile?.husband) },
  ];

  const handleChange = (_event: any, newValue: number) => {
    setValue(newValue);
  };

  const a11yProps = (index: number) => ({
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  });

  const renderTabs = () => tabsData.map((tab, index) => (
    <Tab className={classes.tab} label={tab.label} {...a11yProps(index)} />
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
