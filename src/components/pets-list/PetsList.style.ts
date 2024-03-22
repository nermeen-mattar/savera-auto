import styled from 'styled-components';
import { theme } from '../../theme';

export const PetsListSection = styled.section`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
    gap: 25px;

    @media (max-width: ${theme.breakpoints.mobile}) {
        grid-template-columns: 1fr;
    }
`;
