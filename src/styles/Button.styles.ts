import styled, { css } from 'styled-components';
import { theme } from '../theme';

const buttonStyles = css`
    padding: ${theme.spacing.small} ${theme.spacing.medium};
    border-radius: ${theme.borderRadius.large};
    border: none;
    cursor: pointer;
    font-weight: bold;
    transition: background-color 0.3s ease;
    &:hover {
        background-color: ${theme.colors.lightGrey};
        color: ${theme.colors.darkGrey};
    }
`;

export const LightButton = styled.button`
    ${buttonStyles}
    background-color: ${theme.colors.white};
`;

export const DarkButton = css`
    ${buttonStyles}
    background-color: ${theme.colors.secondary};
    color: ${theme.colors.white};
`;

export const TextButton = styled.button`
    background-color: transparent;
    border: none;
    color: ${theme.colors.white};
    font-size: ${theme.typography.fontSize};
    margin-left: 10px;
    cursor: pointer;
`;
