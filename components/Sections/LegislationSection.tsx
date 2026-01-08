import { LegislationEvent } from "@/lib/types";

export default function LegislationSection({ items }: { items: LegislationEvent[] }) {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Legislation</h2>
      <ul className="space-y-2">
        {items.map(l => (
          <li key={l.title}>
            <strong>{l.year}</strong> — {l.title} ({l.status})
            <p className="text-sm text-gray-600">{l.summary}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
