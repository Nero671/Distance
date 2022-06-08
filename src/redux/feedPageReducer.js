const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    postData: [
        {id: 1, message: 'Hi this my fist post. I decided to learn React and become a real pro in it!', likesCount: 33},
        {id: 2, message: 'My studies continua', likesCount: 22},
        {id: 3, message: 'Hi, everyone. React is Better then Vue :D', likesCount: 12},
    ],
    newPostText: ''
}

const feedPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 4,
                message: state.newPostText,
                likesCount: 0
            };

            return {
                ...state,
                postData: [...state.postData, newPost],
                newPostText: '',
            };
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            };
        }
        default:
            return state
    }
}

export const addPost = () => ({ type: ADD_POST });

export const updateNewPost = (postValue) =>
    ({ type: UPDATE_NEW_POST_TEXT, newText: postValue });

export default feedPageReducer;
