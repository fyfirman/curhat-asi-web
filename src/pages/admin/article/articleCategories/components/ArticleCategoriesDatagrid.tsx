import { DataGrid, GridCellParams, GridColDef } from '@material-ui/data-grid';
import ActionButton from '@components/ActionButton';

interface IRowCategories {
  id: string;
  no: number;
  name: string;
}

const mockRows: IRowCategories[] = [
  {
    id: '1',
    no: 1,
    name: 'ASI',
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
  { field: 'name', headerName: 'Judul', flex: 1 },
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
