import UserGroup from '@constants/UserGroupEnum';
import { $enum } from 'ts-enum-util';
import { CheckboxWithLabel } from 'formik-material-ui';
import UserGroupLabel from '@constants/UserGroupLabel';
import { Field } from 'formik';

const AccessByField = () => {
  const renderCheckBox = () => $enum(UserGroup).map((userGroup) => (
    <Field
      key={userGroup}
      component={CheckboxWithLabel}
      type="checkbox"
      name={`checked-${userGroup}`}
      Label={{ label: UserGroupLabel[userGroup] }}
    />
  ));

  return (
    <>
      <span>
        Dapat dilihat oleh
      </span>
      <br />
      { renderCheckBox() }
    </>
  );
};

export default AccessByField;
