import { useCallback, useMemo, useState } from 'react';
import { ChevronIcon } from '../../../styles/Icon.styles';
import { OptionItem } from '../../../styles/list.styles';
import {
    OptionsContainer,
    OptionsDropdown,
    SelectedOptions,
} from '../dropdown/Dropdown.style';
import { OptionCheckbox } from './MultiSelect.style';

interface MultiSelectProps {
    options: string[];
    onSelect: (selectedOptions: string[]) => void;
    placeholderLabel: string;
}

function MultiSelect({
    options,
    onSelect,
    placeholderLabel,
}: MultiSelectProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

    const toggleDropdown = useCallback(
        () => setIsOpen((prevIsOpen) => !prevIsOpen),
        [],
    );

    const handleOptionClick = useCallback(
        (option: string) => {
            const newSelectedOptions = selectedOptions.includes(option)
                ? selectedOptions.filter((item) => item !== option)
                : [...selectedOptions, option];
            setSelectedOptions(newSelectedOptions);
            onSelect(newSelectedOptions);
        },
        [onSelect, selectedOptions],
    );

    const selectedOptionsLabel = useMemo(
        () =>
            selectedOptions.length === 0
                ? placeholderLabel
                : selectedOptions.join(', '),
        [selectedOptions, placeholderLabel],
    );

    return (
        <section aria-labelledby="multiSelectLabel">
            <SelectedOptions
                open={isOpen}
                onClick={toggleDropdown}
                aria-haspopup="listbox"
                aria-expanded={isOpen}
            >
                <label id="multiSelectLabel">{selectedOptionsLabel}</label>
                <ChevronIcon
                    open={isOpen}
                    aria-label={isOpen ? 'Collapse options' : 'Expand options'}
                />
            </SelectedOptions>
            {isOpen && (
                <OptionsContainer>
                    <OptionsDropdown role="listbox" aria-multiselectable="true">
                        {options.map((option) => (
                            <OptionItem
                                key={option}
                                onClick={() => handleOptionClick(option)}
                                role="option"
                                aria-selected={selectedOptions.includes(option)}
                            >
                                <OptionCheckbox
                                    type="checkbox"
                                    checked={selectedOptions.includes(option)}
                                    readOnly
                                    aria-hidden="true"
                                />
                                {option}
                            </OptionItem>
                        ))}
                    </OptionsDropdown>
                </OptionsContainer>
            )}
        </section>
    );
}

export default MultiSelect;
