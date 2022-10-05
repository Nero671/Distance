import {profileAPI, usersAPI} from "../api/Api";
import {toggleFollowingProgress, unfollowSuccess} from "./usersReducers";
import {PhotosType, ProfileType} from "../type/type";

const SET_USER_PROFILE = 'profile/SET_USER_PROFILE';
const SET_STATUS = 'profile/SET_STATUS';
const SAVE_PHOTO_SUCCESS = 'profile/SAVE_PHOTO_SUCCESS';

type FriendsDataType = {
    id: number,
    userName: string
}

let initialState = {
    friendsData: [
        {id: 1, userName: 'Wanda'},
        {id: 2, userName: 'Pietro'},
        {id: 3, userName: 'Steven'},
        {id: 4, userName: 'Peter'},
    ] as Array<FriendsDataType>,
    profile: null as ProfileType | null ,
    status: '',
};

export type InitialStateType = typeof initialState;

const profilePageReducer = (state = initialState, action: any ):InitialStateType  => {

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
                profile: {...state.profile, photos: action.photos} as ProfileType
            };
        }

        default:
            return state
    }
}

type SetUserProfileActionType = {
    type: typeof SET_USER_PROFILE,
    profile: ProfileType,
}

type SetStatusActionType = {
    type: typeof SET_STATUS,
    status: string,
}

type SavePhotoSuccessActionType = {
    type: typeof SAVE_PHOTO_SUCCESS,
    photos: PhotosType,
}


export const setUserProfile = (profile: ProfileType): SetUserProfileActionType => ({type: SET_USER_PROFILE, profile});
export const setStatus = (status: string): SetStatusActionType => ({type: SET_STATUS, status});
export const savePhotoSuccess = (photos: PhotosType): SavePhotoSuccessActionType => ({type: SAVE_PHOTO_SUCCESS, photos});

export const setUserProfileThunk = (userId: number) => {
    return async (dispatch: any) => {
        let response = await usersAPI.getUserProfile(userId);

        dispatch(setUserProfile(response.data));

    }
}

export const updateStatusThunk = (status: string) => async (dispatch: any) => {
    try {
        let response = await profileAPI.updateStatus(status);
        if (response.data.resultCode === 0) {;
            dispatch(setStatus(status));
        }
    } catch (error) {
        console.error(error)
    }

}

export const getStatusThunk = (userId: number) => async (dispatch: any) => {
    let response = await profileAPI.updateStatus(userId)
    dispatch(setStatus(response.data));
}

export const savePhoto = (file: any) => async (dispatch: any) => {
    let response = await profileAPI.savePhoto(file);
    if (response.data.resultCode === 0) {;
        dispatch(savePhotoSuccess(response.data.data.photos));
    }
}

export const saveProfile = (profile: ProfileType) => async (dispatch: any) => {
    let response = await profileAPI.saveProfile(profile);
    if (response.data.resultCode === 0) {;
        dispatch(setUserProfileThunk(24359))
    }
}

export default profilePageReducer;
