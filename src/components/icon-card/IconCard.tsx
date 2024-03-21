import { ReactNode } from 'react';
import { Card, CardIconWrapper, StyledIcon } from './IconCard.style';

interface Props {
    label: string;
    icon: ReactNode;
}

function IconCard({ label, icon }: Props) {
    return (
        <Card>
            <CardIconWrapper>
                <StyledIcon>{icon}</StyledIcon>
            </CardIconWrapper>
            <p>{label}</p>
        </Card>
    );
}

export default IconCard;
