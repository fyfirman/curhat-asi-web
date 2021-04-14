import { DataGrid, GridCellParams, GridColDef } from '@material-ui/data-grid';
import ActionButton from '@components/ActionButton';
import { useState } from 'react';
import DeletePromptDialog from './DeletePromptDialog';

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

const ActionButtons = (onDelete: ()=> any) => (params: GridCellParams) => (
  <div style={{ display: 'flex', flex: 1, justifyContent: 'space-around' }}>
    <ActionButton label="Lihat" to={`/admin/consultation/${params.getValue('id')}`} />
    <ActionButton label="Hapus" onClick={onDelete} noLink />
    <ActionButton label="Kembalikan" onClick={onDelete} noLink />
  </div>
);

const columns = (onDelete: ()=> any): GridColDef[] => ([
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
    renderCell: ActionButtons(onDelete),
  },
]);

const TrashArticleDataGrid = () => {
  const [openDeletePrompt, setOpenDeletePrompt] = useState(false);

  const handleDelete = () => {
    setOpenDeletePrompt(true);
  };

  return (
    <>
      <DataGrid
        autoHeight
        rows={mockRows}
        columns={columns(handleDelete)}
        pageSize={20}
        checkboxSelection={false}
      />
      <DeletePromptDialog
        open={openDeletePrompt}
        handleClose={() => { setOpenDeletePrompt(false); }}
      />
    </>
  );
};

export default TrashArticleDataGrid;
