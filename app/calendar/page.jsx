"use client";
import React from "react";
import styles from "./page.module.css";
import CalendarBox from "../components/CalendarBox/CalendarBox";
import WeekPanel from "../components/CalendarBox/Panel";
import Home from "../page";
import { useAuth } from "../Firebase/AuthContext";
export default function page() {
  const { user } = useAuth();

  if (!user) {
    return <Home />;
  } else
    return (
      <div className={styles.mainContainer}>
        <CalendarBox />
        <WeekPanel />
      </div>
    );
}
