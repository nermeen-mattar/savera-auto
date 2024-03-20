import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Filter from '../../components/filter/Filter';
import PetList from '../../components/pets-list/PetsList';
import { fetchPets } from '../../state/actions/petActions';
import { useAppDispatch } from '../../state/hooks';
import { RootState } from '../../state/store';
import { Pet } from '../../types/pet';

const MainContainer = styled.main`
    margin: 0 auto;
    max-width: 1200px;
    padding: 20px;
    text-align: center;
`;

function PetsPage() {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchPets());
    }, [dispatch]);

    const allPets: Pet[] = useSelector((state: RootState) => state.pet.pets);
    const [loading, setLoading] = useState(true);
    const [filteredPets, setFilteredPets] = useState<Pet[]>(allPets);

    useEffect(() => {
        if (allPets.length > 0) {
            setFilteredPets(allPets);
            setLoading(false);
        }
    }, [allPets]);

    const handleFilterChange = (filteredPets: Pet[]) => {
        setFilteredPets(filteredPets);
    };

    return (
        <MainContainer>
            <h2>Pets</h2>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <>
                    <Filter
                        items={allPets}
                        onFilterChange={handleFilterChange}
                    />
                    <PetList pets={filteredPets} />
                </>
            )}
        </MainContainer>
    );
}

export default PetsPage;
