import {Typography} from "@mui/material";
import Calendar from "react-calendar";
import {useState} from "react";
import "./calendar.css";
import 'react-calendar/dist/Calendar.css';

const CalendarPage = () => {
    const [date, setDate] = useState(new Date());

    const dateChange = (date) => {
        setDate(date);
    };

    return (
        <div className="calendar-container">
            <Typography className="calendar-title" variant="h4">
                Your Calendar
            </Typography>
            <div className="calendar-wrapper">
                <Calendar onChange={dateChange} value={date}/>
            </div>
            <Typography className="selected-date" variant="subtitle1">
                {date.toString()}
            </Typography>
        </div>
    );
};

export default CalendarPage;
