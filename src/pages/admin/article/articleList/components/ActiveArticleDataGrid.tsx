import { DataGrid, GridColDef } from '@material-ui/data-grid';
import { Button } from '@material-ui/core';

interface IRowConsultation {
  id: string;
  no: number;
  title: string;
  createdAt: string;
  publishedAt: string;
  status: string;
}

const mockRows: IRowConsultation[] = [
  {
    id: '1',
    no: 1,
    title: 'Cara menyusui dengan benar',
    createdAt: '2021-12-13 11:21:31',
    publishedAt: '2021-12-13 11:21:31',
    status: 'Dipublikasikan',
  },
];

const ActionButton = ({ label, onClick }: { label:string, onClick: () => any }) => {
  return (
    <Button
      variant="contained"
      color="secondary"
      size="small"
      disableElevation
      onClick={onClick}
    >
      {label}
    </Button>
  );
};

const ActionButtons = (onDelete: ()=> any) => () => (
  <div style={{ display: 'flex', flex: 1, justifyContent: 'space-around' }}>
    <ActionButton label="Lihat" onClick={onDelete} />
    <ActionButton label="Hapus" onClick={onDelete} />
  </div>
);

const columns = (onDelete: ()=> any): GridColDef[] => ([
  { field: 'id', headerName: 'ID', hide: true },
  { field: 'no', headerName: 'No.', width: 75 },
  { field: 'title', headerName: 'Judul', flex: 1 },
  { field: 'createdAt', headerName: 'Dibuat pada', width: 200 },
  { field: 'status', headerName: 'Status', width: 128 },
  { field: 'publishedAt', headerName: 'Dipublikasikan pada', width: 200 },
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

const ActiveArticleDataGrid = ({ onDelete }:{ onDelete: ()=> any }) => {
  return (
    <DataGrid
      autoHeight
      rows={mockRows}
      columns={columns(onDelete)}
      pageSize={20}
      checkboxSelection={false}
    />
  );
};

export default ActiveArticleDataGrid;
