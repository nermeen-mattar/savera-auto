import { useTranslation } from 'react-i18next';
import IconCard from '../icon-card/IconCard';

const CATEGORIES = [
    {
        label: 'all-pets',
        icon: 'heart',
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

function CategoriesList() {
    const { t } = useTranslation();

    return (
        <section className="pet-list">
            {CATEGORIES.map((category) => (
                <IconCard
                    key={category.label}
                    icon={category.icon}
                    label={t(`categories.${category.label}`)}
                />
            ))}
        </section>
    );
}

export default CategoriesList;
