import styled from 'styled-components';
import IconSearch from '../../icons/Search';
import { theme } from '../../theme';

export const SearchContainer = styled.div<{ suggestions: string[] }>`
    position: relative;
    border: 1px solid
        ${(props) =>
            props.suggestions.length
                ? theme.colors.secondary
                : theme.colors.grey};
    padding: 5px 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: ${theme.borderRadius.large};
`;

export const SearchInputWrapper = styled.div`
    display: flex;
    align-items: center;
    position: relative;
`;

export const Input = styled.input<{ suggestions: string[] }>`
    padding: 10px 35px;
    margin: 8px;
    border: 0;
    border-bottom: 1px solid
        ${(props) =>
            props.suggestions.length ? theme.colors.grey : 'transparent'};
    outline: none;
    width: 100%;
`;

export const StyledSearchIcon = styled(IconSearch)`
    position: absolute;
    left: 8px;
    cursor: pointer;
    fill: ${theme.colors.lightBlue};
`;

export const SuggestionsContainer = styled.div`
    width: 100%;
`;
