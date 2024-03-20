import styled from 'styled-components';
import { theme } from '../../theme';
import { LightButton } from '../button-styles/ButtonStyles';

interface Props {
    photo: string;
    title: string;
    description: string;
    actionLabel: string;
    onClick: () => void;
}

const SectionWrapper = styled.article`
    display: flex;
`;

const Image = styled.div<{ photo: string }>`
    flex: 1;
    border-radius: 20px 0 0 20px;
    background-image: url(${(props) => props.photo});
    background-size: cover;
    background-position: center;
`;

const ContentWrapper = styled.section`
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 60px;
    padding-left: 30px;
    text-align: left;
    width: 30%;
    background: ${theme.colors.secondary};
    color: ${theme.colors.white};
    border-radius: 0 20px 20px 0;
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
                <p>{description}</p>
                <LightButton onClick={onClick}>{actionLabel}</LightButton>
            </ContentWrapper>
        </SectionWrapper>
    );
}

export default DirectorySection;
