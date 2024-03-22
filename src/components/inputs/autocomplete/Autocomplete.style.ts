import styled from 'styled-components';
import IconSearch from '../../../icons/Search';
import { theme } from '../../../theme';

const hasSuggestions = (suggestions: string[]) => suggestions.length > 0;

const borderStyle = (suggestions: string[]) => `
    border: 1px solid ${hasSuggestions(suggestions) ? theme.colors.secondary : theme.colors.grey};
`;

export const SearchContainer = styled.section<{ suggestions: string[] }>`
    position: relative;
    ${(props) => borderStyle(props.suggestions)}
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: ${theme.borderRadius.large};
`;

export const AutocompleteWrapper = styled.section`
    display: flex;
    align-items: center;
    position: relative;
`;

export const Input = styled.input<{ suggestions: string[] }>`
    padding: ${theme.spacing.small} ${theme.spacing.large};
    margin-inline-start: ${theme.spacing.small};
    border-radius: ${theme.borderRadius.large};
    border: 0;
    border-bottom: 1px solid
        ${(props) =>
            hasSuggestions(props.suggestions)
                ? theme.colors.grey
                : 'transparent'};
    outline: none;
    width: 100%;
    border-bottom-left-radius: ${(props) =>
        hasSuggestions(props.suggestions) ? 0 : theme.borderRadius.large};
    border-bottom-right-radius: ${(props) =>
        hasSuggestions(props.suggestions) ? 0 : theme.borderRadius.large};
`;

export const StyledSearchIcon = styled(IconSearch)`
    position: absolute;
    left: ${theme.spacing.small};
    cursor: pointer;
    fill: ${theme.colors.lightBlue};
`;

export const SuggestionsContainer = styled.section`
    width: 100%;
`;
