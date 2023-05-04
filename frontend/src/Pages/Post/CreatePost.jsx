import MoodForm from "../../Components/MoodForm.jsx";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import Loading from "../../Components/Loading.jsx";
import {submitReport} from "../../API/postReport.js";

export default function CreatePost() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const postCreation = (post) => {
        setLoading(true);

        submitReport(post)
            .catch((err) => {
                setError("You already posted today!")
                throw err;
            })
            .then(() => {
                setLoading(false);
                if (error !== "") {
                    navigate("/");
                }
            })
    }

    return (
        <>
            {loading ?
                <Loading/>
                :
                <MoodForm
                    onCancel={() => navigate("/")}
                    onSave={postCreation}
                    error={error}
                />
            }
        </>
    )
        ;
}
