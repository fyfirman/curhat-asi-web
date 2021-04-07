import React from 'react';
import UserGroup from '@constants/UserGroupEnum';
import { Select } from 'formik-material-ui';
import { MenuItem } from '@material-ui/core';
import { FieldAttributes } from 'formik';
import Field from './CustomField';

const userGroupMenu : IUserGroup[] = [
  {
    id: UserGroup.Cadre,
    name: 'Kader',
    level: 0,
  },
  {
    id: UserGroup.Midwife,
    name: 'Bidan',
    level: 0,
  },
  {
    id: UserGroup.Conselor,
    name: 'Konselor',
    level: 0,
  },
  {
    id: UserGroup.DoctorGeneral,
    name: 'Dokter Umum',
    level: 0,
  },
  {
    id: UserGroup.DoctorSpecialist,
    name: 'Dokter Spesialis',
    level: 0,
  },
  {
    id: UserGroup.Administrator,
    name: 'Administrator',
    level: 0,
  },
];

const UserGroupField = (props: FieldAttributes<any>) => {
  const renderUserGroupMenu = () => userGroupMenu.map((menu) => (
    <MenuItem key={menu.id} value={menu.id}>{menu.name}</MenuItem>));

  return (
    <Field
      component={Select}
      autoFocus
      {...props}
    >
      {renderUserGroupMenu()}
    </Field>
  );
};

export default UserGroupField;
