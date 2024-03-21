import { useCallback, useState } from 'react';
import { DarkButton } from '../button-styles/ButtonStyles';
import './card.css';

interface Props {
    name: string;
    photoUrl: string;
    photoPlaceholder: string;
    actionLabel: string;
}

function Card({ name, photoUrl, photoPlaceholder, actionLabel }: Props) {
    const [imageError, setImageError] = useState(false);

    const handleImageError = useCallback(() => setImageError(true), []);

    return (
        <article className="card">
            <img
                className="card__image"
                crossOrigin="anonymous"
                src={imageError ? photoPlaceholder : photoUrl}
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
