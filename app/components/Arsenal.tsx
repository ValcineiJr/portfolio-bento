import { FaFigma, FaReact } from "react-icons/fa6";

export default function Arsenal() {
  return (
    <div className="bg-surface-card border border-white/5 rounded-[20px] p-4">
      <h3 className="text-xs font-semibold text-slate-400 mb-3 flex items-center justify-center gap-2">
        <span className="text-purple-400">📚</span> Arsenal Técnico
      </h3>
      <div className="grid grid-cols-2 gap-2 mb-3">
        <div className="bg-surface-hover py-2.5 rounded-xl border border-white/5 flex flex-col items-center gap-1 justify-center hover:bg-white/5 transition-colors cursor-default">
          <span className="text-blue-400 text-base">
            {" "}
            <FaReact size={20} />
          </span>
          <span className="text-micro text-slate-300 font-medium">React</span>
        </div>
        <div className="bg-surface-hover py-2.5 rounded-xl border border-white/5 flex flex-col items-center gap-1 justify-center hover:bg-white/5 transition-colors cursor-default">
          <span className="text-white text-[20px]">▲</span>
          <span className="text-micro text-slate-300 font-medium">Next.js</span>
        </div>
        <div className="bg-surface-hover py-2.5 rounded-xl border border-white/5 flex flex-col items-center gap-1 justify-center hover:bg-white/5 transition-colors cursor-default">
          <span className="text-cyan-400 text-[20px]">≈</span>
          <span className="text-micro text-slate-300 font-medium">
            Tailwind
          </span>
        </div>
        <div className="bg-surface-hover py-2.5 rounded-xl border border-white/5 flex flex-col items-center gap-1 justify-center hover:bg-white/5 transition-colors cursor-default">
          <span className="text-pink-400 text-base">
            <FaFigma size={20} />
          </span>
          <span className="text-micro text-slate-300 font-medium">Figma</span>
        </div>
      </div>
      <div className="flex flex-wrap gap-1.5 justify-center">
        <span className="text-micro bg-white/5 border border-white/10 px-2 py-1 rounded-md text-slate-400">
          Zustand
        </span>
        <span className="text-micro bg-white/5 border border-white/10 px-2 py-1 rounded-md text-slate-400">
          TanStack
        </span>
        <span className="text-micro bg-white/5 border border-white/10 px-2 py-1 rounded-md text-slate-400">
          Clerk
        </span>
        <span className="text-micro bg-white/5 border border-white/10 px-2 py-1 rounded-md text-slate-400">
          Stripe
        </span>
      </div>
    </div>
  );
}
