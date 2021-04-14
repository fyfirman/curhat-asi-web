import { DataGrid, GridColDef } from '@material-ui/data-grid';
import { useEffect, useMemo, useState } from 'react';
import PromptDialog from '@components/PromptDialog';
import ActionButton from '@components/ActionButton';
import { useDispatch, useSelector } from 'react-redux';
import { requestArticleList } from '@redux/actions/articleListActions';
import { RootState } from '@redux/reducers';

interface IRowActiveArticle {
  id: number;
  no: number;
  title: string;
  createdAt: string;
  postedAt: string | null;
  status: string;
}

const ActionButtons = (onDelete: ()=> any) => () => (
  <div style={{ display: 'flex', flex: 1, justifyContent: 'space-around' }}>
    <ActionButton label="Lihat" to="" />
    <ActionButton label="Hapus" onClick={onDelete} noLink />
  </div>
);

const columns = (onDelete: ()=> any): GridColDef[] => ([
  { field: 'id', headerName: 'ID', hide: true },
  { field: 'no', headerName: 'No.', width: 75 },
  { field: 'title', headerName: 'Judul', flex: 1 },
  { field: 'createdAt', headerName: 'Dibuat pada', width: 200 },
  { field: 'status', headerName: 'Status', width: 128 },
  { field: 'postedAt', headerName: 'Dipublikasikan pada', width: 200 },
  {
    field: 'action',
    headerName: 'Aksi',
    width: 175,
    sortable: false,
    filterable: false,
    disableColumnMenu: true,
    renderCell: ActionButtons(onDelete),
  },
]);

const ActiveArticleDataGrid = () => {
  const [openDeletePrompt, setOpenDeletePrompt] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestArticleList());
  }, []);

  const { payload, isLoading } = useSelector((state:RootState) => state.articleList);

  const rows = useMemo(
    () => payload.data.map((article, index): IRowActiveArticle => ({
      id: article.id,
      no: index + 1,
      title: article.title,
      createdAt: article.createdAt,
      postedAt: article.postedAt ?? '-',
      status: article.status,
    })),
    [payload],
  );

  const handleDelete = () => {
    setOpenDeletePrompt(true);
  };

  return (
    <>
      <DataGrid
        autoHeight
        rows={rows}
        columns={columns(handleDelete)}
        pageSize={20}
        checkboxSelection={false}
        loading={isLoading}
      />
      <PromptDialog
        open={openDeletePrompt}
        handleClose={() => { setOpenDeletePrompt(false); }}
        title="Anda yakin untuk menghapus artikel?"
        content="Artikel yang sudah dihapus akan muncul di tab sampah."
      />
    </>
  );
};

export default ActiveArticleDataGrid;
