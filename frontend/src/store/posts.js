import { csrfFetch } from './csrf'
// define action type as constants
const SET_POSTS = 'posts/setPosts'
const SET_POST = 'posts/setPost'
const ADD_POST = 'posts/addPost'

// define action creator
export const setPosts = (posts) => ({
    type: SET_POSTS,
    posts,
})

export const setPost = (post) => ({
    type: SET_POST,
    post,
})

export const addPost = (newPost) => ({
    type: ADD_POST,
    newPost,
})


// define thunk creator for GET /posts
export const getPosts = () => async (dispatch) => {
    const res = await fetch('/api/posts');
    const posts = await res.json();
    dispatch(setPosts(posts)); // pass in posts from database
}

// define thunk creator for GET /posts/:id
export const getPost = (id) => async (dispatch) => {
    const res = await fetch(`/api/posts/${id}`);
    const post = await res.json();
    dispatch(setPost(post)); // pass in post from database
}

// define thunk creator for POST request
export const writePost = (payload) => async (dispatch) => {
    const res = await csrfFetch('/api/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
    });
    const newPost = await res.json();

    if (res.ok) {
        dispatch(addPost(newPost));
    }
    return newPost;
};

// define the initial state
const initialState = {};

// define a reducer
const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_POSTS:
            const newPosts = Object.fromEntries(action.posts.map((post) => [post.id, post]))
            return { ...state, ...newPosts };

        case ADD_POST:
            const addPost = { ...state.posts, ...action.newPost };
            return { ...state, ...addPost };

        case SET_POST:
            const newPost = { post: action.post }
            return { ...state, ...newPost };
        default:
            return state;

    }
}

// export the reducer
export default postsReducer
