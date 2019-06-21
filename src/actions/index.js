import { actionConstants } from '../constants';

const { SET_THEME } = actionConstants;

export const setTheme = (theme) => ({
    type: SET_THEME,
    theme
});