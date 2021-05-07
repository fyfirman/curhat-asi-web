import { useMemo, useState } from 'react';
import { DataGrid, GridPageChangeParams } from '@material-ui/data-grid';
import UserGroup from '@constants/UserGroupEnum';
import CustomLoadingOverlay from '@components/CustomLoadingOverlay';
import { getUsers } from '@services/UserServices';
import { useQuery } from 'react-query';
import { columns, IUserListRow } from './dataGridOptions';

interface UserDataGridProps {
  type: UserGroup;
}

const UserDataGrid = ({ type }: UserDataGridProps) => {
  const [page, setPage] = useState(1);

  const { isLoading, data } = useQuery(['users', page], () =>
    getUsers({ page, userGroupId: type }),
  );

  const rows: IUserListRow[] = useMemo(
    () =>
      data
        ? data?.payload.data.map(
            (user: IMoms, index): IUserListRow => ({
              id: user.id,
              no: index + 1 + 30 * (page - 1),
              age: user.profile?.age || 0,
              domicile: user.profile?.domicile || 'Belum mengisi profile',
              name: user.fullName || 'Belum mengisi profile',
              phoneNumber: user.username,
              registrationDate: user.createdAt,
            }),
          )
        : [],
    [data],
  );

  const handlePageChange = (params: GridPageChangeParams) => {
    setPage(params.page + 1);
    console.log(params.page + 1);
  };

  return (
    <DataGrid
      autoHeight
      pagination
      rows={rows}
      columns={columns}
      onPageChange={handlePageChange}
      checkboxSelection={false}
      pageSize={30}
      rowCount={data?.payload.total ?? 0}
      loading={isLoading}
      components={{
        LoadingOverlay: CustomLoadingOverlay,
      }}
      paginationMode="server"
    />
  );
};

export default UserDataGrid;
