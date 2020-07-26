import * as CONST from "../Actions/actionTypes";

const initialState = {
    user: {},
    isLoggedIn: false,
    images: [],
    loading: false
};

export const mainReducer = (
    state = initialState,
    action: any
) => {
    switch (action.type) {
        case CONST.SHOW_LOADER: {
            return { ...state, loading: true };
        }
        case CONST.HIDE_LOADER: {
            return { ...state, loading: false };
        }
        case CONST.CLEAR_USER_CREDENTIALS: {
            return { ...state, user: {} };
        }
        case CONST.SET_USER_CREDENTIALS: {
            return { ...state, user: action.user };
        }
        case CONST.SET_STATUS: {
            return { ...state, isLoggedIn: action.isLoggedIn };
        }
        case CONST.SET_IMAGES: {
            return { ...state, images: action.images };
        }
        default:
            return state;
    }
};

export default mainReducer;
