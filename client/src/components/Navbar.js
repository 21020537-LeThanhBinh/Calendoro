import React from "react";
import { Login } from "./Login";
import { Setting } from "./Setting";

export function Navbar(props) {
    function onToggleCalendar() {
        document.querySelector('.fullcalendar').classList.toggle('show');
        document.querySelector('.toggle-calendar-btn').classList.toggle('btn-select');
    }

    return (
        <div className="navbar d-flex justify-content-between w-50">
            <div className="logo-container">
                <a href="http://localhost:3000/" className="logo d-flex">
                    <span className="material-symbols-outlined">check_circle</span>
                    <h2>Calendoro</h2>
                </a>
            </div>

            <div className="tools d-flex justify-content-end align-items-center h-100">
                <span className="material-symbols-outlined toggle-calendar-btn p-2" onClick={onToggleCalendar}>event</span>
                <Setting setSetting={props.setSetting}/>
                <Login calendarRef={props.calendarRef}/>
            </div>
        </div>
    )
}