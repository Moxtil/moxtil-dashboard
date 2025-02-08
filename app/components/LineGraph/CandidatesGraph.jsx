"use client";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const data = [
  { condition: "Applied", number: 40 },
  { condition: "Shortlisted", number: 25 },
  { condition: "Interviewed", number: 20 },
  { condition: "Hired", number: 10 },
  { condition: "Rejected", number: 5 },
];

const COLORS = ["#4F46E5", "#06B6D4", "#10B981", "#F59E0B", "#EF4444"];

export default function CandidatesGraph() {
  return (
    <div
      style={{
        width: "100%",
        height: "400px",
        padding: "20px",
        backgroundColor: "#fff",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        borderRadius: "8px",
        textAlign: "center",
      }}
    >
      <h3
        style={{ fontSize: "16px", marginBottom: "10px", fontWeight: "bold" }}
      >
        Job Candidates Breakdown
      </h3>
      <ResponsiveContainer width="100%" height="90%">
        <PieChart>
          <Pie
            data={data}
            dataKey="number"
            nameKey="condition"
            cx="50%"
            cy="50%"
            outerRadius={100}
            label
          >
            {data.map((entry, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend style={{ marginBlock: "20px" }} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
