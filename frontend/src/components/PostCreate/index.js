import { useState } from "react";
import { useDispatch } from "react-redux";
import { writePost } from "../../store/posts";
import "./PostCreate.css";

const CreatePost = () => {
    const dispatch = useDispatch();

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const reset = () => {
        setTitle("");
        setContent("");
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newPost = {
            title: title,
            content,
        };

        // thunk
        const newPostObj = await dispatch(writePost(newPost));
        console.log(newPostObj);
        reset();
    };

    return (
        <div className="post-input-box">
            <form className="post-form-container" onSubmit={handleSubmit}>
                <p className="create-post-h1">create</p>
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
                    placeholder="Write your post."
                ></textarea>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default CreatePost;
