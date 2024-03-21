import { useCallback, useState } from 'react';
import {
    ArrowRight,
    ArrowRightWrapper,
    Avatar,
    Button,
    CardWrapper,
    Content,
    Name,
} from './Card.style';

interface Props {
    name: string;
    photoUrl: string;
    photoPlaceholder: string;
    actionLabel: string;
}

const Card = ({ name, photoUrl, photoPlaceholder, actionLabel }: Props) => {
    const [imageError, setImageError] = useState(false);

    const handleImageError = useCallback(() => setImageError(true), []);

    return (
        <CardWrapper>
            <Avatar
                crossOrigin="anonymous"
                src={imageError ? photoPlaceholder : photoUrl}
                alt={name}
                onError={handleImageError}
            />
            <Content>
                <Name>{name}</Name>
                <Button>{actionLabel}</Button>
            </Content>
            <ArrowRightWrapper>
                <ArrowRight />
            </ArrowRightWrapper>
        </CardWrapper>
    );
};

export default Card;
