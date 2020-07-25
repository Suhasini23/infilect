import * as CONST from "../Actions/actionTypes";
import { IUser } from '../commanUtils/GenericInterfaces';
import { Dispatch } from "redux";

export const setAuth = (username: string, pass: string) => (dispatch: Dispatch<any>) => {
    localStorage.setItem('name', username);
    localStorage.setItem('pw', pass);
    dispatch(setUserCredentials({ username: username, password: pass }));
    dispatch(setisUserLogged(true));
};

export const clearAuth = () => (dispatch: Dispatch<any>) => {
    localStorage.removeItem("name");
    localStorage.removeItem("pw");
    dispatch(clearUserCredentials());
    dispatch(setisUserLogged(false));
};

export const setUserCredentials = (user: IUser) => ({
    type: CONST.SET_USER_CREDENTIALS,
    user: user
});

export const setisUserLogged = (isLoggedIn: boolean) => ({
    type: CONST.SET_STATUS,
    isLoggedIn: isLoggedIn
});

export const clearUserCredentials = () => ({
    type: CONST.CLEAR_USER_CREDENTIALS,
});

