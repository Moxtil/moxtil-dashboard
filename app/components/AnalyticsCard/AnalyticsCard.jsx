"use client";
import React, { useContext } from "react";
import { FaArrowTrendUp, FaArrowTrendDown } from "react-icons/fa6";
import { GraphProvider } from "../../analytics/graphContext";
import Image from "next/image";
import styles from "../../analytics/page.module.css";
import img1 from "../../assets/screencapture-moxtilecommerce-netlify-app-2025-02-01-21_56_17.png";
import img2 from "../../assets/screencapture-moxtilshows-netlify-app-2025-02-01-21_54_03.png";
import img3 from "../../assets/screencapture-moxtilgames-netlify-app-2025-02-01-22_00_19.png";
export const webs = [
  {
    id: 0,
    title: "Moxtil E-Commerce",
    visitsRate: 1.5,
    techs: "Next JS",
    increase: true,
    visits: [
      { name: "Oct", value: 120 },
      { name: "Nov", value: 100 },
      { name: "Dec", value: 140 },
      { name: "Jan", value: 90 },
      { name: "Feb", value: 123 },
    ],
    imgUrl: img1,
  },
  {
    id: 1,
    title: "Moxtil Games",
    visitsRate: 1.09,
    techs: "Next JS",
    increase: false,
    visits: [
      { name: "Oct", value: 110 },
      { name: "Nov", value: 85 },
      { name: "Dec", value: 119 },
      { name: "Jan", value: 131 },
      { name: "Feb", value: 150 },
    ],
    imgUrl: img3,
  },
  {
    id: 2,
    title: "Moxtil Shows",
    visitsRate: 1.3,
    techs: "Next JS",
    increase: true,
    visits: [
      { name: "Oct", value: 109 },
      { name: "Nov", value: 90 },
      { name: "Dec", value: 129 },
      { name: "Jan", value: 108 },
      { name: "Feb", value: 130 },
    ],
    imgUrl: img2,
  },
];

export default function AnalyticsCard() {
  const { myData, setMyData } = useContext(GraphProvider);

  return (
    <div className={styles.stats}>
      {webs.map((st) => {
        return (
          <div key={st.id} onClick={() => setMyData(webs[st.id])}>
            <Image src={st.imgUrl} alt={st.title} width={150} height={100} />
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
                {st.visitsRate}%
              </span>
            </div>
            <h4>⚡{st.techs}</h4>
          </div>
        );
      })}
    </div>
  );
}
