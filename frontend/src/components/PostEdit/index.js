import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editPost } from "../../store/posts";
import { useHistory, useParams } from "react-router-dom";
// import * as postActions from '../../store/posts.js'
// postActions.editPost()

const UpdatePost = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { id } = useParams();
    const sessionUser = useSelector((state) => state.session.user);
    // const [title, setTitle] = useState("");
    // const [content, setContent] = useState("");

    const post = useSelector((state) => state.posts);

    const [title, setTitle] = useState(post[id].title);
    const [content, setContent] = useState(post[id].content);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const post = {
            title: title,
            userId: sessionUser.id,
            content,
        };

        // thunk
        dispatch(editPost(post, id));
        history.push('/');
    };

    return (
        <div className="post-input-box">
            <form className="post-form-container" onSubmit={handleSubmit}>
                <p className="create-post-h1">edit</p>
                <input
                    type="text"
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    placeholder="Title"
                    name="title"
                />
                <textarea
                    className="create-post-content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    name="content"
                    placeholder="edit your post."
                ></textarea>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default UpdatePost;
