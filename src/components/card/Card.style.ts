import styled from 'styled-components';
import ArrowRightIcon from '../../icons/arrow-right';
import { DarkButton } from '../../styles/Button.styles';
import { theme } from '../../theme';

export const CardWrapper = styled.article`
    display: flex;
    flex-direction: column;
    border-radius: 10px;

    @media (max-width: 480px) {
        flex-direction: row;
        align-items: center;
    }
`;

export const Avatar = styled.img`
    border-radius: 10px;
    max-width: 100%;
    height: auto;

    @media (max-width: 480px) {
        max-width: 80px;
        max-height: 80px;
        margin-right: 20px;
    }
`;

export const Content = styled.div`
    align-self: start;

    @media (max-width: 480px) {
        align-self: auto;
    }
`;

export const Name = styled.h4`
    font-weight: 500;
`;

export const Button = styled.button`
    ${DarkButton}
    @media (max-width: 480px) {
        display: none;
    }
`;
