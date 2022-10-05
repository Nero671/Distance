import {authAPI, securityAPI, usersAPI} from "../api/Api";

const SET_USER_DATA = 'auth/SET_USER_DATA';
const GET_CAPTCHA_URL_SUCCESS = 'auth/GET_CAPTCHA_URL_SUCCESS'

let initialState = {
    userId: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isFetching: false,
    isAuth: false,
    captchaUrl: null as string | null,
};


export type  initialStateType = typeof initialState;

const authReducer = (state = initialState, action: any): initialStateType => {

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

type SetAuthUserDataSuccessActionPayloadTyp = {
    userId: number | null, email: string | null , login: string | null , isAuth: boolean, captcha: string | null
}

type SetAuthUserDataSuccessActionType = {
    type: typeof SET_USER_DATA,
    payload: SetAuthUserDataSuccessActionPayloadTyp
}

type GetCaptchaUrlSuccessActionType = {
    type: typeof GET_CAPTCHA_URL_SUCCESS,
    payload: { captchaUrl: string }
}

export const setAuthUserDataSuccess = (userId: number | null, email: string | null, login: string | null, isAuth: boolean, captcha: string | null): SetAuthUserDataSuccessActionType =>
    ({type: SET_USER_DATA, payload: {userId, email, login, isAuth, captcha}})
export const getCaptchaUrlSuccess = (captchaUrl: string): GetCaptchaUrlSuccessActionType => ({type: GET_CAPTCHA_URL_SUCCESS, payload: {captchaUrl}});

export const getAuthUserData = () => {
    return async (dispatch: any) => {
        let response = await usersAPI.getAuthProfile();
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data;
                // @ts-ignore
                dispatch(setAuthUserDataSuccess(id, email, login, true));
            }
    }
}

export const login = (email: string, password: string, rememberMe: boolean, captcha: string, setStatus: any) => async (dispatch: any) => {
        // @ts-ignore
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

export const getCaptchaUrl = () => async (dispatch: any) => {
    let response = await securityAPI.getCaptchaUrl();

    const captchaUrl = response.data.url;

    dispatch(getCaptchaUrlSuccess(captchaUrl))
}

export const logout = () => (dispatch: any) => {
        authAPI.logout()
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setAuthUserDataSuccess(null, null, null, false, null));
                }
            })
}

export default authReducer;
