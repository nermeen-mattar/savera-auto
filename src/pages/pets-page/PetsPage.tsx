import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import CategoriesList from '../../components/categories-list/CategoriesList';
import DirectorySection from '../../components/directory-section/DirectorySection';
import Filter from '../../components/filter/Filter';
import PetsList from '../../components/pets-list/PetsList';
import usePetsFilter from '../../hooks/usePetsFilter';
import treats from '../../images/treats.jpeg';
import { fetchPets } from '../../state/actions/petActions';
import { useAppDispatch } from '../../state/hooks';
import { RootState } from '../../state/store';
import { StyledContainerSection } from '../../styles/Container.styles';
import { theme } from '../../theme';
import { Pet } from '../../types/pet';

const MainContainer = styled.main`
    margin: 0 auto;
    max-width: 1200px;
    padding: 50px;

    @media (max-width: 480px) {
        padding: 0;
    }
`;

const ContentSection = styled.section`
    display: flex;
    flex-direction: column;
    gap: 40px;
`;

const LoadingIndicator = styled.div`
    font-size: 24px;
    text-align: center;
`;

const ErrorMessage = styled.div`
    font-size: 24px;
    color: ${theme.colors.red};
    text-align: center;
`;

function PetsPage() {
    const dispatch = useAppDispatch();
    const { t } = useTranslation();

    useEffect(() => {
        dispatch(fetchPets());
    }, [dispatch]);

    const allPets: Pet[] = useSelector((state: RootState) => state.pet.pets);
    const loading = useSelector((state: RootState) => state.pet.loading);
    const error = useSelector((state: RootState) => state.pet.error);

    const { filteredPets, setFilters } = usePetsFilter(allPets);

    return (
        <MainContainer>
            <ContentSection>
                <StyledContainerSection>
                    <h2>{t('pets')}</h2>
                    {loading && (
                        <LoadingIndicator>{t('loading')}</LoadingIndicator>
                    )}
                    {error && <ErrorMessage>{error}</ErrorMessage>}
                    {!loading && !error && (
                        <>
                            <Filter items={allPets} onFilter={setFilters} />
                            <PetsList pets={filteredPets} />
                        </>
                    )}
                </StyledContainerSection>
                <DirectorySection
                    title={t('pets-directory')}
                    description={t('see-pets-for-adoption')}
                    actionLabel={t('actions.see-all')}
                    photo={treats}
                    onClick={() => {
                        alert('hi');
                    }}
                />
                <CategoriesList />
            </ContentSection>
        </MainContainer>
    );
}

export default PetsPage;
