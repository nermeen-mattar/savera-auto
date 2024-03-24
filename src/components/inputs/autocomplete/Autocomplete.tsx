import React, { useCallback, useState } from 'react';
import { OptionItem, OptionsList } from '../../../styles/list.styles';
import { simpleFuzzySearch } from '../../../utils/fuzzy-search';
import {
    AutocompleteWrapper,
    Input,
    SearchContainer,
    StyledSearchIcon,
    SuggestionsContainer,
} from './Autocomplete.style';

interface Props {
    onValueChange: (value: string) => void;
    searchItems: string[];
    placeholderLabel: string;
}

function Autocomplete({ onValueChange, searchItems, placeholderLabel }: Props) {
    const [value, setValue] = useState('');
    const [suggestions, setSuggestions] = useState<string[]>([]);

    const handleInputChange = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => {
            const newValue = event.target.value;
            setValue(newValue);
            if (!newValue.trim()) {
                onValueChange('');
                setSuggestions([]);
                return;
            }

            const filteredSuggestions = simpleFuzzySearch(
                newValue,
                searchItems,
            );
            setSuggestions(filteredSuggestions);
        },
        [searchItems, onValueChange],
    );

    const handleSuggestionSelection = useCallback(
        (selectedSuggestion: string) => {
            onValueChange(selectedSuggestion);
            setValue(selectedSuggestion);
            setSuggestions([]);
        },
        [onValueChange],
    );

    const handleOptionKeyDown = useCallback(
        (event: React.KeyboardEvent<HTMLLIElement>, suggestion: string) => {
            if (event.key === 'Enter' || event.key === ' ') {
                handleSuggestionSelection(suggestion);
            }
        },
        [handleSuggestionSelection],
    );

    return (
        <SearchContainer suggestions={suggestions}>
            <AutocompleteWrapper
                role="combobox"
                aria-expanded={suggestions.length > 0}
            >
                <Input
                    suggestions={suggestions}
                    type="text"
                    placeholder={placeholderLabel}
                    value={value}
                    onChange={handleInputChange}
                    aria-autocomplete="list"
                    aria-controls="suggestionsList"
                    aria-activedescendant={
                        suggestions.length > 0 ? suggestions[0] : undefined
                    }
                />
                <StyledSearchIcon />
            </AutocompleteWrapper>
            {suggestions.length > 0 && (
                <SuggestionsContainer id="suggestionsList" role="listbox">
                    <OptionsList>
                        {suggestions.map((suggestion) => (
                            <OptionItem
                                tabIndex={0}
                                key={suggestion}
                                role="option"
                                aria-selected={value === suggestion}
                                onClick={() =>
                                    handleSuggestionSelection(suggestion)
                                }
                                onKeyDown={(event) =>
                                    handleOptionKeyDown(event, suggestion)
                                }
                            >
                                {suggestion}
                            </OptionItem>
                        ))}
                    </OptionsList>
                </SuggestionsContainer>
            )}
        </SearchContainer>
    );
}

export default Autocomplete;
