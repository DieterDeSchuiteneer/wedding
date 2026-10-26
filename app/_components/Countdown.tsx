"use client";

import { useEffect, useState } from "react";

const units = [
  { label: "dagen", ms: 86_400_000 },
  { label: "uren", ms: 3_600_000 },
  { label: "minuten", ms: 60_000 },
] as const;

function remaining(target: number) {
  let left = Math.max(0, target - Date.now());
  return units.map(({ label, ms }) => {
    const value = Math.floor(left / ms);
    left -= value * ms;
    return { label, value };
  });
}

export default function Countdown({ date }: { date: string }) {
  const target = new Date(date).getTime();
  // null until mounted so server and client render the same markup.
  const [parts, setParts] = useState<ReturnType<typeof remaining> | null>(null);

  useEffect(() => {
    const tick = () => setParts(remaining(target));
    tick();
    const interval = setInterval(tick, 30_000);
    return () => clearInterval(interval);
  }, [target]);

  return (
    <dl
      className="flex items-start justify-center gap-6 transition-opacity duration-700 sm:gap-10"
      style={{ opacity: parts ? 1 : 0 }}
      aria-label="Aftellen tot de grote dag"
    >
      {(parts ?? remaining(target)).map(({ label, value }, i) => (
        <div key={label} className="flex items-start gap-6 sm:gap-10">
          {i > 0 && <span aria-hidden="true" className="mt-4 h-6 w-px bg-current opacity-30" />}
          <div className="flex flex-col items-center">
            <dd className="font-retro text-4xl tabular-nums sm:text-5xl">
              {parts ? value : "–"}
            </dd>
            <dt className="eyebrow mt-1 text-[0.65rem] opacity-80">{label}</dt>
          </div>
        </div>
      ))}
    </dl>
  );
}
