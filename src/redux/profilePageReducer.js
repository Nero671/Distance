import {profileAPI, usersAPI} from "../api/Api";
import {toggleFollowingProgress, unfollowSuccess} from "./usersReducers";

const SET_USER_PROFILE = 'profile/SET_USER_PROFILE';
const SET_STATUS = 'profile/SET_STATUS';
const SAVE_PHOTO_SUCCESS = 'profile/SAVE_PHOTO_SUCCESS';

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

        case SAVE_PHOTO_SUCCESS: {
            return {
                ...state,
                profile: {...state.profile, photos: action.photos}
            };
        }

        default:
            return state
    }
}

export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setStatus = (status) => ({type: SET_STATUS, status});
export const savePhotoSuccess = (photos) => ({type: SAVE_PHOTO_SUCCESS, photos});

export const setUserProfileThunk = (userId) => {
    return async (dispatch) => {
        let response = await usersAPI.getUserProfile(userId);

        dispatch(setUserProfile(response.data));

    }
}

export const updateStatusThunk = (status) => async (dispatch) => {
    try {
        let response = await profileAPI.updateStatus(status);
        if (response.data.resultCode === 0) {;
            dispatch(setStatus(status));
        }
    } catch (error) {
        console.error(error)
    }

}

export const getStatusThunk = (userId) => async (dispatch) => {
    let response = await profileAPI.updateStatus(userId)
    dispatch(setStatus(response.data));
}

export const savePhoto = (file) => async (dispatch) => {
    let response = await profileAPI.savePhoto(file);
    if (response.data.resultCode === 0) {;
        dispatch(savePhotoSuccess(response.data.data.photos));
    }
}

export const saveProfile = (profile) => async (dispatch) => {
    let response = await profileAPI.saveProfile(profile);
    if (response.data.resultCode === 0) {;
        dispatch(setUserProfileThunk(24359))
    }
}

export default profilePageReducer;
