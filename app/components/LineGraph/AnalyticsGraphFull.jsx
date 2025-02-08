"use client";
import { webs } from "@/app/components/AnalyticsCard/AnalyticsCard";
import { GraphProvider } from "@/app/analytics/graphContext";
import { useContext } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function AnalyticsGraphFull() {
  const { myData } = useContext(GraphProvider);
  // const data = [
  //   { name: "Jan", value: 400 },
  //   { name: "Feb", value: 600 },
  //   { name: "Mar", value: 500 },
  //   { name: "Apr", value: 700 },
  //   { name: "May", value: 800 },
  // ];
  const data = myData.visits;

  return (
    <div
      style={{
        width: "60%",
        height: "350px",
        padding: "20px",
        backgroundColor: "#fff",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        borderRadius: "10px",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          marginBottom: "20px",
          fontSize: "18px",
          fontWeight: "bold",
        }}
      >
        Monthly Visits Rate
      </h2>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" fill="#4F46E5" barSize={40} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
