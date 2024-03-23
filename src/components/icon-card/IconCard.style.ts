import styled from 'styled-components';
import { theme } from '../../theme';

export const Card = styled.section`
    display: flex;
    flex-direction: column;
    font-weight: bold;
`;

export const CardIconWrapper = styled.section`
    background: ${theme.colors.lightGrey};
    border-radius: ${theme.borderRadius.small};
    width: 160px;
    height: 75px;
    text-align: center;
`;

export const StyledIcon = styled.section`
    margin: auto;
    width: 50px;
    margin-top: -12px;
    fill: ${theme.colors.secondary};
`;
