import { useParams } from 'react-router-dom';

const PetProfile = () => {
    const { id } = useParams();

    const pet = {
        id: id,
        name: 'Fluffy',
        species: 'Dog',
        age: '2',
        description: 'A friendly dog.',
    };

    return (
        <div>
            <h2>Pet Details</h2>
            <div>
                <strong>Name:</strong> {pet.name}
                <br />
                <strong>Species:</strong> {pet.species}
                <br />
                <strong>Age:</strong> {pet.age}
                <br />
                <strong>Description:</strong> {pet.description}
                <br />
            </div>
        </div>
    );
};

export default PetProfile;
