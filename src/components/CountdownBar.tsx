import { useEffect, useState } from "react";
import { Clock } from "lucide-react";

// Prazo do preço de lançamento — troque esta data quando quiser.
const DEADLINE = new Date("2026-10-12T23:59:59-03:00").getTime();

interface T {
  d: number;
  h: number;
  m: number;
  s: number;
}

function diff(): T | null {
  const ms = DEADLINE - Date.now();
  if (ms <= 0) return null;
  const s = Math.floor(ms / 1000);
  return {
    d: Math.floor(s / 86400),
    h: Math.floor((s % 86400) / 3600),
    m: Math.floor((s % 3600) / 60),
    s: s % 60,
  };
}

const pad = (n: number) => String(n).padStart(2, "0");

export const CountdownBar = () => {
  const [t, setT] = useState<T | null>(diff());

  useEffect(() => {
    const id = setInterval(() => setT(diff()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="w-full bg-gradient-to-r from-[#0e8c7f] to-[#15d6b6] text-[#04211d]">
      <a
        href="#pricing"
        className="container flex flex-wrap items-center justify-center gap-x-3 gap-y-1 py-2 text-sm font-semibold text-center"
      >
        <Clock className="w-4 h-4 shrink-0" />
        <span>Preço de lançamento da turma de abertura</span>
        {t ? (
          <span className="tabular-nums font-extrabold">
            termina em {t.d}d {pad(t.h)}:{pad(t.m)}:{pad(t.s)}
          </span>
        ) : (
          <span className="font-extrabold">últimas horas!</span>
        )}
        <span className="underline underline-offset-2">Garantir minha vaga →</span>
      </a>
    </div>
  );
};
