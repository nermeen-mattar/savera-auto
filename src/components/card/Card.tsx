import { useCallback, useState } from 'react';
import { ArrowRight, ArrowRightWrapper } from '../../styles/Icon.styles';
import { Avatar, Button, CardWrapper, Content, Name } from './Card.style';

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
                role="img"
                src={imageError ? photoPlaceholder : photoUrl}
                onError={handleImageError}
            />
            <Content>
                <Name>{name}</Name>
                <Button aria-label={`Action for ${name}`}>{actionLabel}</Button>
            </Content>
            <ArrowRightWrapper>
                <ArrowRight aria-label={`Action for ${name}`} />
            </ArrowRightWrapper>
        </CardWrapper>
    );
};

export default Card;
