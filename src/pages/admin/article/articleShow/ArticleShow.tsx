/* eslint-disable @typescript-eslint/no-unused-vars */
import { useParams } from 'react-router-dom';
import { makeStyles, Theme } from '@material-ui/core';
import ContentLayout from '@components/ContentLayout';

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

  const { id } = useParams<{ id: string }>();

  return (
    <ContentLayout
      levelOneLabel="Daftar Artikel"
      levelOneTo="/admin/article"
      levelTwoLabel="Cara Memberikan ASI yang Benar"
    >
      Test
    </ContentLayout>
  );
};

export default ArticleShow;
