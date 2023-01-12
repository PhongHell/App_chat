import styled, { css } from 'styled-components';
import { Typography, Box, ControlledTextField } from '@/ui-components';

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
    gap: 5px;
    width: 500px;
  `}
`;

export const Title = styled(Typography)`
  ${({ theme: { spacing, palette } }) => css`
    padding: ${spacing(2)}px;
    color: ${palette.primary.dark};
  `}
`;

export const LoginField = styled(ControlledTextField)`
  width: 100%;
  padding: 5px;
  display: none;
`;

export const Logo = styled.img`
    height: 60px;
    width: 100%;
`;
