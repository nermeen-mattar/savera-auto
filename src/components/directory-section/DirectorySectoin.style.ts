import styled from 'styled-components';
import { LightButton } from '../../styles/Button.styles';
import { theme } from '../../theme';

export const SectionWrapper = styled.article`
    display: flex;
    @media (max-width: ${theme.breakpoints.mobile}) {
        flex-direction: column-reverse;
        align-items: center;
    }
`;

export const Image = styled.div<{ photo: string }>`
    flex: 1;
    border-radius: ${theme.borderRadius.small} 0 0 ${theme.borderRadius.small};
    background-image: url(${(props) => props.photo});
    background-size: cover;
    background-position: center;
    @media (max-width: ${theme.breakpoints.mobile}) {
        border-radius: 0;
        min-height: 200px;
        width: 100%;
    }
`;

export const ContentWrapper = styled.section`
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
    @media (max-width: ${theme.breakpoints.mobile}) {
        border-radius: 0;
        width: 100%;
        padding: ${theme.spacing.small};
        flex-direction: row;
        align-items: center;
    }
`;

export const Button = styled(LightButton)`
    @media (max-width: ${theme.breakpoints.mobile}) {
        display: none;
    }
`;

export const Description = styled.article`
    @media (max-width: ${theme.breakpoints.mobile}) {
        display: none;
    }
`;

export const Title = styled.h2`
    margin: 0;
`;
