import {usersAPI} from "../api/Api";

const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false,
};

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.data,
                isAuth: true,
            };
        }
        default:
            return state
    }
}

export const setAuthUserDataSuccess = (userId, email, login) => ({type: SET_USER_DATA, data: {userId, email, login}})

export const setAuthUserData = () => {
    return (dispatch) => {
        usersAPI.getAuthProfile()
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data;
                    dispatch(setAuthUserDataSuccess(id, email, login));
                }
            })
    }
}

export default authReducer;
