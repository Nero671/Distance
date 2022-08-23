import {authAPI, securityAPI, usersAPI} from "../api/Api";

const SET_USER_DATA = 'auth/SET_USER_DATA';
const GET_CAPTCHA_URL_SUCCESS = 'auth/GET_CAPTCHA_URL_SUCCESS';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false,
    captchaUrl: null,
};

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA:
        case GET_CAPTCHA_URL_SUCCESS: {
                return {
                    ...state,
                    ...action.payload,
                };
            }

        default:
            return state
    }
}

export const setAuthUserDataSuccess = (userId, email, login, isAuth, captcha) => ({type: SET_USER_DATA, payload: {userId, email, login, isAuth, captcha}})
export const getCaptchaUrlSuccess = (captchaUrl) => ({type: GET_CAPTCHA_URL_SUCCESS, payload: {captchaUrl}});

export const getAuthUserData = () => {
    return async (dispatch) => {
        let response = await usersAPI.getAuthProfile();
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data;
                dispatch(setAuthUserDataSuccess(id, email, login, true));
            }
    }
}

export const login = (email, password, rememberMe, captcha, setStatus) => async (dispatch) => {
        let response = await authAPI.login(email, password, rememberMe, captcha, setStatus);

        if (response.data.resultCode === 0) {
            dispatch(getAuthUserData())
        } else {
            if (response.data.resultCode === 10) {
                dispatch(getCaptchaUrl());
            }
            setStatus(response.data.messages);
        }
}

export const getCaptchaUrl = () => async (dispatch) => {
    let response = await securityAPI.getCaptchaUrl();

    const captchaUrl = response.data.url;

    dispatch(getCaptchaUrlSuccess(captchaUrl))
}

export const logout = () => (dispatch) => {
        authAPI.logout()
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setAuthUserDataSuccess(null, null, null, false, null));
                }
            })
}

export default authReducer;
