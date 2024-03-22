import { ChangeEvent, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { theme } from '../../../theme';
import { AgeRange } from '../../../types/ageRange';

interface Props {
    onChange: (ageRange: AgeRange) => void;
    min: number;
    max: number;
}

const SliderContainer = styled.div`
    padding: ${theme.spacing.medium};
`;

const RangeSlider = styled.input`
    width: 100%;
`;

const SelectedRange = styled.div`
    text-align: center;
`;

function AgeRangeInput({ min, max, onChange }: Props) {
    const [ageRange, setAgeRange] = useState<AgeRange>({ min, max });
    const { t } = useTranslation();

    useEffect(() => {
        onChange(ageRange);
    }, [ageRange, onChange]);

    const handleAgeChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(event.target.value);
        const isMin = event.target.name === 'min';
        if (isMin && value > ageRange.max) {
            return;
        } else if (!isMin && value < ageRange.min) {
            return;
        }
        setAgeRange((prev) => ({
            min: isMin ? value : prev.min,
            max: isMin ? prev.max : value,
        }));
    };

    return (
        <SliderContainer>
            <p>{t('filters.min')}</p>
            <RangeSlider
                id="age-min"
                name="min"
                type="range"
                min={min}
                max={max}
                value={ageRange.min}
                onChange={handleAgeChange}
            />
            <p>{t('filters.min')}</p>
            <RangeSlider
                id="age-max"
                name="max"
                type="range"
                min={min}
                max={max}
                value={ageRange.max}
                onChange={handleAgeChange}
            />
            <SelectedRange>
                {t('filters.selected-range')}: {ageRange.min} - {ageRange.max}
            </SelectedRange>
        </SliderContainer>
    );
}

export default AgeRangeInput;
