import { ArrowRight } from '../../styles/Icon.styles';
import {
    Button,
    ContentWrapper,
    Description,
    Image,
    SectionWrapper,
    Title,
} from './DirectorySection.style';

interface Props {
    photo: string;
    title: string;
    description: string;
    actionLabel: string;
    onClick?: () => void;
}

function DirectorySection({
    photo,
    title,
    description,
    actionLabel,
    onClick,
}: Props) {
    return (
        <SectionWrapper>
            <Image photo={photo} />
            <ContentWrapper>
                <Title>{title}</Title>
                <Description>{description}</Description>
                <Button onClick={onClick}>{actionLabel}</Button>
                <ArrowRight />
            </ContentWrapper>
        </SectionWrapper>
    );
}

export default DirectorySection;
