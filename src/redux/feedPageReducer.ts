const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const DELETE_POST = 'DELETE_POST';

type PostDataType = {
    id: number,
    message: string,
    likesCount: number
}

let initialState = {
    postData: [
        {id: 1, message: 'Hi this my fist post. I decided to learn React and become a real pro in it!', likesCount: 33},
        {id: 2, message: 'My studies continua', likesCount: 22},
        {id: 3, message: 'Hi, everyone. React is Better then Vue :D', likesCount: 12},
    ] as Array<PostDataType>,
    newPostText: ''
}

export type initialStateType = typeof initialState;

const feedPageReducer = (state = initialState, action: any): initialStateType => {
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

        case DELETE_POST: {
            return  {
                ...state,
                postData: state.postData.filter(item => item.id != action.postId)
            }
        }
        default:
            return state
    }
}

type addPostActionType = {
    type: typeof ADD_POST,
}

type updateNewPostActionType = {
    type: typeof UPDATE_NEW_POST_TEXT,
    newText: string,
}

type deletePostActionType = {
    type: typeof DELETE_POST,
    postId: number,
}


export const addPost = (): addPostActionType => ({ type: ADD_POST });

export const updateNewPost = (postValue: string): updateNewPostActionType =>
    ({ type: UPDATE_NEW_POST_TEXT, newText: postValue });

export const deletePost = (postId: number): deletePostActionType => ({ type: DELETE_POST, postId });


export default feedPageReducer;
