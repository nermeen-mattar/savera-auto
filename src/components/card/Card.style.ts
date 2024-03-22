import styled from 'styled-components';
import { DarkButton } from '../../styles/Button.styles';
import { theme } from '../../theme';

export const CardWrapper = styled.article`
    display: flex;
    flex-direction: column;
    border-radius: ${theme.borderRadius.small};
    height: 300px;

    @media (max-width: ${theme.breakpoints.mobile}) {
        flex-direction: row;
        align-items: center;
        height: auto;
    }
`;

export const Avatar = styled.div<{ img: string }>`
    border-radius: ${theme.borderRadius.small};
    height: 100%;
    background-image: url(${(props) => props.img});
    background-size: cover;
    background-position: center;

    @media (max-width: ${theme.breakpoints.mobile}) {
        width: 130px;
        aspect-ratio: 1.3;
    }
`;

export const Content = styled.div`
    align-self: start;
    @media (max-width: ${theme.breakpoints.mobile}) {
        padding-inline-start: ${theme.spacing.small};
        align-self: auto;
    }
`;

export const Name = styled.p`
    font-weight: bold;
    margin: ${theme.spacing.small} 0;
`;

export const Button = styled.button`
    ${DarkButton}
    @media (max-width: ${theme.breakpoints.mobile}) {
        display: none;
    }
`;
