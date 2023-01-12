import React from 'react';
import { TextField, TextFieldProps } from '@mui/material';
import { useController, UseControllerProps } from 'react-hook-form';

type ControlledTextFieldProps = UseControllerProps & {
  // eslint-disable-next-line react/require-default-props
  textFieldProps?: TextFieldProps;
};

const ControlledTextField = ({
  control,
  name = '',
  rules,
  textFieldProps = {},
}: ControlledTextFieldProps) => {
  const { field } = useController({
    name,
    control,
    rules,
  });

  return <TextField {...textFieldProps} {...field} />;
};

export default ControlledTextField;
