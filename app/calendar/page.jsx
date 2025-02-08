import React from "react";
import styles from "./page.module.css";
import CalendarBox from "../components/CalendarBox/CalendarBox";
import WeekPanel from "../components/CalendarBox/Panel";
import { getServerSession } from "next-auth";
import Page from "../page";
export default async function page() {
  const session = await getServerSession();

  if (!session) {
    return <Page />;
  } else
    return (
      <div className={styles.mainContainer}>
        <CalendarBox />
        <WeekPanel />
      </div>
    );
}
