import styled from 'styled-components';
import IconChevronDown from '../icons/ChevronDown';
import ArrowRightIcon from '../icons/arrow-right';
import { theme } from '../theme';

export const ChevronIcon = styled(IconChevronDown)<{ open: boolean }>`
    fill: ${theme.colors.grey};
    transition: transform 0.3s ease;
    transform: ${({ open }) => (open ? 'rotate(180deg)' : 'rotate(0)')};
`;

export const ArrowRightWrapper = styled.section`
    flex: 1;
    text-align: right;

    @media (max-width: ${theme.breakpoints.mobile}) {
        flex: 1;
        text-align: right;
    }
`;

export const ArrowRight = styled(ArrowRightIcon)`
    display: none;
    fill: ${theme.colors.white};
    stroke: ${theme.colors.white};
    @media (max-width: ${theme.breakpoints.mobile}) {
        display: block;
        background: ${theme.colors.secondary};
        border-radius: 50%;
        margin-left: auto;
    }
`;
