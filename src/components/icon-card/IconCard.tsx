import { Card, CardIcon, CardIconWrapper } from './IconCard.style';

interface Props {
    label: string;
    icon: string;
}

function IconCard({ label, icon }: Props) {
    return (
        <Card>
            <CardIconWrapper>
                <CardIcon src={icon} alt={label} />
            </CardIconWrapper>
            <p>{label}</p>
        </Card>
    );
}

export default IconCard;
