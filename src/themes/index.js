import { THEME } from '../constants';
import layoutSetting from './layoutSetting';
import colors from './colors';
import settings from './settings';

const theme = {
    [THEME.DARK]: {
        primaryColor: colors.white,
        primaryBackgroundColor: colors.black,
        ...layoutSetting,
        ...settings,
    },
    [THEME.LIGHT]: {
        primaryColor: colors.black,
        primaryBackgroundColor: colors.white,
        ...layoutSetting,
        ...settings,
    }
}

export default theme;