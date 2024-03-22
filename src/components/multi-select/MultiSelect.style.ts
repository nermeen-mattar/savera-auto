import styled from 'styled-components';
import { OptionsList } from '../../styles/list.styles';
import { theme } from '../../theme';

export const SelectedOptions = styled.button<{ open: boolean }>`
    padding: ${theme.spacing.xsmall} ${theme.spacing.medium};
    gap: ${theme.spacing.small};
    border: 1px solid ${theme.colors.lightGrey};
    color: ${theme.colors.black};
    background-color: ${theme.colors.white};
    cursor: pointer;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: ${({ open }) =>
        open
            ? `${theme.borderRadius.large} ${theme.borderRadius.large} 0 0`
            : theme.borderRadius.large};
    font-size: ${theme.typography.body.desktop};
`;

export const OptionsDropdown = styled(OptionsList)`
    z-index: 1;
    overflow-y: auto;
    position: absolute;
    background-color: ${theme.colors.white};
    max-height: 200px;
    width: 100%;
    border: 1px solid ${theme.colors.lightGrey};
    box-sizing: border-box;
    border-top: none;
    border-bottom-left-radius: ${theme.borderRadius.large};
    border-bottom-right-radius: ${theme.borderRadius.large};
    font-size: ${theme.typography.bodySmall.desktop};
`;

export const OptionsContainer = styled.section`
    width: 100%;
    position: relative;
`;

export const OptionCheckbox = styled.input.attrs({ type: 'checkbox' })`
    margin-right: ${theme.spacing.small};
`;
