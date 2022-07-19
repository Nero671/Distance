import {profileAPI, usersAPI} from "../api/Api";
import {toggleFollowingProgress, unfollowSuccess} from "./usersReducers";

const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
    friendsData: [
        {id: 1, userName: 'Wanda'},
        {id: 2, userName: 'Pietro'},
        {id: 3, userName: 'Steven'},
        {id: 4, userName: 'Peter'},
    ],
    profile: null,
    status: '',
};

const profilePageReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            };
        }

        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            };
        }

        default:
            return state
    }
}

export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setStatus = (status) => ({type: SET_STATUS, status});

export const setUserProfileThunk = (userId) => {
    return async (dispatch) => {
        let response = await usersAPI.getUserProfile(userId);

        dispatch(setUserProfile(response.data));

    }
}

export const updateStatusThunk = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status);
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
    }
}

export const getStatusThunk = (userId) => async (dispatch) => {
    let response = await profileAPI.updateStatus(userId)

    dispatch(setStatus(response.data));

}

export default profilePageReducer;
