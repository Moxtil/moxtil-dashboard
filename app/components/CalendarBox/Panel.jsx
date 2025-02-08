"use client";

import { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

export default function WeekPanel() {
  const [weekData, setWeekData] = useState([]);

  useEffect(() => {
    // Get the last 7 days dynamically
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const today = new Date();
    const data = [];

    for (let i = 6; i >= 0; i--) {
      const date = new Date();
      date.setDate(today.getDate() - i);
      data.push({
        day: days[date.getDay()],
        hours: Math.floor(Math.random() * 10), // Fake work hours (0-9)
      });
    }
    setWeekData(data);
  }, []);

  return (
    <div
      style={{
        width: "100%",
        margin: "auto",
        padding: "20px",
        backgroundColor: "#ffffff",
        boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
        borderRadius: "10px",
        textAlign: "center",
      }}
    >
      <h2
        style={{
          fontSize: "20px",
          marginBottom: "15px",
          fontWeight: "bold",
          color: "#333",
        }}
      >
        🗓️ Weekly Work Hours
      </h2>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={weekData}
          margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" stroke="#333" />
          <YAxis stroke="#333" />
          <Tooltip />
          <Bar dataKey="hours" fill="#1E40AF" radius={[5, 5, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>

      <p style={{ marginTop: "10px", fontSize: "14px", color: "#555" }}>
        📊 Total Work Hours Per Day in the Last 7 Days
      </p>
    </div>
  );
}
