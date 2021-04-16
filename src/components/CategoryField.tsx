import { FormControl, InputLabel, MenuItem } from '@material-ui/core';
import { Select } from 'formik-material-ui';
import Field from '@components/CustomField';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { requestArticleCategories } from '@redux/actions/articleCategoriesActions';
import { RootState } from '@redux/reducers';

interface CategoryFieldProps {
  label?: string;
  name?: string;
}

const CategoryField = ({ label = 'Kategori', name = 'category' } : CategoryFieldProps) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestArticleCategories());
  }, []);

  const categories : IArticleCategory[] = useSelector(
    (state:RootState) => state.articleCategories.payload.data,
  );

  const renderUserGroupMenu = () => categories.map((category, index) => (
    <MenuItem key={index} value={category.id}>{category.name}</MenuItem>));

  return (
    <FormControl>
      <InputLabel>{label}</InputLabel>
      <Field
        component={Select}
        name={name}
        label={label}
        required={false}
      >
        {renderUserGroupMenu()}
      </Field>
    </FormControl>

  );
};

export default CategoryField;
