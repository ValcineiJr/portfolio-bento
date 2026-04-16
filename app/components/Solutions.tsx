export default function Solutions() {
  return (
    <div className="bg-surface-card border border-white/5 rounded-[20px] p-4">
      <h3 className="text-xs font-semibold text-slate-400 mb-3 flex items-center justify-center gap-2">
        <span className="text-purple-400">🚀</span> Minhas Soluções
      </h3>
      <div className="space-y-2">
        <div className="group cursor-default bg-surface-hover p-2.5 rounded-xl border border-white/5">
          <p className="text-mini font-semibold text-white group-hover:text-purple-400 transition-colors">
            Micro-SaaS & Web Apps
          </p>
          <p className="text-micro text-slate-400 mt-0.5 leading-tight">
            Sistemas com autenticação, Stripe e gestão de estado.
          </p>
        </div>
        <div className="group cursor-default bg-surface-hover p-2.5 rounded-xl border border-white/5">
          <p className="text-mini font-semibold text-white group-hover:text-purple-400 transition-colors">
            Sistemas Local-First
          </p>
          <p className="text-micro text-slate-400 mt-0.5 leading-tight">
            Apps offline-first com sync em nuvem.
          </p>
        </div>
      </div>
    </div>
  );
}
