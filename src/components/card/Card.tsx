import React from 'react';
import { DarkButton } from '../button-styles/ButtonStyles';
import './card.css';

interface Props {
    name: string;
    photoUrl: string;
    photoPlaceholder: string;
    actionLabel: string;
}

function Card({ name, photoUrl, photoPlaceholder, actionLabel }: Props) {
    const handleImageError = (
        event: React.SyntheticEvent<HTMLImageElement, Event>,
    ) => {
        (event.target as HTMLImageElement).src = photoPlaceholder;
    };

    return (
        <article className="card">
            <img
                className="card__image"
                crossOrigin="anonymous"
                src={photoUrl}
                alt={name}
                onError={handleImageError}
            />
            <section className="card__content">
                <h4 className="card__name">{name}</h4>
                <DarkButton className="card__button">{actionLabel}</DarkButton>
            </section>
        </article>
    );
}

export default Card;
