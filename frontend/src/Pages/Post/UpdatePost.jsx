import MoodForm from "../../Components/MoodForm.jsx";
import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import Loading from "../../Components/Loading.jsx";
import {getPostById, updateReport} from "../../API/postAPI.js";

export default function UpdatePost() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const {postId} = useParams();
    const [postToUpdate, setPostToUpdate] = useState(null);

    useEffect(() => {
        setLoading(true);
        getPostById(postId)
            .then((res) => {
                setPostToUpdate(res);
            })
            .catch((error) => {
                throw error;
            }).finally(() => {
            setLoading(false);
        });
    }, [postId]);

    const updateCreation = (post) => {
        setLoading(true);
        updateReport( postId, post)
            .then(() => {
                navigate("/");
            })
            .catch((err) => {
                setError("Something went wrong!")
                throw err;
            })
            .finally(() => {
                setLoading(false);
            });
    }

    if (loading) {
        return <Loading/>;
    }
    return (
        <>
            <MoodForm
                postToUpdate={postToUpdate}
                onCancel={() => navigate("/")}
                onSave={updateCreation}
                error={error}
            />
        </>
    );
}
