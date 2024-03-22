import { ReactNode, useCallback, useState } from 'react';
import { ChevronIcon } from '../../../styles/Icon.styles';
import {
    OptionsContainer,
    OptionsDropdown,
    SelectedOptions,
} from './Dropdown.style';

interface DropdownProps {
    children: ReactNode;
    placeholderLabel: string;
}

function Dropdown({ children, placeholderLabel }: DropdownProps) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = useCallback(
        () => setIsOpen((prevIsOpen) => !prevIsOpen),
        [],
    );

    return (
        <section aria-labelledby="dropdownLabel">
            <SelectedOptions open={isOpen} onClick={toggleDropdown} aria-haspopup="listbox" aria-expanded={isOpen}>
                <label id="dropdownLabel">{placeholderLabel}</label>
                <ChevronIcon open={isOpen} aria-label={isOpen ? 'Collapse options' : 'Expand options'} />
            </SelectedOptions>
            {isOpen && (
                <OptionsContainer>
                    <OptionsDropdown role="listbox" aria-labelledby="dropdownLabel">{children}</OptionsDropdown>
                </OptionsContainer>
            )}
        </section>
    );
}

export default Dropdown;
