import React from 'react';
import { Autocomplete, AutocompleteRenderInputParams } from 'formik-material-ui-lab';
import { Field, FieldAttributes } from 'formik';
import { styled, TextField } from '@material-ui/core';

interface CustomnAutocompleteProps extends FieldAttributes<any>{
  label: string;
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
