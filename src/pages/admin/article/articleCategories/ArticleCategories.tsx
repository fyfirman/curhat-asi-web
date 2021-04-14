import Typography from '@material-ui/core/Typography';
import { Button, makeStyles, Theme } from '@material-ui/core';
import { useState } from 'react';
import ArticleCategoriesDataGrid from './components/ArticleCategoriesDatagrid';
import AddCategoryDialog from './components/AddCategoryDialog';

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

  const [openAddCategory, setOpenAddCategory] = useState(false);

  return (
    <>
      <div className={classes.headerContainer}>
        <Typography variant="h4" className={classes.header}>
          Daftar Kategori Artikel
        </Typography>
        <div>
          <Button onClick={() => { setOpenAddCategory(true); }} variant="contained" color="secondary">
            Tambah Kategori
          </Button>
        </div>
      </div>
      <div>
        <ArticleCategoriesDataGrid />
      </div>
      <AddCategoryDialog
        open={openAddCategory}
        handleClose={() => { setOpenAddCategory(false); }}
      />
    </>
  );
};

export default ArticleCategories;
