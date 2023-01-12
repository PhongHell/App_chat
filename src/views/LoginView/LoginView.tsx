import { useForm } from 'react-hook-form';
import { useTheme, useMediaQuery } from '@mui/material';
import { LabelApp, FlexBox } from '@/ui-components';
import { WrapperLogin, StyledForm, LoginField, Logo } from './LoginView.styles';
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
    <WrapperLogin>
      <Logo src={LOGO_IMAGE} alt="logo" />
      <StyledForm onSubmit={handleSubmit(onLogin)}>
        <FlexBox>
          <LabelApp required>Username</LabelApp>
          <LoginField
            name="username"
            textFieldProps={{ label: 'Username' }}
            control={control}
          />
        </FlexBox>
        <FlexBox>
          <LabelApp required>Username</LabelApp>
          <LoginField
            name="password"
            textFieldProps={{ label: 'Password' }}
            control={control}
          />
        </FlexBox>
      </StyledForm>
    </WrapperLogin>
  );
};

export default LoginView;
