"use client";

interface Props {
  year: number;
  onChange: (year: number) => void;
}

export default function YearSelector({ year, onChange }: Props) {
  return (
    <input
      type="range"
      min={1960}
      max={2026}
      value={year}
      onChange={e => onChange(Number(e.target.value))}
      className="w-full"
    />
  );
}
