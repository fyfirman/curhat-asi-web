import React, { useEffect, useMemo } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { useDispatch, useSelector } from 'react-redux';
import UserGroup from '@constants/UserGroupEnum';
import { requestUserList } from '@redux/actions/userListActions';
import { RootState } from '@redux/reducers';
import { columns, IUserListRow } from './dataGridOptions';

interface UserDataGridProps{
  type: UserGroup;
}

const UserDataGrid = ({ type }: UserDataGridProps) => {
  // eslint-disable-next-line no-underscore-dangle
  const dispatch = useDispatch();

  const userList: IUser[] = useSelector((state: RootState) => state.userList.mommies.payload);

  const rows: IUserListRow[] = useMemo(
    () => userList.map((user: IUser): IUserListRow => ({
      id: user.id,
      age: user.profile?.age || 0,
      domicile: user.profile?.domicile || 'Belum mengisi profile',
      name: user.fullName || 'Belum mengisi profile',
      phoneNumber: user.username,
      registrationDate: user.createdAt,
    })),
    [userList],
  );

  useEffect(() => {
    dispatch(requestUserList(type));
  }, []);

  return (
    <DataGrid
      autoHeight
      rows={rows}
      columns={columns}
      pageSize={20}
      checkboxSelection={false}
    />
  );
};

export default UserDataGrid;
