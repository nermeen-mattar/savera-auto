import styled from 'styled-components';
import { theme } from '../../theme';

const StyledFooter = styled.footer`
    background-color: ${theme.colors.secondary};
    min-height: 80px;
`;

function Footer() {
    return <StyledFooter></StyledFooter>;
}

export default Footer;
