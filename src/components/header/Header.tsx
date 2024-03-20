import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import petIcon from '../../icons/pet-icon.svg';
import { theme } from '../../theme';
import { TextButton } from '../button-styles/ButtonStyles';

const StyledHeader = styled.header`
    background-color: ${theme.colors.primary};
    display: flex;
    justify-content: space-between;
    padding: 10px 50px;
    align-items: center;

    @media (max-width: 768px) {
        background-color: transparent;
        padding: 10px;
    }
`;

const Logo = styled.img`
    width: 40px;
    height: auto;
    margin-right: 10px;
`;

function Header() {
    const { i18n } = useTranslation();

    function changeLanguage(e) {
        i18n.changeLanguage(e.target.value);
    }

    return (
        <StyledHeader>
            <Logo src={petIcon} alt="Pet Icon" />
            <div>
                <TextButton
                    onClick={changeLanguage}
                    value="en"
                    title="Switch to English"
                >
                    English
                </TextButton>
                <TextButton
                    onClick={changeLanguage}
                    value="nl"
                    title="Switch to Dutch"
                >
                    Dutch
                </TextButton>
            </div>
        </StyledHeader>
    );
}

export default Header;
