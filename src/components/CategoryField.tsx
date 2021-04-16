import { FormControl, InputLabel, MenuItem } from '@material-ui/core';
import { Select } from 'formik-material-ui';
import Field from '@components/CustomField';

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

interface CategoryFieldProps {
  label?: string;
  name?: string;
}

const CategoryField = ({ label = 'Kategori', name = 'category' } : CategoryFieldProps) => {
  const renderUserGroupMenu = () => categoryMenu.map((menu, index) => (
    <MenuItem key={index} value={menu.value}>{menu.label}</MenuItem>));

  return (
    <FormControl>
      <InputLabel>{label}</InputLabel>
      <Field
        component={Select}
        name={name}
        label={label}
        autoFocus
      >
        {renderUserGroupMenu()}
      </Field>
    </FormControl>

  );
};

export default CategoryField;
