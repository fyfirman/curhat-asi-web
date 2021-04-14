/* eslint-disable @typescript-eslint/no-unused-vars */
import { ChangeEvent, useState } from 'react';
import { useParams } from 'react-router-dom';
import { makeStyles, Tabs, Theme } from '@material-ui/core';
import ContentLayout from '@components/ContentLayout';
import Tab from '@components/Tab';
import TabPanel from '@components/TabPanel';
import ArticleRatingDataGrid from './components/ArticleRatingDataGrid';
import ArticleReaderDataGrid from './components/ArticleReaderDataGrid';

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
        {/* <Tab label="Pembaca" index={1} /> */}
        <Tab label="Penilaian" index={1} />
      </Tabs>
      <TabPanel value={value} index={0}>
        Preview
      </TabPanel>
      {/* <TabPanel value={value} index={1}>
        <span>Jumlah kali dibaca : 323 kali</span>
        <br />
        <span>Jumlah pembaca : 45 orang</span>
        <ArticleReaderDataGrid />
      </TabPanel> */}
      <TabPanel value={value} index={1}>
        <span>Rata-rata penilaian : 4.24</span>
        <br />
        <span>Jumlah yang menilai : 45 orang</span>
        <ArticleRatingDataGrid />
      </TabPanel>
    </ContentLayout>
  );
};

export default ArticleShow;
