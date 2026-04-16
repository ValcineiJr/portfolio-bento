export default function WorkFlow() {
  return (
    <div className="bg-surface-card border border-white/5 rounded-[20px] p-4">
      <h3 className="text-xs font-semibold text-slate-400 mb-3 flex items-center justify-center gap-2">
        <span className="text-purple-400">⚙️</span> Meu Processo
      </h3>

      <div className="space-y-2">
        <div className="bg-surface-hover p-2.5 rounded-xl border border-white/5 flex items-center gap-3">
          <div className="w-5 flex justify-center">
            <span className="text-slate-400 text-sm">🎨</span>
          </div>
          <div>
            <p className="text-mini font-semibold text-white">1. UI Design</p>
            <p className="text-micro text-slate-500 mt-0.5">Figma System</p>
          </div>
        </div>
        <div className="bg-surface-hover p-2.5 rounded-xl border border-white/5 flex items-center gap-3">
          <div className="w-5 flex justify-center">
            <span className="text-slate-400 text-sm">🏗️</span>
          </div>
          <div>
            <p className="text-mini font-semibold text-white">2. Arquitetura</p>
            <p className="text-micro text-slate-500 mt-0.5">Next.js & Rotas</p>
          </div>
        </div>
        <div className="bg-surface-hover p-2.5 rounded-xl border border-white/5 flex items-center gap-3">
          <div className="w-5 flex justify-center">
            <span className="text-slate-400 text-sm">✨</span>
          </div>
          <div>
            <p className="text-mini font-semibold text-white">3. Estilização</p>
            <p className="text-micro text-slate-500 mt-0.5">
              Tailwind Responsivo
            </p>
          </div>
        </div>
        <div className="bg-surface-hover p-2.5 rounded-xl border border-white/5 flex items-center gap-3">
          <div className="w-5 flex justify-center">
            <span className="text-slate-400 text-sm">🧠</span>
          </div>
          <div>
            <p className="text-mini font-semibold text-white">
              4. Dados & Estado
            </p>
            <p className="text-micro text-slate-500 mt-0.5">
              React Query + Zod
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
