import styled from 'styled-components';
import { theme } from '../../theme';

export const Card = styled.section`
    display: flex;
    flex-direction: column;
`;

export const CardIconWrapper = styled.section`
    background: ${theme.colors.lightGrey};
    border-radius: ${theme.borderRadius.small};
    width: 160px;
    height: 75px;
    text-align: center;
`;

export const CardIcon = styled.img`
    width: 60px;
    margin-top: -15px;
`;
