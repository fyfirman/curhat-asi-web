import Typography from '@material-ui/core/Typography';
import { makeStyles, Theme } from '@material-ui/core';
import Button from '@components/LinkButton';
import { useSelector } from 'react-redux';
import { RootState } from '@redux/reducers';
import ArticleCategoriesDataGrid from './components/ArticleCategoriesDatagrid';

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

const ArticleCategories = () => {
  const classes = useStyle();

  const { level } = useSelector((state: RootState) => state.selfUser.payload.userGroup);

  return (
    <>
      <div className={classes.headerContainer}>
        <Typography variant="h4" className={classes.header}>
          Daftar Kategori Artikel
        </Typography>
        {level === 0 && (
        <Button to="../article/add" variant="contained" color="secondary">
          Tambah Kategori
        </Button>
        )}
      </div>
      <div>
        <ArticleCategoriesDataGrid />
      </div>
    </>
  );
};

export default ArticleCategories;
