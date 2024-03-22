import styled from 'styled-components';
import { theme } from '../theme';

export const OptionsList = styled.ul`
    list-style-type: none;
    padding: 0;
    margin: 0;
`;

export const OptionItem = styled.li`
    padding: 8px 16px;
    cursor: pointer;
    &:hover {
        background-color: ${theme.colors.lightGrey};
    }
`;
