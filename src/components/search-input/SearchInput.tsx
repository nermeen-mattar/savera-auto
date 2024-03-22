import React, { useCallback, useState } from 'react';
import { OptionItem, OptionsList } from '../../styles/list.styles';
import { simpleFuzzySearch } from '../../utils/fuzzy-search';
import {
    Input,
    SearchContainer,
    SearchInputWrapper,
    StyledSearchIcon,
    SuggestionsContainer,
} from './SearchInput.style';

interface Props {
    onValueChange: (value: string) => void;
    searchItems: string[];
    placeholderLabel: string;
}

function SearchInput({ onValueChange, searchItems, placeholderLabel }: Props) {
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

    return (
        <SearchContainer suggestions={suggestions}>
            <SearchInputWrapper>
                <Input
                    suggestions={suggestions}
                    type="text"
                    placeholder={placeholderLabel}
                    value={value}
                    onChange={handleInputChange}
                />
                <StyledSearchIcon />
            </SearchInputWrapper>
            {suggestions.length > 0 && (
                <SuggestionsContainer>
                    <OptionsList>
                        {suggestions.map((suggestion) => (
                            <OptionItem
                                key={suggestion}
                                onClick={() =>
                                    handleSuggestionSelection(suggestion)
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

export default SearchInput;
