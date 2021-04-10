import { useEffect, useMemo } from 'react';
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
  const dispatch = useDispatch();

  const users: IUser[] = useSelector(
    ({ userList }: RootState) => {
      const userListState = {
        [UserGroup.Mommies]: userList.mommies.payload.data,
        [UserGroup.Cadre]: userList.cadres.payload.data,
        [UserGroup.Midwife]: userList.midwifes.payload.data,
        [UserGroup.Conselor]: userList.conselors.payload.data,
        [UserGroup.DoctorGeneral]: userList.doctorGenerals.payload.data,
        [UserGroup.DoctorSpecialist]: userList.doctorSpecialists.payload.data,
        [UserGroup.Administrator]: userList.administrators.payload.data,
      };
      return userListState[type];
    },
  );

  const rows: IUserListRow[] = useMemo(
    () => users.map((user: IMoms): IUserListRow => ({
      id: user.id,
      age: user.profile?.age || 0,
      domicile: user.profile?.domicile || 'Belum mengisi profile',
      name: user.fullName || 'Belum mengisi profile',
      phoneNumber: user.username,
      registrationDate: user.createdAt,
    })),
    [users],
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
