import themes from '../../themes';
import { css } from '@emotion/core';
import { THEME } from '../../constants';
import styled from '@emotion/styled';

const ButtonStyle = ({ theme }) => css({
    padding: theme.spacing_m,
    margin: theme.spacing_l,
    borderRadius: theme.spacing_m,
    ':disabled': {
        ':hover': {
            cursor: theme.cursor_disabled,
        },
    },
    ':hover': {
        cursor: theme.cursor_hover
    }
});

const DarkButton = styled.button(ButtonStyle, {
    color: themes[THEME.DARK].primaryColor,
    backgroundColor: themes[THEME.DARK].primaryBackgroundColor,
});

const LightButton = styled.button(ButtonStyle, {
    color: themes[THEME.LIGHT].primaryColor,
    backgroundColor: themes[THEME.LIGHT].primaryBackgroundColor,
});

export { DarkButton, LightButton };