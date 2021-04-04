/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { Autocomplete, AutocompleteRenderInputParams } from 'formik-material-ui-lab';
import { Field, FieldAttributes } from 'formik';
import {
  styled, TextField, TextFieldProps, Theme,
} from '@material-ui/core';

const exampleOptions: IProvince[] = [
  { name: 'The Shawshank Redemption', id: '1994' },
  { name: 'The Shawshank Redemption', id: '1994' },
  { name: 'The Shawshank Redemption', id: '1994' },
  { name: 'The Shawshank Redemption', id: '1994' },
  { name: 'The Shawshank Redemption', id: '1994' },
  { name: 'The Shawshank Redemption', id: '1994' },
  { name: 'The Shawshank Redemption', id: '1994' },
  { name: 'The Shawshank Redemption', id: '1994' },
];

interface CustomnAutocompleteProps extends FieldAttributes<any>{
  label: string
}

const AutocompleteTextField = styled(TextField)(
  ({ theme }) => ({
    marginBottom: theme.spacing(3),
  }),
);

const CustomAutocomplete = (props: CustomnAutocompleteProps) => {
  const { label, ...rest } = props;

  return (
    <Field
      component={Autocomplete}
      options={exampleOptions}
      renderInput={(params: AutocompleteRenderInputParams) => {
        const { inputProps } = params;
        Object.assign(inputProps, { autoComplete: 'new-password' });
        return (
          <AutocompleteTextField
            {...params}
            inputProps={inputProps}
            label={label}
            variant="standard"
          />
        );
      }}
      {...rest}
    />
  );
};

export default CustomAutocomplete;
