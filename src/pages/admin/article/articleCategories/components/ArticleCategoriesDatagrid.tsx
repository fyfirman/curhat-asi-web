import { DataGrid, GridCellParams, GridColDef } from '@material-ui/data-grid';
import ActionButton from '@components/ActionButton';
import { useState } from 'react';
import PromptDialog from '@components/PromptDialog';
import CategoryDialog from './CategoryDialog';

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

interface ActionButtonsProps {
  onDelete: ()=> any;
  onEdit: ()=> any
}

const ActionButtons = ({ onDelete, onEdit }: ActionButtonsProps) => (_params: GridCellParams) => (
  <div style={{ display: 'flex', flex: 1, justifyContent: 'space-around' }}>
    <ActionButton label="Edit" onClick={onEdit} noLink />
    <ActionButton label="Hapus" onClick={onDelete} noLink />
  </div>
);

const columns = (props: ActionButtonsProps): GridColDef[] => ([
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
    renderCell: ActionButtons(props),
  },
]);

const ArticleCategoriesDataGrid = () => {
  const [openEditCategory, setOpenEditCategory] = useState(false);
  const [openDeleteCategory, setOpenDeleteCategory] = useState(false);

  const handleDelete = () => {
    setOpenDeleteCategory(true);
  };

  const handleEdit = () => {
    setOpenEditCategory(true);
  };

  return (
    <>
      <DataGrid
        autoHeight
        rows={mockRows}
        columns={columns({ onDelete: handleDelete, onEdit: handleEdit })}
        pageSize={20}
        checkboxSelection={false}
      />
      <CategoryDialog
        title="Edit kategori"
        open={openEditCategory}
        handleClose={() => { setOpenEditCategory(false); }}
      />
      <PromptDialog
        open={openDeleteCategory}
        handleClose={() => { setOpenDeleteCategory(false); }}
        title="Anda yakin untuk menghapus kategori?"
        content="Artikel dengan kategori tersebut akan kehilangan kategori."
      />
    </>
  );
};

export default ArticleCategoriesDataGrid;
