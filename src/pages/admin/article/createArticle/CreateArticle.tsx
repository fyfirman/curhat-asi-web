import { useEffect } from 'react';
import Breadcrumbs from '@components/CustomBreadcrumbs';
import { makeStyles, Theme } from '@material-ui/core';
import Container from '@components/Container';
import { useSelector } from 'react-redux';
import { RootState } from '@redux/reducers';
import { useHistory } from 'react-router-dom';
import CreateArticleForm from './components/CreateArticleForm';

const useStyles = makeStyles((theme: Theme) => ({
  breadCrumbs: {
    marginBottom: theme.spacing(2),
  },
}));

const CreateArticle = () => {
  const classes = useStyles();

  const { isSubmitted } = useSelector((state: RootState) => state.addUser);

  const history = useHistory();

  useEffect(() => {
    if (isSubmitted) {
      history.push('/admin/article');
    }
  }, [isSubmitted]);

  return (
    <div>
      <Breadcrumbs
        className={classes.breadCrumbs}
        levelOneLabel="Artikel"
        levelOneTo="/admin/article"
        levelTwoLabel="Buat Artikel"
      />
      <Container>
        <CreateArticleForm />
      </Container>
    </div>
  );
};

export default CreateArticle;