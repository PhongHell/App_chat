import styled, { css } from 'styled-components';
import { InputLabel } from '@/ui-components';

const StyledInputLabel = styled(InputLabel)(() => ({
  '& .MuiInputLabel-asterisk': {
    color: 'red !important',
  },
}));

const ControlInputLabel = (props: any) => {
  const { ...other } = props;
  return <StyledInputLabel {...other}>{props.children}</StyledInputLabel>;
};

export const LabelApp = styled(ControlInputLabel)`
  ${({ theme: { palette, spacing } }) => css`
    &&& {
      color: ${palette.common.black};
      font-weight: bold;
      font-size: ${spacing(1.75)};
      padding-bottom: ${spacing(1)};
    }
  `}
`;
