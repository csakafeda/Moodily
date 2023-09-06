import {useEffect, useState} from 'react';
import CalendarR from 'react-calendar';
import {Typography} from "@mui/material";
import {getPostDates} from "../../API/userAPI.js";
import {getPostByDateAndUserId} from "../../API/postAPI.js";
import {getUserId} from "../../Tools/userTools.js";
import Loading from "../../Components/Loading.jsx";
import {MoodCard} from "../../Components/MoodCard.jsx";
import 'react-calendar/dist/Calendar.css';
import './Calendar.css';

const Calendar = () => {
    const [value, setValue] = useState(new Date());
    const [loading, setLoading] = useState(true);
    const [dates, setDates] = useState([]);
    const [mood, setMood] = useState(null);

    useEffect(() => {
        setLoading(true);
        getPostDates(getUserId())
            .then((res) => setDates(res.sort()))
            .finally(() => setLoading(false));
    }, []);

    useEffect(() => {
        setLoading(true);
        getPostByDateAndUserId(value.toISOString().substring(0, 10), getUserId())
            .then(res => res == null ? null : setMood(res))
            .finally(() => setLoading(false));
    }, [value]);

    const handleChange = (date) => {
        setValue(new Date(
            date.getFullYear(),
            date.getMonth(),
            date.getDate() + 1
        ));
    }
    const tileDisabled = ({date}) => date > new Date();

    if (loading) return <Loading/>

    return (
        <div className="calendar-container">
            <Typography className="">Your Calendar</Typography>
            <CalendarR
                onChange={e => handleChange(e)}
                tileClassName={({date}) => {
                    const dateWithoutTime = new Date(
                        date.getFullYear(),
                        date.getMonth(),
                        date.getDate() + 1
                    ).toISOString().split('T')[0];
                    if (dates.includes(dateWithoutTime)) {
                        return "highlight";
                    }
                }}
                tileDisabled={tileDisabled}
            />
            <div>Selected date: {value.toISOString().split('T')[0]}</div>

            {mood && mood.created === value.toISOString().split('T')[0]
                ? <MoodCard mood={mood}/>
                : <p> No mood posted</p>}

        </div>
    )
};

export default Calendar;
