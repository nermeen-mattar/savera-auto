interface Props {
    value: string;
    onChange: (value: string) => void;
    options: string[];
}

export function Dropdown({ value, onChange, options }: Props) {
    return (
        <select value={value} onChange={(e) => onChange(e.target.value)}>
            <option value="">Select</option>
            {options.map((option, index) => (
                <option key={index} value={option}>
                    {option}
                </option>
            ))}
        </select>
    );
}
