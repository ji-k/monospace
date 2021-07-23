import { csrfFetch } from './csrf'
// define action type as constants
const SET_POSTS = 'posts/setPosts'
const SET_POST = 'posts/setPost'
const ADD_POST = 'posts/addPost'
const REMOVE_POST = 'posts/removePost'
const UPDATE_POST = 'posts/updatePost'

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

export const removePost = (id) => ({
    type: REMOVE_POST,
    id,
})

export const updatePost = (post) => ({
    type: UPDATE_POST,
    post
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

// define thunk creator for DELETE request
export const deletePost = (id) => async (dispatch) => {
    const res = await csrfFetch(`/api/posts/${id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
    });

    if (res.ok) {
        const postId = await res.json();
        // dispatch(removePost(postId))
        dispatch(removePost(id))
    }
};

// define thunk creator for PUT request (edit)
export const editPost = (post) => async (dispatch) => {
    const res = await csrfFetch(`/api/posts/${post.userId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ post }),
    });
    dispatch(updatePost(post));
    return res;
}

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

        case REMOVE_POST:
            const newState = { ...state };
            // delete newState.posts[action.postId];
            delete newState[action.id];
            // newState.posts = newState.posts.filter(post => post.id !== action.postId);
            return newState;
        // return {
        //     ...state,
        //     [action.postId]: {
        //         ...state[action.postId],
        //         posts: state[action.postId].state.posts.filter(
        //             (post) => post.id !== action.postId
        //         )
        //     }
        // }

        case SET_POST:
            const newPost = { post: action.post }
            return { ...state, ...newPost };

        case UPDATE_POST:
            return {
                ...state,
                ...action.post
            }

        default:
            return state;

    }
}

// export the reducer
export default postsReducer
