"use client";

import { useState } from "react";
import YearSelector from "@/components/YearSelector";
import StatCard from "@/components/StatCard";
import SpendingChart from "@/components/Charts/SpendingChart";
import LegislationSection from "@/components/Sections/LegislationSection";

import { spending } from "@/data/spending";
import { legislation } from "@/data/legislation";
import { getYearSlice } from "@/lib/getYearSlice";

export default function Page() {
  const [year, setYear] = useState(2020);

  const spendingData = getYearSlice(spending, year);
  const legislationData = getYearSlice(legislation, year);

  const latestSpend = spendingData.at(-1);

  return (
    <main className="p-8 space-y-6">
      <h1 className="text-3xl font-bold">
        U.S. Healthcare System — {year}
      </h1>

      <YearSelector year={year} onChange={setYear} />

      {latestSpend && (
        <div className="grid grid-cols-3 gap-4">
          <StatCard
            title="Total Healthcare Spending"
            value={`$${(latestSpend.totalUSD / 1e12).toFixed(2)}T`}
          />
          <StatCard
            title="Medicare Spending"
            value={`$${(latestSpend.medicareUSD / 1e9).toFixed(0)}B`}
          />
          <StatCard
            title="Medicaid Spending"
            value={`$${(latestSpend.medicaidUSD / 1e9).toFixed(0)}B`}
          />
        </div>
      )}

      <SpendingChart data={spendingData} />

      <LegislationSection items={legislationData} />
    </main>
  );
}
