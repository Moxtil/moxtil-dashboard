import styles from "./page.module.css";
import AnalyticsGraph from "../components/LineGraph/AnalyticsGraph";
import AnalyticsGraphFull from "../components/LineGraph/AnalyticsGraphFull";
import MiniWeeklyGraph from "../components/LineGraph/MiniWeeklyGraph";
import AnalyticsCard from "../components/AnalyticsCard/AnalyticsCard";
import { getServerSession } from "next-auth";
import HomePage from "../page";

export default async function Analytics() {
  const session = await getServerSession();

  if (!session) {
    return <HomePage />;
  } else
    return (
      <div className={styles.mainContainer}>
        <div className={styles.container}>
          <AnalyticsCard />
          <div className={styles.graphs}>
            <AnalyticsGraphFull />
            <AnalyticsGraph />
          </div>
        </div>

        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Country</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Moxtil</td>
              <td>20</td>
              <td>Syria</td>
            </tr>
          </tbody>
        </table>
        <MiniWeeklyGraph />
      </div>
    );
}
