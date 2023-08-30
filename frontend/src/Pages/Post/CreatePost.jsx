import MoodForm from "../../Components/MoodForm.jsx";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import Loading from "../../Components/Loading.jsx";
import {addPost} from "../../API/postAPI.js";

export default function CreatePost() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const postCreation = (post) => {
        setLoading(true);
        try {
            addPost(post,
                (e) => setError(e),
                (nav) => navigate(nav));
        } catch (e) {
            console.log(e);
        } finally {
            setLoading(false);
        }
    }

    if (loading) {
        return <Loading/>;
    }

    return (
        <>
            <MoodForm
                onCancel={() => navigate("/")}
                onSave={postCreation}
                error={error}
            />
        </>
    )
}
