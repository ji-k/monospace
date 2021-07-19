// import hooks from 'react-redux'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styles from './PostsContainer.css'

// import the thunk creator
import { getPosts } from '../../store/posts';

const PostsContainer = () => {
    // declare variables from hooks
    const dispatch = useDispatch();
    const posts = useSelector((state) => Object.values(state.posts));
    // const post = posts[0]

    // use a 'react' hook and cause a side effect
    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch])

    return (
        posts.map(post => (
            <div className={styles.postsContainer}>
                <div className='post-title'>{post.title}</div>
                <div className='post-author'>{post.id}</div>
                <div className='post-content'>{post.content}</div>
            </div>
        ))
    )
}

export default PostsContainer;
