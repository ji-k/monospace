// import hooks from 'react-redux'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom'
import './PostsContainer.css'
// import { compareAsc, format } from 'date-fns' // date format ????

// import the thunk creator
import { getPosts } from '../../store/posts';

const PostsContainer = () => {
    // declare variables from hooks
    const dispatch = useDispatch();
    const posts = useSelector((state) => Object.values(state.posts));

    // use a 'react' hook and cause a side effect
    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);

    return (
        posts.reverse().map(post => (

            <div key={post.id} className='post-container'>
                <NavLink key={post.id} to={`/posts/${post.id}`}>
                    <div className='post-title'>{post.title}</div>
                </NavLink>
                {/* <div className='post-author'>{post.userId.User.id.username}</div> */}
                {/* <div className='post-author'>{post.User.username}</div> */}
                {/* <div className='post-author'>{post.userId.username}</div> */}
                <div className="post-date">{post.createdAt}</div>
                {/* <div className="post-date">{post.createdAt.toLocaleDateString()}</div> */}
                <div className='post-content'>{post.content}</div>
            </div>
        ))
    )
}

export default PostsContainer;
