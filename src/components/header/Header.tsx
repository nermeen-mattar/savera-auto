import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import IconPet from '../../icons/PetIcon';
import { TextButton } from '../../styles/Button.styles';
import { theme } from '../../theme';

const StyledHeader = styled.header`
    background-color: ${theme.colors.primary};
    display: flex;
    justify-content: space-between;
    padding: ${theme.spacing.small} ${theme.spacing.large};
    align-items: center;

    @media (max-width: 480px) {
        background-color: transparent;
        padding: 10px;
    }
`;

function Header() {
    const { t, i18n } = useTranslation();

    function changeLanguage(e) {
        i18n.changeLanguage(e.target.value);
    }

    return (
        <StyledHeader>
            <IconPet />
            <div>
                <TextButton
                    onClick={changeLanguage}
                    value="en"
                    title={t('language.switch-to', {
                        language: t('language.english'),
                    })}
                >
                    {t('language.english')}
                </TextButton>
                <TextButton
                    onClick={changeLanguage}
                    value="nl"
                    title={t('language.switch-to', {
                        language: t('language.dutch'),
                    })}
                >
                    {t('language.dutch')}
                </TextButton>
            </div>
        </StyledHeader>
    );
}

export default Header;
