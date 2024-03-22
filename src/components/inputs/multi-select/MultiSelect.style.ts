import styled from 'styled-components';
import { theme } from '../../../theme';

export const OptionCheckbox = styled.input.attrs({ type: 'checkbox' })`
    margin-right: ${theme.spacing.small};
`;
