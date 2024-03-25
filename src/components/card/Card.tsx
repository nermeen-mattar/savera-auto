import { useCallback, useState } from 'react';
import { ArrowRight, ArrowRightWrapper } from '../../styles/Icon.styles';
import { Avatar, Button, CardWrapper, Content, Name } from './Card.style';

interface Props {
    name: string;
    photoUrl?: string;
    photoPlaceholder: string;
    actionLabel: string;
    handleOnClick: () => void;
}

const Card = ({
    name,
    photoUrl,
    photoPlaceholder,
    actionLabel,
    handleOnClick,
}: Props) => {
    const [imageError, setImageError] = useState(false);

    const handleImageError = useCallback(() => setImageError(true), []);

    return (
        <CardWrapper>
            <Avatar
                role="img"
                src={photoUrl && !imageError ? photoUrl : photoPlaceholder}
                onError={handleImageError}
            />
            <Content>
                <Name>{name}</Name>
                <Button
                    onClick={handleOnClick}
                    aria-label={`Action for ${name}`}
                >
                    {actionLabel}
                </Button>
            </Content>
            <ArrowRightWrapper>
                <ArrowRight
                    aria-label={`Action for ${name}`}
                    onClick={handleOnClick}
                />
            </ArrowRightWrapper>
        </CardWrapper>
    );
};

export default Card;
