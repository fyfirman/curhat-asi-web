import UserGroup from '@constants/UserGroupEnum';
import { $enum } from 'ts-enum-util';
import { CheckboxWithLabel } from 'formik-material-ui';
import UserGroupLabel from '@constants/UserGroupLabel';
import CustomField from './CustomField';

const AccessByField = () => {
  const renderCheckBox = () => $enum(UserGroup).map((userGroup) => (
    <CustomField
      key={userGroup}
      component={CheckboxWithLabel}
      type="checkbox"
      name="checked"
      Label={{ label: UserGroupLabel[userGroup] }}
    />
  ));

  return (
    <>
      { renderCheckBox() }
    </>
  );
};

export default AccessByField;
