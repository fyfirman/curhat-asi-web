import { useEffect } from 'react';
import Breadcrumbs from '@components/CustomBreadcrumbs';
import { makeStyles, Theme } from '@material-ui/core';
import Container from '@components/Container';
import { useDispatch } from 'react-redux';
import { useParams, useRouteMatch } from 'react-router-dom';
import { requestArticle } from '@redux/actions/articleShowActions';
import CreateArticleForm from './components/CreateArticleForm';

const useStyles = makeStyles((theme: Theme) => ({
  breadCrumbs: {
    marginBottom: theme.spacing(2),
  },
}));

const CreateArticle = () => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const { url } = useRouteMatch();
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    if (url.includes('edit')) {
      dispatch(requestArticle(id));
    }
  }, []);

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
