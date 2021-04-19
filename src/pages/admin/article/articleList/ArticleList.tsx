import { ChangeEvent, useState } from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles, Tabs, Theme } from '@material-ui/core';
import Button from '@components/LinkButton';
import { useSelector } from 'react-redux';
import { RootState } from '@redux/reducers';
import Tab from '@components/Tab';
import TabPanel from '@components/TabPanel';
import ActiveArticleDataGrid from './components/ActiveArticleDataGrid';
import TrashArticleDataGrid from './components/TrashArticleDataGrid';

const useStyle = makeStyles((theme: Theme) => ({
  header: {
    marginBottom: theme.spacing(3),
  },
  headerContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: theme.spacing(3),
  },
}));

const ArticleList = () => {
  const classes = useStyle();

  const [value, setValue] = useState(0);

  const { level } = useSelector((state: RootState) => state.selfUser.payload.userGroup);

  const handleChange = (_event: ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <div className={classes.headerContainer}>
        <Typography variant="h4" className={classes.header}>
          Daftar Artikel
        </Typography>
        {level === 0 && (
          <Button to="../article/add" variant="contained" color="secondary">
            Buat artikel
          </Button>
        )}
      </div>
      <div>
        <Tabs
          value={value}
          indicatorColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="tabs article"
          onChange={handleChange}
        >
          <Tab label="Aktif" index={0} />
          <Tab label="Sampah" index={1} />
        </Tabs>
        <TabPanel value={value} index={0}>
          <ActiveArticleDataGrid />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <TrashArticleDataGrid />
        </TabPanel>
      </div>
    </>
  );
};

export default ArticleList;
