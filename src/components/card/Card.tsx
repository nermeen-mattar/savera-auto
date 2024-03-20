import React from 'react';
import { useTranslation } from 'react-i18next';
import petPlaceholder from '../../images/pet-placeholder.png';
import { Pet } from '../../types/pet';
import { DarkButton } from '../button-styles/ButtonStyles';
import './card.css';

interface Props {
    item: Pet;
}

function Card({ item }: Props) {
    const { t } = useTranslation();

    const handleImageError = (
        event: React.SyntheticEvent<HTMLImageElement, Event>,
    ) => {
        (event.target as HTMLImageElement).src = petPlaceholder;
    };

    return (
        <article className="card">
            <img
                className="card__image"
                crossOrigin="anonymous"
                src={item.photoUrl}
                alt={item.name}
                onError={handleImageError}
            />
            <section className="card__content">
                <h4 className="card__name">{item.name}</h4>
                <DarkButton className="card__button">{t('view')}</DarkButton>
            </section>
        </article>
    );
}

export default Card;
