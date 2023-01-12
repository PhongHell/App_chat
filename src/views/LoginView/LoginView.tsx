import React from 'react';
import { useForm } from 'react-hook-form';
import { useTheme, useMediaQuery } from '@mui/material';
import { Grid, Container, LabelApp } from '@/ui-components';
import { Wrapper, StyledForm, LoginField, Logo } from './LoginView.styles';
import { LOGO_IMAGE } from '@/assets';

type FieldValues = {
  username: any;
  password: any;
};

const LoginView = () => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));

  const { handleSubmit, control } = useForm<FieldValues>({
    mode: 'onChange',
    defaultValues: {
      username: '',
    },
  });

  const onLogin = ({ values }: any) => {
    console.log(values);
  };

  return (
    <Wrapper>
      <Container maxWidth="lg">
        <Grid container>
          <Grid item xs={12}>
            <Logo src={LOGO_IMAGE} alt="logo" />
          </Grid>
          <Grid item xs={12}>
            <StyledForm onSubmit={handleSubmit(onLogin)}>
              <LabelApp>Username</LabelApp>
              <LoginField
                name="username"
                textFieldProps={{ label: 'Username' }}
                control={control}
              />
              <LoginField
                name="password"
                textFieldProps={{ label: 'Password' }}
                control={control}
              />
            </StyledForm>
          </Grid>
        </Grid>
      </Container>
    </Wrapper>
  );
};

export default LoginView;
