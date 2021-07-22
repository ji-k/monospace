import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom'
import './PostPage.css'

// import the thunk creator
// import { getPost } from '../../store/posts';
import { getPosts, deletePost } from '../../store/posts';

const PostPage = () => {
    // declare variables from hooks
    const { id } = useParams();
    const dispatch = useDispatch();
    const postPages = Object.values(useSelector((state) => state.posts));
    const postPage = postPages.find((post) => post.id === +id);
    // const postPage = useSelector((state) => state.posts.post)
    const history = useHistory();

    // use a 'react' hook and cause a side effect
    useEffect(() => {
        // dispatch(getPost(id));
        dispatch(getPosts())
    }, [dispatch, id]);

    const removePost = () => {
        dispatch(deletePost(id));
        history.push('/')
    }

    return (
        <div className="single-post">
            {/* <div className='single-post-author'>Posted by {post.User.username}</div> */}
            <div className="single-post-title">{postPage?.title}</div>
            <div className="single-post-date">{postPage?.createdAt}</div>
            <div className="single-post-content">{postPage?.content}</div>
            <button onClick={removePost}>Delete</button>
        </div>
    )
}

export default PostPage;
