import styled, { css } from 'styled-components';
import { theme } from '../../theme';

const buttonStyles = css`
    padding: 12px 36px;
    border-radius: 20px;
    border: none;
    cursor: pointer;
    font-weight: bold;
`;

export const LightButton = styled.button`
    ${buttonStyles}
    background-color: white;
    width: 100%;
`;

export const DarkButton = styled.button`
    ${buttonStyles}
    background-color: ${theme.colors.secondary};
    color: white;
`;

export const TextButton = styled.button`
    background-color: transparent;
    border: none;
    color: white;
    font-size: 16px;
    margin-left: 10px;
    cursor: pointer;
`;
