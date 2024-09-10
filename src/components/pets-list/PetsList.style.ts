import styled from 'styled-components';
import { theme } from '../../theme';

export const PetsListSection = styled.section`
    max-height: 330px;
    overflow: auto;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
    gap: ${theme.spacing.large};

    @media (max-width: ${theme.breakpoints.mobile}) {
        grid-template-columns: 1fr;
    }
`;
