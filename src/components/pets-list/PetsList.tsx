import { Pet } from '../../types/pet';
import Card from '../card/Card';
import './PetsList.css';

interface Props {
    pets: Pet[];
}

function PetList({ pets }: Props) {
    return (
        <section className="pet-list">
            {pets.map((item) => (
                <Card key={item.id} item={item} />
            ))}
        </section>
    );
}

export default PetList;
