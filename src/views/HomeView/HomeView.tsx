import React from 'react';
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import { useTheme, useMediaQuery } from '@mui/material';
import {
  Grid,
  Container,
  ControlledTextField,
  Typography,
  Button,
} from '@/ui-components';
import { Wrapper, Title, StyledForm } from './HomeView.styles';
import { RootState } from '@/store/store';
import { changeCount } from '@/store';

type FieldValues = {
  quantity: number;
};

const HomeView = () => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));

  const dispatch = useDispatch();
  const count = useSelector((state: RootState) => state.counter.count);

  const { handleSubmit, control } = useForm<FieldValues>({
    mode: 'onChange',
    defaultValues: {
      quantity: 0,
    },
  });

  const onChangeCount = ({ quantity }: FieldValues) => {
    dispatch(changeCount({ quantity: Number(quantity) }));
  };

  return (
    <Wrapper>
      <Container maxWidth="lg">
        <Grid container>
          <Grid item xs={12}>
            <Title variant="h3" pb={isSmall ? 4 : 6} textAlign="center">
              Welcome Mui + vite
            </Title>
            <Typography mb={6}>Count : {count}</Typography>
          </Grid>
          <Grid item xs={12}>
            <StyledForm onSubmit={handleSubmit(onChangeCount)}>
              <ControlledTextField
                name="quantity"
                textFieldProps={{ label: 'Quantity' }}
                control={control}
              />
              <Button type="submit" variant="contained">
                Change count
              </Button>
            </StyledForm>
          </Grid>
        </Grid>
      </Container>
    </Wrapper>
  );
};

export default HomeView;
