import React from "react";
import styles from "./page.module.css";
import CalendarBox from "../components/CalendarBox/CalendarBox";
import WeekPanel from "../components/CalendarBox/Panel";
export default function page() {
  return (
    <div className={styles.mainContainer}>
      <CalendarBox />
      <WeekPanel />
    </div>
  );
}
