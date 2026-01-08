"use client";

import { LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";
import { SpendingData } from "@/lib/types";

export default function SpendingChart({ data }: { data: SpendingData[] }) {
  return (
    <LineChart width={600} height={300} data={data}>
      <XAxis dataKey="year" />
      <YAxis />
      <Tooltip />
      <Line dataKey="totalUSD" />
    </LineChart>
  );
}
