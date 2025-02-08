"use client";

import { GraphProvider } from "@/app/analytics/graphContext";
import { useContext, useState } from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const COLORS = ["#4F46E5", "#06B6D4", "#F59E0B", "#EF4444"];

export default function AnalyticsGraph() {
  const data = [
    { name: "Marketing", value: 300 },
    { name: "Development", value: 500 },
    { name: "Customer Support", value: 200 },
  ];
  return (
    <div
      style={{
        width: "40%",
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
        Webs Expenses
      </h2>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={70}
            outerRadius={120}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
