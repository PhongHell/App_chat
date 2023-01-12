import styled, { css } from 'styled-components';
import { Box } from '@/ui-components';

export const FlexBox = styled(Box)`
  ${() => css`
    &&& {
      display: flex;
    }
  `}
`;

export const FlexBoxBetween = styled(FlexBox)`
  justify-content: space-between;
`;

export const FlexBoxCenter = styled(FlexBox)`
  justify-content: center;
`;

export const FlexBoxAround = styled(FlexBox)`
  justify-content: space-around;
`;

export const FlexBoxEvenly = styled(FlexBox)`
  justify-content: space-evenly;
`;

export const FlexBoxEnd = styled(FlexBox)`
  justify-content: flex-end;
`;

export const FlexBoxStart = styled(FlexBox)`
  justify-content: flex-start;
`;

export const FlexBoxRight = styled(FlexBox)`
  justify-content: right;
`;

export const FlexBoxLeft = styled(FlexBox)`
  justify-content: left;
`;
