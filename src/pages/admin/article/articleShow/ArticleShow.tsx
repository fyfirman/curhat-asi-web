/* eslint-disable @typescript-eslint/no-unused-vars */
import { ChangeEvent, useState } from 'react';
import { useParams } from 'react-router-dom';
import { makeStyles, Tabs, Theme } from '@material-ui/core';
import ContentLayout from '@components/ContentLayout';
import Tab from '@components/Tab';
import TabPanel from '@components/TabPanel';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(2),
  },
}));

const ArticleShow = () => {
  const classes = useStyles();

  const [value, setValue] = useState(0);

  const handleChange = (_event: ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  const { id } = useParams<{ id: string }>();

  return (
    <ContentLayout
      levelOneLabel="Daftar Artikel"
      levelOneTo="/admin/article"
      levelTwoLabel="Cara Memberikan ASI yang Benar"
    >
      <Tabs
        value={value}
        indicatorColor="primary"
        variant="scrollable"
        scrollButtons="auto"
        aria-label="tabs article"
        onChange={handleChange}
      >
        <Tab label="Pratinjau" index={0} />
        <Tab label="Pembaca" index={1} />
        <Tab label="Penilaian" index={2} />
      </Tabs>
      <TabPanel value={value} index={0}>
        Preview
      </TabPanel>
      <TabPanel value={value} index={1}>
        Test 2
      </TabPanel>
      <TabPanel value={value} index={2}>
        Test 3
      </TabPanel>
    </ContentLayout>
  );
};

export default ArticleShow;
