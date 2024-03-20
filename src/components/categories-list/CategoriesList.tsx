import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import heartIcon from '../../icons/heart.svg';
import { theme } from '../../theme';
import IconCard from '../icon-card/IconCard';

const CATEGORIES = [
    {
        label: 'all-pets',
        icon: heartIcon,
    },
    {
        label: 'location-specific',
        icon: 'pin',
    },
    {
        label: 'age-specific',
        icon: 'clock',
    },
    {
        label: 'available-now',
        icon: 'confettie',
    },
    {
        label: 'small-or-big-home',
        icon: 'home',
    },
];

const StyledCategoriesList = styled.div`
    display: flex;
    justify-content: space-between;
    overflow-x: auto;
    padding-top: ${theme.spacing.small};
`;

function CategoriesList() {
    const { t } = useTranslation();

    return (
        <section>
            <h2>{t('category.categories')}</h2>
            <StyledCategoriesList>
                {CATEGORIES.map((category) => (
                    <IconCard
                        key={category.label}
                        icon={category.icon}
                        label={t(`category.${category.label}`)}
                    />
                ))}
            </StyledCategoriesList>
        </section>
    );
}

export default CategoriesList;
