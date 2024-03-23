import styled from 'styled-components';
import { DarkButton, LightButton } from '../../../styles/Button.styles';
import { theme } from '../../../theme';

export const OffButton = styled(LightButton)`
    border: 1px solid ${theme.colors.lightGrey};
`;

export const OnButton = styled.button`
    ${DarkButton}
    border: 1px solid ${theme.colors.lightGrey};
`;
