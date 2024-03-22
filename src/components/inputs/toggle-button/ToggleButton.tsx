import { useState } from 'react';
import { OffButton, OnButton } from './ToggleButton.style';

interface Props {
    onToggle: (value: boolean) => void;
    placeholderLabel: string;
}

function ToggleButton({ onToggle, placeholderLabel }: Props) {
    const [isLatestAdded, setIsLatestAdded] = useState(false);

    const handleToggle = () => {
        setIsLatestAdded((prev) => !prev);
        onToggle(!isLatestAdded);
    };

    return (
        <>
            {isLatestAdded ? (
                <OnButton onClick={handleToggle}> {placeholderLabel} </OnButton>
            ) : (
                <OffButton onClick={handleToggle}>{placeholderLabel}</OffButton>
            )}
        </>
    );
}

export default ToggleButton;
