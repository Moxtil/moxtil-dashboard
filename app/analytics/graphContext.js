"use client";
import React, { createContext, useState } from "react";
import { webs } from "../components/AnalyticsCard/AnalyticsCard";
export const GraphProvider = createContext();
export default function GraphContext({ children }) {
  const [myData, setMyData] = useState(webs[0]);
  return (
    <GraphProvider.Provider value={{ myData, setMyData }}>
      <div>{children}</div>
    </GraphProvider.Provider>
  );
}
