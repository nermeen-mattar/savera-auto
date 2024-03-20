import { useTranslation } from 'react-i18next';
import petPlaceholder from '../../images/pet-placeholder.png';
import { Pet } from '../../types/pet';
import Card from '../card/Card';
import './PetsList.css';

interface Props {
    pets: Pet[];
}

function PetList({ pets }: Props) {
    const { t } = useTranslation();
    return (
        <section className="pet-list">
            {pets.map((item) => (
                <Card
                    key={item.id}
                    photoUrl={item.photoUrl}
                    name={item.name}
                    photoPlaceholder={petPlaceholder}
                    actionLabel={t('actions.view')}
                />
            ))}
        </section>
    );
}

export default PetList;
