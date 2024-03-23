import styled from 'styled-components';
import { theme } from '../theme';

export const StyledContainerSection = styled.section`
    @media (max-width: ${theme.breakpoints.mobile}) {
        padding: ${theme.spacing.small};
    }
`;
