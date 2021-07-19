// import hooks from 'react-redux'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'

// import the thunk creator
import { getPosts } from '../../store/posts';

import styles from './PostsContainer.css'

const PostsContainer = () => {
    // declare variables from hooks
    const dispatch = useDispatch();
    const { id } = useParams();
    const posts = useSelector((state) => state.postState.posts);
    // const posts = useSelector((state) => Object.values(state.posts));
    const post = posts.find(post => post.id === id);
    console.log(post)

    // use a 'react' hook and cause a side effect
    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch])

    return (
        <div className={styles.postContainer}>
            <div className='post-title'>{post.title}</div>
            <div className='post-author'>{post.id}</div>
            <div className='post-content'>{post.content}</div>
            {/* {posts.map((post) => <p key={post.id} post={post} />)} */}
        </div>
    )
}
