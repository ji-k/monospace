// define action type as constants
const SET_POSTS = 'posts/setPosts'
const SET_POST = 'posts/setPost'

// define action creator
const setPosts = (posts) => ({
    type: SET_POSTS,
    posts,
})

const setPost = (post) => ({
    type: SET_POST,
    post,
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

// define the initial state
const initialState = {};

// define a reducer
const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_POSTS:
            const newPosts = Object.fromEntries(action.posts.map((post) => [post.id, post]))
            return { ...state, ...newPosts };

        case SET_POST:
            const newPost = { post: action.post }
            return { ...state, ...newPost };
        default:
            return state;
    }
}

// export the reducer
export default postsReducer
