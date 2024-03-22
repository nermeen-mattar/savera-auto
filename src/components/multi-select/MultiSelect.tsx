import { useCallback, useMemo, useState } from 'react';
import { ChevronIcon } from '../../styles/Icon.styles';
import { OptionItem } from '../../styles/list.styles';
import {
    OptionCheckbox,
    OptionsContainer,
    OptionsDropdown,
    SelectedOptions,
} from './MultiSelect.style';

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
        <section>
            <SelectedOptions open={isOpen} onClick={toggleDropdown}>
                <label>{selectedOptionsLabel}</label>
                <ChevronIcon open={isOpen} />
            </SelectedOptions>
            {isOpen && (
                <OptionsContainer>
                    <OptionsDropdown>
                        {options.map((option) => (
                            <OptionItem
                                key={option}
                                onClick={() => handleOptionClick(option)}
                            >
                                <OptionCheckbox
                                    type="checkbox"
                                    checked={selectedOptions.includes(option)}
                                    readOnly
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
