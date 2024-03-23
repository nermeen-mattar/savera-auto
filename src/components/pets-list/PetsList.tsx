import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import petPlaceholder from '../../images/pet-placeholder.png';
import { Pet } from '../../types/pet';
import Card from '../card/Card';
import { PetsListSection } from './PetsList.style';

interface Props {
    pets: Pet[];
}

function PetsList({ pets }: Props) {
    const { t } = useTranslation();
    const navigate = useNavigate();

    const handlePetCardClick = (petId: number) => {
        navigate(`/pets/${petId}`);
    };

    return (
        <section aria-labelledby="petsListHeading">
            <h3 id="petsListHeading">
                {t('results')} {pets.length}
            </h3>
            <PetsListSection
                aria-live="polite"
                aria-relevant="additions removals"
            >
                {pets.map((item) => (
                    <section
                        key={item.id}
                        data-testid="pet-card"
                        aria-label={`${item.name} details`}
                    >
                        <Card
                            photoUrl={item.photoUrl}
                            name={item.name}
                            photoPlaceholder={petPlaceholder}
                            actionLabel={t('actions.view')}
                            handleOnClick={() => handlePetCardClick(item.id)} // Pass handlePetCardClick function
                        />
                    </section>
                ))}
            </PetsListSection>
        </section>
    );
}

export default PetsList;
