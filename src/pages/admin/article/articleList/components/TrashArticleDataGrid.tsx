import { DataGrid, GridCellParams, GridColDef } from '@material-ui/data-grid';
import ActionButton from '@components/ActionButton';
import { useEffect, useMemo, useState } from 'react';
import PromptDialog from '@components/PromptDialog';
import { useDispatch, useSelector } from 'react-redux';
import { requestArticleList } from '@redux/actions/articleListActions';
import { RootState } from '@redux/reducers';

interface IRowTrashedArticle {
  id: number;
  no: number;
  title: string;
  createdAt: string;
}

interface ActionButtonsProps {
  onRecover: ()=> any
}

const ActionButtons = ({ onRecover }: ActionButtonsProps) => (_params: GridCellParams) => (
  <ActionButton label="Kembalikan" onClick={onRecover} noLink />
);

const columns = ({ onRecover }: ActionButtonsProps): GridColDef[] => ([
  { field: 'id', headerName: 'ID', hide: true },
  { field: 'no', headerName: 'No.', width: 75 },
  { field: 'title', headerName: 'Judul', flex: 1 },
  { field: 'createdAt', headerName: 'Dibuat pada', width: 200 },
  {
    field: 'action',
    headerName: 'Aksi',
    width: 300,
    sortable: false,
    filterable: false,
    disableColumnMenu: true,
    renderCell: ActionButtons({ onRecover }),
  },
]);

const TrashArticleDataGrid = () => {
  const [openRecoverPrompt, setOpenRecoverPrompt] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestArticleList('trash'));
  }, []);

  const { payload, isLoading } = useSelector((state:RootState) => state.articleList);

  const rows = useMemo(
    () => payload.data.map((article, index): IRowTrashedArticle => ({
      id: article.id,
      no: index + 1,
      title: article.title,
      createdAt: article.createdAt,
    })),
    [payload],
  );

  const handleRecover = () => {
    setOpenRecoverPrompt(true);
  };

  return (
    <>
      <DataGrid
        autoHeight
        rows={rows}
        columns={columns({ onRecover: handleRecover })}
        pageSize={20}
        checkboxSelection={false}
        loading={isLoading}
      />
      <PromptDialog
        open={openRecoverPrompt}
        onClose={() => { setOpenRecoverPrompt(false); }}
        title="Anda yakin untuk mengembalikan artikel?"
        content="Artikel akan dikembalikan pada tab aktif. Anda bisa mempublikasikannya kembali."
      />
    </>
  );
};

export default TrashArticleDataGrid;
