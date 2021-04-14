import { DataGrid, GridCellParams, GridColDef } from '@material-ui/data-grid';
import ActionButton from '@components/ActionButton';
import { useState } from 'react';
import PromptDialog from '@components/PromptDialog';

interface IRowConsultation {
  id: string;
  no: number;
  title: string;
  createdAt: string;
}

const mockRows: IRowConsultation[] = [
  {
    id: '1',
    no: 1,
    title: 'Cara menyusui dengan benar',
    createdAt: '2021-12-13 11:21:31',
  },
];

interface ActionButtonsProps {
  onDelete: ()=> any;
  onRecover: ()=> any
}

const ActionButtons = ({ onDelete, onRecover }: ActionButtonsProps) => (params: GridCellParams) => (
  <div style={{ display: 'flex', flex: 1, justifyContent: 'space-around' }}>
    <ActionButton label="Lihat" to={`/admin/consultation/${params.getValue('id')}`} />
    <ActionButton label="Hapus" onClick={onDelete} noLink />
    <ActionButton label="Kembalikan" onClick={onRecover} noLink />
  </div>
);

const columns = ({ onDelete, onRecover }: ActionButtonsProps): GridColDef[] => ([
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
    renderCell: ActionButtons({ onDelete, onRecover }),
  },
]);

const TrashArticleDataGrid = () => {
  const [openDeletePrompt, setOpenDeletePrompt] = useState(false);
  const [openRecoverPrompt, setOpenRecoverPrompt] = useState(false);

  const handleDelete = () => {
    setOpenDeletePrompt(true);
  };

  const handleRecover = () => {
    setOpenRecoverPrompt(true);
  };

  return (
    <>
      <DataGrid
        autoHeight
        rows={mockRows}
        columns={columns({ onDelete: handleDelete, onRecover: handleRecover })}
        pageSize={20}
        checkboxSelection={false}
      />
      <PromptDialog
        open={openDeletePrompt}
        handleClose={() => { setOpenDeletePrompt(false); }}
        title="Anda yakin untuk menghapus artikel?"
        content="Artikel yang sudah dihapus tidak bisa dikembalikan."
      />
      <PromptDialog
        open={openRecoverPrompt}
        handleClose={() => { setOpenRecoverPrompt(false); }}
        title="Anda yakin untuk mengembalikan artikel?"
        content="Artikel akan dikembalikan pada tab aktif. Anda bisa mempublikasikannya kembali."
      />
    </>
  );
};

export default TrashArticleDataGrid;
