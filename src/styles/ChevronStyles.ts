import styled from 'styled-components';
import IconChevronDown from '../icons/ChevronDown';
import { theme } from '../theme';

export const ChevronIcon = styled(IconChevronDown)<{ open: boolean }>`
    fill: ${theme.colors.grey};
    transition: transform 0.3s ease;
    transform: ${({ open }) => (open ? 'rotate(180deg)' : 'rotate(0)')};
`;
