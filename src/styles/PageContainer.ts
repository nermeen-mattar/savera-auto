import styled from 'styled-components';
import { theme } from '../theme';

export const PageContainer = styled.article`
    margin: 0 auto;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 0 auto;
    padding: ${theme.spacing.xlarge};

    @media (max-width: ${theme.breakpoints.mobile}) {
        padding: 0;
    }
`;
