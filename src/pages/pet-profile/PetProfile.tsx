import { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import petPlaceholder from '../../images/pet-placeholder.png';
import { fetchPet } from '../../state/actions/singlePetActions';
import { useAppDispatch, useAppSelector } from '../../state/hooks';
import { RootState } from '../../state/store';
import { ErrorMessage } from '../../styles/Error';
import { LoadingIndicator } from '../../styles/LoadingIndicator';
import { PageContainer } from '../../styles/PageContainer';
import {
    ContentSection,
    ImageContainer,
    InfoContainer,
    InfoSection,
    Label,
    Value,
} from './PetProfile.style';

const PetProfile = () => {
    const dispatch = useAppDispatch();
    const { id } = useParams();
    const { t } = useTranslation();
    const [imageError, setImageError] = useState(false);
    const petProfile = useAppSelector((state: RootState) => state.pet.pet);
    const error = useAppSelector((state: RootState) => state.pet.error);

    useEffect(() => {
        id && dispatch(fetchPet(Number(id)));
    }, [dispatch, id]);

    const handleImageError = useCallback(() => setImageError(true), []);

    if (error) {
        return <ErrorMessage>{error}</ErrorMessage>;
    }

    return (
        <PageContainer>
            {petProfile ? (
                <ContentSection>
                    <ImageContainer>
                        <img
                            alt={petProfile.name}
                            src={
                                imageError
                                    ? petPlaceholder
                                    : petProfile.photoUrl
                            }
                            onError={handleImageError}
                        />
                    </ImageContainer>
                    <InfoContainer>
                        <h3>
                            {petProfile.name} {petProfile.name}
                        </h3>
                        <InfoSection>
                            <section>
                                <Label>{t('profile.type')}</Label>
                                <Value>{petProfile.species}</Value>
                            </section>
                            <section>
                                <Label>{t('profile.date-added')}</Label>
                                <Value>{petProfile.dateAdded}</Value>
                            </section>
                            <section>
                                <Label>{t('profile.age')}</Label>
                                <Value>
                                    {petProfile.age} {t('profile.years')}
                                </Value>
                            </section>
                            <section>
                                <Label>{t('category.available-now')}</Label>
                                <Value>
                                    {t(petProfile.available ? 'yes' : 'no')}
                                </Value>
                            </section>
                        </InfoSection>
                    </InfoContainer>
                </ContentSection>
            ) : (
                <LoadingIndicator />
            )}
        </PageContainer>
    );
};

export default PetProfile;
