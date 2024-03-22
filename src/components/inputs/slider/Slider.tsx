import { ChangeEvent, useState } from 'react';

interface Props {
    onChange: (ageRange: [number, number]) => void;
}

function Slider({ onChange }: Props) {
    const [minAge, setMinAge] = useState(0);
    const [maxAge, setMaxAge] = useState(20);

    const handleMinAgeChange = (event: ChangeEvent<HTMLInputElement>) => {
        const newMinAge = parseInt(event.target.value);
        setMinAge(newMinAge);
        onChange([newMinAge, maxAge]);
    };

    const handleMaxAgeChange = (event: ChangeEvent<HTMLInputElement>) => {
        const newMaxAge = parseInt(event.target.value);
        setMaxAge(newMaxAge);
        onChange([minAge, newMaxAge]);
    };

    return (
        <div style={{ marginTop: 20 }}>
            <label htmlFor="min-age">Min Age: {minAge}</label>
            <input
                type="range"
                id="min-age"
                name="min-age"
                min={0}
                max={20}
                value={minAge}
                onChange={handleMinAgeChange}
            />
            <br />
            <label htmlFor="max-age">Max Age: {maxAge}</label>
            <input
                type="range"
                id="max-age"
                name="max-age"
                min={0}
                max={20}
                value={maxAge}
                onChange={handleMaxAgeChange}
            />
        </div>
    );
}

export default Slider;
