import MoodForm from "../../Components/MoodForm.jsx";
import {updateReport} from "../../API/patchReport.js";
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import Loading from "../../Components/Loading.jsx";

export default function UpdatePost() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const updateCreation = (post) => {
        setLoading(true);

        updateReport(post)
            .then(() => {
                navigate("/");
            })
            .catch((err) => {
                setError("You already posted today!")
                throw err;
            })
            .finally(() => {
                setLoading(false);
            });
    }

    return (
        <>
            {loading ?
                <Loading/>
                :
                <MoodForm
                    onCancel={() => navigate("/")}
                    onSave={updateCreation}
                    error={() => error}
                />
            }

        </>
    );
}
