"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useProjectStore } from "../store/useProjectStore";
import Image from "next/image";

export default function Projects() {
  const allProjects = useProjectStore((state) => state.projects);
  const recentProjects = allProjects.slice(0, 2);

  return (
    <div className="bg-surface-card border border-white/5 rounded-[32px] p-6">
      <h3 className="text-sm font-semibold text-slate-400 mb-4 flex items-center justify-center gap-2">
        <span className="text-purple-400">💼</span> Meus Projetos
      </h3>

      <div className="grid grid-cols-1 gap-3 relative pb-6">
        {recentProjects.map((project) => (
          <Link href={`/projetos/${project.id}`} key={project.id}>
            <motion.div
              whileHover={{ scale: 1.02, y: -2 }}
              // Trocado o fundo para #1A1A24 para combinar com o monitor
              className="h-28 bg-[#1A1A24] rounded-2xl border border-white/5 flex items-center justify-center overflow-hidden relative group cursor-pointer"
            >
              <div className="absolute inset-0 p-2 opacity-50 group-hover:opacity-60 transition-opacity">
                {/* CORREÇÃO: object-contain */}
                <Image
                  src={project.coverImage}
                  alt={project.title}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-[#0D0D12]/80 to-purple-900/40 opacity-70 group-hover:opacity-90 transition-opacity"></div>
              <span className="relative z-10 font-bold text-white text-base drop-shadow-md">
                {project.title}
              </span>
            </motion.div>
          </Link>
        ))}

        <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
          <Link href="/projetos">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-purple-600 hover:bg-purple-500 text-white px-6 py-2 rounded-xl text-sm font-semibold shadow-[0_0_15px_rgba(168,85,247,0.4)] transition-all whitespace-nowrap"
            >
              Ver Todos
            </motion.button>
          </Link>
        </div>
      </div>
    </div>
  );
}
