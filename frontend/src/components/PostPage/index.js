import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory, NavLink } from 'react-router-dom'
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
    const sessionUser = useSelector(state => state.session.user);

    // use a 'react' hook and cause a side effect
    useEffect(() => {
        // dispatch(getPost(id));
        dispatch(getPosts())
    }, [dispatch, id]);

    const removePost = () => {
        dispatch(deletePost(id));
        history.push('/')
    }

    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    return (
        <div className="single-post">
            <div className="single-post-title">{postPage?.title}</div>
            <div className='single-post-author'>{postPage?.User?.username}</div>
            {/* <div className="single-post-date">{postPage?.createdAt}</div> */}
            <div className="single-post-date">{new Date(postPage?.createdAt).toLocaleDateString(undefined, options)}</div>
            <div className="single-post-content">{postPage?.content}</div>
            {sessionUser?.id === postPage?.userId &&
                <div>
                    <NavLink to={`/edit/${id}`}>
                        <button className="btn-edit">Edit</button>
                    </NavLink>
                    <button className="btn-delete" onClick={removePost}>Delete</button>
                </div>
            }
        </div>
    )
}

export default PostPage;
