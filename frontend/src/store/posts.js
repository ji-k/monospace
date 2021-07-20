// define action type as constants
const SET_POSTS = 'posts/setPosts'

// define action creator
const setPosts = (posts) => ({
    type: SET_POSTS,
    posts,
})

// define thunk creator
export const getPosts = () => async (dispatch) => {
    const res = await fetch('/api/posts');
    const posts = await res.json();
    dispatch(setPosts(posts));
}

// define the initial state
const initialState = {};

// define a reducer
const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_POSTS:
            const newPosts = Object.fromEntries(action.posts.map((post) => [post.id, post]))
            return { ...state, ...newPosts };
        default:
            return state;
    }
}

// export the reducer
export default postsReducer
