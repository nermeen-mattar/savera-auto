import { useTranslation } from 'react-i18next';
import petPlaceholder from '../../images/pet-placeholder.png';
import { Pet } from '../../types/pet';
import Card from '../card/Card';
import { PetsListSection } from './PetsList.style';

interface Props {
    pets: Pet[];
}

function PetsList({ pets }: Props) {
    const { t } = useTranslation();
    return (
        <section>
            <h2>{t('results')}</h2>
            <PetsListSection>
                {pets.map((item) => (
                    <section key={item.id} data-testid="pet-card">
                        <Card
                            photoUrl={item.photoUrl}
                            name={item.name}
                            photoPlaceholder={petPlaceholder}
                            actionLabel={t('actions.view')}
                        />
                    </section>
                ))}
            </PetsListSection>
        </section>
    );
}

export default PetsList;
