import { DataGrid, GridCellParams, GridColDef } from '@material-ui/data-grid';
import ActionButton from '@components/ActionButton';

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

const ActionButtons = (params: GridCellParams) => (
  <div style={{ display: 'flex', flex: 1, justifyContent: 'space-around' }}>
    <ActionButton label="Lihat" to={`/admin/consultation/${params.getValue('id')}`} />
    <ActionButton label="Hapus" to={`/admin/consultation/${params.getValue('id')}`} />
  </div>
);

const columns: GridColDef[] = [
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
    renderCell: ActionButtons,
  },
];

const ArticleCategoriesDataGrid = () => {
  return (
    <DataGrid
      autoHeight
      rows={mockRows}
      columns={columns}
      pageSize={20}
      checkboxSelection={false}
    />
  );
};

export default ArticleCategoriesDataGrid;
