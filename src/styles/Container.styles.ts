import styled from 'styled-components';
import { theme } from '../theme';

export const StyledContainerSection = styled.section`
    @media (max-width: 480px) {
        padding: ${theme.spacing.small};
    }
`;
