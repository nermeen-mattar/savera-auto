import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import IconClock from '../../icons/Clock';
import IconConfettie from '../../icons/Confettie';
import IconHeart from '../../icons/Heart';
import IconHome from '../../icons/Home';
import IconPin from '../../icons/Pin';
import { StyledContainerSection } from '../../styles/Container.styles';
import { theme } from '../../theme';
import IconCard from '../icon-card/IconCard';

const CATEGORIES = [
    {
        label: 'all-pets',
        icon: <IconHeart />,
    },
    {
        label: 'location-specific',
        icon: <IconPin />,
    },
    {
        label: 'age-specific',
        icon: <IconClock />,
    },
    {
        label: 'available-now',
        icon: <IconConfettie />,
    },
    {
        label: 'small-or-big-home',
        icon: <IconHome />,
    },
];

const StyledCategoriesList = styled.div`
    display: flex;
    justify-content: space-between;
    overflow-x: auto;
    padding-top: ${theme.spacing.medium};
    gap: ${theme.spacing.small};
`;

function CategoriesList() {
    const { t } = useTranslation();

    return (
        <StyledContainerSection>
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
        </StyledContainerSection>
    );
}

export default CategoriesList;
