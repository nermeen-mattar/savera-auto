import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import useLazyLoad from '../../hooks/useLazyLoad';
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
    const { observer, intersectingIds } = useLazyLoad();
    const handlePetCardClick = useCallback(
        (petId: number) => {
            navigate(`/pets/${petId}`);
        },
        [navigate],
    );

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
                        data-id={item.id}
                        aria-label={`${item.name} details`}
                        ref={(el) => {
                            if (el && observer.current) {
                                observer.current.observe(el);
                            }
                        }}
                    >
                        <Card
                            photoUrl={
                                intersectingIds.includes(item.id)
                                    ? item.photoUrl
                                    : undefined
                            }
                            name={item.name}
                            photoPlaceholder={petPlaceholder}
                            actionLabel={t('actions.view')}
                            handleOnClick={() => handlePetCardClick(item.id)}
                        />
                    </section>
                ))}
            </PetsListSection>
        </section>
    );
}

export default PetsList;
