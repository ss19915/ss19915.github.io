import themes from '../../themes';
import { THEME } from '../../constants';
import styled from '@emotion/styled';
import { Button } from '../StyledComponents';


const DarkButton = styled(Button)({'&&': {
    color: themes[THEME.DARK].primaryColor,
    backgroundColor: themes[THEME.DARK].primaryBackgroundColor,
}});

const LightButton = styled(Button)({'&&': {
    color: themes[THEME.LIGHT].primaryColor,
    backgroundColor: themes[THEME.LIGHT].primaryBackgroundColor,
}});

export { DarkButton, LightButton };