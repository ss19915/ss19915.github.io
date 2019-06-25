import { THEME } from '../constants';
import layoutSetting from './layoutSetting';
import colors from './colors';
import settings from './settings';

const theme = {
    [THEME.DARK]: {
        primaryColor: colors.white,
        primaryBackgroundColor: colors.black,
        secondaryBackgroundColor: colors.fadedBlack,
        ...layoutSetting,
        ...settings,
    },
    [THEME.LIGHT]: {
        primaryColor: colors.black,
        primaryBackgroundColor: colors.white,
        secondaryBackgroundColor: colors.fadedWhite,
        ...layoutSetting,
        ...settings,
    }
}

export default theme;