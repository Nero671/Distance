import {usersAPI} from "../api/Api";
import {toggleFollowingProgress, unfollowSuccess} from "./usersReducers";

const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    friendsData: [
        {id: 1, userName: 'Wanda'},
        {id: 2, userName: 'Pietro'},
        {id: 3, userName: 'Steven'},
        {id: 4, userName: 'Peter'},
    ],
    profile: null,
};

const profilePageReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            };
        }
        default:
            return state
    }
}

export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});

export const setUserProfileThunk = (userId) => {
    return (dispatch) => {
        usersAPI.getUserProfile(userId)
            .then(response => {
                dispatch(setUserProfile(response.data));
            })

    }
}

export default profilePageReducer;
