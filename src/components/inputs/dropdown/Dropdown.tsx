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
        <section>
            <SelectedOptions open={isOpen} onClick={toggleDropdown}>
                <label>{placeholderLabel}</label>
                <ChevronIcon open={isOpen} />
            </SelectedOptions>
            {isOpen && (
                <OptionsContainer>
                    <OptionsDropdown>{children}</OptionsDropdown>
                </OptionsContainer>
            )}
        </section>
    );
}

export default Dropdown;
