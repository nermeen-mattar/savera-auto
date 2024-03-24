import styled from 'styled-components';
import { theme } from '../../theme';

export const ContentSection = styled.section`
    padding-top: ${theme.spacing.xlarge};
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: ${theme.spacing.large};
`;

export const ImageContainer = styled.figure`
    margin: 0;
    max-height: 400px;
    max-width: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    border-radius: ${theme.borderRadius.small};

    @media (max-width: ${theme.breakpoints.mobile}) {
        border-radius: 0;
        max-width: unset;
        width: 100%;

        img {
            width: 100%;
        }
    }
`;

export const InfoContainer = styled.section`
    padding: ${theme.spacing.small};

    @media (max-width: ${theme.breakpoints.mobile}) {
        flex: 1;
    }
`;

export const InfoSection = styled.dl`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: ${theme.spacing.large};
`;

export const Label = styled.dt`
    font-weight: bold;
`;

export const Value = styled.dd`
    margin: 0;
`;
