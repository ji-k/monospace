import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import './PostPage.css'

// import the thunk creator
import { getPost } from '../../store/posts';
import { getPosts } from '../../store/posts';

const PostPage = () => {
    // declare variables from hooks
    const { id } = useParams();
    const dispatch = useDispatch();
    const postPages = Object.values(useSelector((state) => state.posts));
    const postPage = postPages.find((post) => post.id === +id);
    // const postPage = useSelector((state) => state.posts.post)

    // use a 'react' hook and cause a side effect
    useEffect(() => {
        // dispatch(getPost(id));
        dispatch(getPosts())
    }, [dispatch, id]);

    return (
        <div>
            <h2>{postPage.title}</h2>
            <p>{postPage.content}</p>
        </div>
    )
}

export default PostPage;
