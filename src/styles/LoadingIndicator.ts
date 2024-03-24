import styled from 'styled-components';
import { theme } from '../theme';

export const LoadingIndicator = styled.section`
    text-align: center;
    margin: auto;
    padding: ${theme.spacing.large};
    @keyframes loadingAnimation {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
    &::after {
        content: ' ';
        display: inline-block;
        width: 100px;
        height: 100px;
        border: 4px solid ${theme.colors.lightBlue};
        border-radius: 50%;
        border-top-color: ${theme.colors.grey};
        animation: loadingAnimation 1s infinite linear;
    }
`;
