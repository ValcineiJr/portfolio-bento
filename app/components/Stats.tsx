"use client";

import { useProjectStore } from "../store/useProjectStore";

export default function Stats() {
  // Puxando a quantidade total de projetos dinamicamente
  const projectsCount = useProjectStore((state) => state.projects.length);

  return (
    <div className="grid grid-cols-3 gap-3">
      <div className="bg-surface-card border border-white/5 rounded-[20px] p-3 text-center flex flex-col justify-center h-20">
        <p className="text-3xl font-bold text-white leading-none mb-1">
          5<span className="text-purple-500">+</span>
        </p>
        <p className="text-micro text-slate-400 uppercase tracking-wider font-semibold">
          Anos Exp.
        </p>
      </div>
      <div className="bg-surface-card border border-white/5 rounded-[20px] p-3 text-center flex flex-col justify-center h-20">
        <p className="text-3xl font-bold text-white leading-none mb-1">
          {projectsCount}
          <span className="text-purple-500">+</span>
        </p>
        <p className="text-micro text-slate-400 uppercase tracking-wider font-semibold">
          Projetos
        </p>
      </div>
      <div className="bg-surface-card border border-white/5 rounded-[20px] p-3 text-center flex flex-col justify-center h-20">
        <p className="text-3xl font-bold text-white leading-none mb-1">
          100<span className="text-purple-500">%</span>
        </p>
        <p className="text-micro text-slate-400 uppercase tracking-wider font-semibold">
          Dedicação
        </p>
      </div>
    </div>
  );
}
