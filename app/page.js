import { FaArrowTrendUp, FaArrowTrendDown } from "react-icons/fa6";
import LineGraph from "./components/LineGraph/LineGraph";
import TallGraph from "./components/LineGraph/TallGraph";
import styles from "./page.module.css";

const stats = [
  {
    id: 1,
    title: "Gross Revenue",
    rate: 2.75,
    increase: true,
    value: 120.054,
  },
  {
    id: 2,
    title: "Avg Order",
    rate: 1.01,
    increase: false,
    value: 22.09,
  },
  {
    id: 3,
    title: "Trailing Year",
    rate: 45.35,
    increase: true,
    value: 285.042,
  },
];
export default function Home() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.container}>
        <div className={styles.stats}>
          {stats.map((st) => {
            return (
              <div key={st.id}>
                <div>
                  <p>{st.title}</p>
                  <span
                    style={
                      st.increase
                        ? { background: "#41bb41" }
                        : { background: "#ff0000b3" }
                    }
                  >
                    {st.increase ? <FaArrowTrendUp /> : <FaArrowTrendDown />}{" "}
                    {st.rate}%
                  </span>
                </div>
                <h4>${st.value}</h4>
              </div>
            );
          })}
        </div>
        <div className={styles.graph}>
          <LineGraph />
          <TallGraph />
        </div>
      </div>
    </div>
  );
}
