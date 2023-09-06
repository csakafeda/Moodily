import {useEffect, useState} from 'react';
import CalendarR from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Calendar.css';
import {Typography} from "@mui/material";
import {getPostDates} from "../../API/userAPI.js";
import {getUserId} from "../../Tools/userTools.js";
import "./Calendar.css"
import Loading from "../../Components/Loading.jsx";

const Calendar = () => {
    const [value, setValue] = useState(new Date());
    const [loading, setLoading] = useState(true);
    const [dates, setDates] = useState([]);

    useEffect(() => {
        setLoading(true);
        getPostDates(getUserId())
            .then((res) => setDates(res))
            .finally(() => setLoading(false));
    }, []);

    const tileDisabled = ({date}) => date > new Date();

    if (loading) return <Loading/>

    return (
        <div className="calendar-container">
            <Typography className="">Your Calendar</Typography>
            <CalendarR
                onChange={(v) => setValue(v)}
                value={value}
                tileClassName={({date}) => {
                    let day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
                    let month = (date.getMonth() + 1) < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1);
                    const realDate = date.getFullYear() + '-' + month + '-' + day;

                    if (dates.find(val => val.toString() === realDate)) {
                        return "highlight";
                    }

                }}
                tileDisabled={tileDisabled}
            />
        </div>
    )
};

export default Calendar;
