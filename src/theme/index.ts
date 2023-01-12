import { createTheme, Theme } from '@mui/material/styles';
import merge from 'lodash.merge';
import defaultTheme from './theme.default';
import { generateMediaQueries } from './utils';

type ThemeValues = Theme & {
  mediaQueries: Record<string, unknown>;
};

const theme = () => {
  const themeValues: ThemeValues = {
    ...createTheme(merge(defaultTheme)),
    mediaQueries: {},
  }; /* pass your theme as merge parameters. ex merge(defaultTheme, yourTheme) */

  themeValues.mediaQueries = generateMediaQueries(
    themeValues.breakpoints.values,
  );

  return themeValues;
};

export default theme;
