import styled, { css } from 'styled-components';
import { Typography, Box } from '@/ui-components';

export const Wrapper = styled(Box)`
  ${({ theme: { spacing, mediaQueries } }) => css`
    padding: ${spacing(2)}px;

    @media ${mediaQueries.lg} {
      padding: ${spacing(4)}px;
    }
  `}
`;

export const StyledForm = styled.form`
  ${({ theme: { spacing } }) => css`
    padding: ${spacing(2)}px;
    display: flex;
    gap: 5px;
  `}
`;

export const Title = styled(Typography)`
  ${({ theme: { spacing, palette } }) => css`
    padding: ${spacing(2)}px;
    color: ${palette.primary.dark};
  `}
`;
