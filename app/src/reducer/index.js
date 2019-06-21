import { actionConstants, THEME } from '../constants';

const InitialState = {
    theme: THEME.LIGHT,
};

const { SET_THEME } = actionConstants;

const reducer = (state = InitialState, action) => {
    switch (action.type) {
        case SET_THEME:
            return { ...state, theme: action.theme };

        default:
            return state;
    };
};

export default reducer;