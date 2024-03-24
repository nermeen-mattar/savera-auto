import styled from 'styled-components';
import { theme } from '../theme';

export const ErrorMessage = styled.section`
    font-size: 24px;
    color: ${theme.colors.red};
    text-align: center;
    padding: ${theme.spacing.large};
`;
