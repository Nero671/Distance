import feedPageReducer, {addPost, deletePost} from "./feedPageReducer";

let state = {
    postData: [
        {id: 1, message: 'Hi this my fist post. I decided to learn React and become a real pro in it!', likesCount: 33},
        {id: 2, message: 'My studies continua', likesCount: 22},
        {id: 3, message: 'Hi, everyone. React is Better then Vue :D', likesCount: 12},
    ],
    newPostText: ''
}

test('length of posts should be incremented', () => {
    let action = addPost;

    let newState = feedPageReducer(state, action);

    expect(newState.postData.length).toBe(3);
});

test('after deleting length of messages should be deleted', () => {
    let action = deletePost(1);

    let newState = feedPageReducer(state, action);

    expect(newState.postData.length).toBe(2);
});



