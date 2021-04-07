import { GridCellParams, GridColDef, GridRowData } from '@material-ui/data-grid';
import Button from '@components/LinkButton';

const ViewButton = (params: GridCellParams) => (
  <Button
    to={`/admin/consultation/${params.getValue('id')}`}
    variant="contained"
    color="secondary"
    size="small"
    disableElevation
  >
    Lihat
  </Button>
);

export const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'openBy', headerName: 'Diminta oleh', width: 200 },
  { field: 'problem', headerName: 'Keluhan', width: 350 },
  {
    field: 'action',
    headerName: 'Aksi',
    sortable: false,
    filterable: false,
    disableColumnMenu: true,
    renderCell: ViewButton,
  },
];

export interface IRowConsultation {
  id: string;
  openBy: string;
  problem: string;
}

export const rows: GridRowData[] = [
  {
    id: 1, lastName: 'Snow', firstName: 'Jon', age: 35,
  },
  {
    id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42,
  },
  {
    id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45,
  },
  {
    id: 4, lastName: 'Stark', firstName: 'Arya', age: 16,
  },
  {
    id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null,
  },
  {
    id: 6, lastName: 'Melisandre', firstName: null, age: 150,
  },
  {
    id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44,
  },
  {
    id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36,
  },
  {
    id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65,
  },
];
