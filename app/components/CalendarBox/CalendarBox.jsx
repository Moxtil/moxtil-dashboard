"use client";

import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./CalendarBox.css"; // Custom styles

export default function CalendarBox() {
  const [date, setDate] = useState(new Date());

  return (
    <div className="calendar-container">
      <h2 className="calendar-title">📅 CalendarBox</h2>
      <Calendar onChange={setDate} value={date} className="custom-calendar" />
      <p className="selected-date">Selected: {date.toDateString()}</p>
    </div>
  );
}
