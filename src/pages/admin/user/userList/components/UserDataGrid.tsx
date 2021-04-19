import { useEffect, useMemo } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { useDispatch, useSelector } from 'react-redux';
import UserGroup from '@constants/UserGroupEnum';
import { requestUserList } from '@redux/actions/userListActions';
import { RootState } from '@redux/reducers';
import CustomLoadingOverlay from '@components/CustomLoadingOverlay';
import { columns, IUserListRow } from './dataGridOptions';

interface UserDataGridProps {
  type: UserGroup;
}

const UserDataGrid = ({ type }: UserDataGridProps) => {
  const dispatch = useDispatch();

  const [users, isLoading]: [IUser[], boolean] = useSelector(({ userList }: RootState) => {
    const userListState = {
      [UserGroup.Mommies]: userList.mommies,
      [UserGroup.Cadre]: userList.cadres,
      [UserGroup.Midwife]: userList.midwifes,
      [UserGroup.Conselor]: userList.conselors,
      [UserGroup.DoctorGeneral]: userList.doctorGenerals,
      [UserGroup.DoctorSpecialist]: userList.doctorSpecialists,
      [UserGroup.Administrator]: userList.administrators,
    };
    return [userListState[type].payload.data, userListState[type].isLoading];
  });

  const rows: IUserListRow[] = useMemo(
    () =>
      users.map(
        (user: IMoms, index): IUserListRow => ({
          id: user.id,
          no: index + 1,
          age: user.profile?.age || 0,
          domicile: user.profile?.domicile || 'Belum mengisi profile',
          name: user.fullName || 'Belum mengisi profile',
          phoneNumber: user.username,
          registrationDate: user.createdAt,
        }),
      ),
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
      loading={isLoading}
      components={{
        LoadingOverlay: CustomLoadingOverlay,
      }}
    />
  );
};

export default UserDataGrid;
