import { DataGrid, GridColDef } from '@material-ui/data-grid';

interface IRowArticleRating {
  id: string;
  no: number;
  name: string;
  userGroup: string;
  rating: number;
}

const mockRows: IRowArticleRating[] = [
  {
    id: '1',
    no: 1,
    name: 'Mira Suryani',
    userGroup: 'Ibu',
    rating: 3,
  },
];

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', hide: true },
  { field: 'no', headerName: 'No.', width: 75 },
  { field: 'name', headerName: 'Nama', flex: 1 },
  { field: 'userGroup', headerName: 'Tingkatan Pengguna', width: 200 },
  { field: 'rating', headerName: 'Nilai', width: 128 },
];

const ArticleRatingDataGrid = () => {
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

export default ArticleRatingDataGrid;
