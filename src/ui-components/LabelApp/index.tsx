import styled, { css } from 'styled-components';
import { Typography } from '@/ui-components';

export const LabelApp = styled(Typography)`
  ${({ theme: { spacing } }) => css`
    &&& {
      font-weight: bold;
      font-size: ${spacing(1.75)};
    }
  `}
`;
