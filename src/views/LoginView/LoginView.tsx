import React from 'react';
import { useForm } from 'react-hook-form';
import { useTheme, useMediaQuery } from '@mui/material';
import {
  Grid,
  Container,
} from '@/ui-components';
import {
  Wrapper,
  Title,
  StyledForm,
  LoginField,
  Logo,
} from './LoginView.styles';

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
            <Logo src="https://upload.wikimedia.org/wikipedia/commons/1/1c/True_Corporation_%28Thailand%29.svg" alt="logo" />
            <Title variant="h3" pb={isSmall ? 4 : 6} textAlign="center">
              PDS IN HOUSE
            </Title>
          </Grid>
          <Grid item xs={12}>
            <StyledForm onSubmit={handleSubmit(onLogin)}>
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
