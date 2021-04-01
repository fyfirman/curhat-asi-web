import React, { useEffect } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { useDispatch } from 'react-redux';
import UserGroup from '@constants/UserGroupEnum';
import { requestUserList } from '@redux/actions/userListActions';
import { columns, rows } from '../mock.data';

interface UserDataGridProps{
  type: UserGroup;
}

const UserDataGrid = ({ type }: UserDataGridProps) => {
  // eslint-disable-next-line no-underscore-dangle
  const dispatch = useDispatch();

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
