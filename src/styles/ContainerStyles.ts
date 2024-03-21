import styled from 'styled-components';
import { theme } from '../theme';

export const ContainerSection = styled.section`
    @media (max-width: 480px) {
        padding: ${theme.spacing.small};
    }
`;
