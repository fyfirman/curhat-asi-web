import { MenuItem } from '@material-ui/core';
import { Select } from 'formik-material-ui';
import Field from './CustomField';

const categoryMenu : { label: string, value: string }[] = [
  {
    label: 'ASI',
    value: 'asi',
  },
  {
    label: 'Menyusui',
    value: 'menyusui',
  },
];

const CategoryField = () => {
  const renderUserGroupMenu = () => categoryMenu.map((menu, index) => (
    <MenuItem key={index} value={menu.value}>{menu.label}</MenuItem>));

  return (
    <Field
      component={Select}
      name="category"
      label="Kategori"
      autoFocus
    >
      {renderUserGroupMenu()}
    </Field>
  );
};

export default CategoryField;
