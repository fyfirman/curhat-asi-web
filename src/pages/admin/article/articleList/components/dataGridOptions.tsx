import { GridCellParams, GridColDef } from '@material-ui/data-grid';
import Button from '@components/LinkButton';

const ActionButton = (params: GridCellParams) => (
  <>
    <Button
      to={`/admin/consultation/${params.getValue('id')}`}
      variant="contained"
      color="secondary"
      size="small"
      disableElevation
    >
      Lihat
    </Button>
    <Button
      to={`/admin/consultation/${params.getValue('id')}`}
      variant="contained"
      color="secondary"
      size="small"
      disableElevation
    >
      Hapus
    </Button>
  </>
);

export const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', hide: true },
  { field: 'no', headerName: 'No.', width: 75 },
  { field: 'title', headerName: 'Judul', flex: 1 },
  { field: 'createdAt', headerName: 'Dibuat pada', width: 200 },
  {
    field: 'action',
    headerName: 'Aksi',
    sortable: false,
    filterable: false,
    disableColumnMenu: true,
    renderCell: ActionButton,
  },
];

export interface IRowConsultation {
  id: string;
  no: number;
  title: string;
  createdAt: string;
}

export const mockRows: IRowConsultation[] = [
  {
    id: '1',
    no: 1,
    title: 'Cara menyusui dengan benar',
    createdAt: '2021-12-13 11:21:31',
  },
];
