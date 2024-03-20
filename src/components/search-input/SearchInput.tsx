import { useCallback } from 'react';

interface Props {
    value: string;
    onChange: (value: string) => void;
}

function SearchInput({ value, onChange }: Props) {

    const handleChange = useCallback(
        () => (e) => onChange(e.target.value),
        [onChange],
    );

    return (
        <input
            type="text"
            placeholder="Search Pets"
            value={value}
            onChange={handleChange}
        />
    );
}
export default SearchInput;
