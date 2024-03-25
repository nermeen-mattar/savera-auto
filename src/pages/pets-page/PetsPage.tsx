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
import { ErrorMessage } from '../../styles/Error';
import { LoadingIndicator } from '../../styles/LoadingIndicator';
import { PageContainer } from '../../styles/PageContainer';
import { Pet } from '../../types/pet';

const ContentSection = styled.section`
    display: flex;
    flex-direction: column;
    gap: 40px;
    width: 100%;
    max-width: 1200px;
`;

function PetsPage() {
    const dispatch = useAppDispatch();
    const { t } = useTranslation();

    useEffect(() => {
        dispatch(fetchPets());
    }, [dispatch]);

    const allPets: Pet[] = useSelector((state: RootState) => state.pets.pets);
    const loading = useSelector((state: RootState) => state.pets.loading);
    const error = useSelector((state: RootState) => state.pets.error);

    const { filteredPets, setFilters } = usePetsFilter(allPets);

    return (
        <PageContainer>
            <ContentSection>
                <StyledContainerSection>
                    <h2>{t('pets')}</h2>
                    {loading && <LoadingIndicator />}
                    {error && <ErrorMessage>{error}</ErrorMessage>}
                    {filteredPets.length > 0 ? (
                        <>
                            <Filter
                                items={filteredPets}
                                onFilter={setFilters}
                            />
                            <PetsList pets={filteredPets} />
                        </>
                    ) : null}
                </StyledContainerSection>
                <DirectorySection
                    title={t('pets-directory')}
                    description={t('see-pets-for-adoption')}
                    actionLabel={t('actions.see-all')}
                    photo={treats}
                />
                <CategoriesList />
            </ContentSection>
        </PageContainer>
    );
}

export default PetsPage;
