import React, { PropsWithChildren } from 'react';

import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import theme from '@/theme';

const ThemeProvider = ({ children }: PropsWithChildren) => {
  const themeValues = theme();

  return (
    <>
      <CssBaseline />
      <StyledThemeProvider theme={themeValues}>
        <MuiThemeProvider theme={themeValues}>{children}</MuiThemeProvider>
      </StyledThemeProvider>
    </>
  );
};

export default ThemeProvider;
