import styled from 'styled-components';
import { LightButton } from '../../styles/Button.styles';
import { ArrowRight } from '../../styles/Icon.styles';
import { theme } from '../../theme';

interface Props {
    photo: string;
    title: string;
    description: string;
    actionLabel: string;
    onClick: () => void;
}

const SectionWrapper = styled.article`
    display: flex;
    @media (max-width: 480px) {
        flex-direction: column-reverse;
        align-items: center;
    }
`;

const Image = styled.div<{ photo: string }>`
    flex: 1;
    border-radius: ${theme.borderRadius.small} 0 0 ${theme.borderRadius.small};
    background-image: url(${(props) => props.photo});
    background-size: cover;
    background-position: center;
    @media (max-width: 480px) {
        flex-direction: column-reverse;
        align-items: center;
        min-height: 200px;
        width: 100%;
    }
`;

const ContentWrapper = styled.section`
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 60px;
    padding-left: ${theme.spacing.large};
    text-align: left;
    width: 30%;
    background: ${theme.colors.secondary};
    color: ${theme.colors.white};
    border-radius: 0 ${theme.borderRadius.small} ${theme.borderRadius.small} 0;
    @media (max-width: 480px) {
        width: 100%;
        padding: ${theme.spacing.small};
        flex-direction: row;
        align-items: center;
    }
`;

const Button = styled(LightButton)`
    @media (max-width: 480px) {
        display: none;
    }
`;

const Description = styled.article`
    @media (max-width: 480px) {
        display: none;
    }
`;

const Title = styled.h2`
    margin: 0;
`;

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
