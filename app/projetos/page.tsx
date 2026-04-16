"use client";

import { useProjectStore } from "../store/useProjectStore";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowLeft, Eye } from "lucide-react"; // Lembre-se de ter o lucide-react instalado

export default function ProjetosPage() {
  const allProjects = useProjectStore((state) => state.projects);

  return (
    <main className="min-h-screen p-4 md:p-8 flex flex-col items-center">
      <div className="w-full max-w-[1200px]">
        <div className="mb-8 flex flex-col items-start gap-4">
          <Link
            href="/"
            className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm bg-surface-card px-4 py-2 rounded-xl border border-white/5"
          >
            <ArrowLeft size={16} /> Voltar
          </Link>
          <h1 className="text-4xl font-bold text-white">Todos os Projetos</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {allProjects.map((project, i) => (
            <Link href={`/projetos/${project.id}`} key={project.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-surface-card border border-white/5 rounded-2xl overflow-hidden flex flex-col group cursor-pointer"
              >
                {/* Capa do Projeto */}
                <div className="relative h-48 w-full border-b border-white/5 overflow-hidden">
                  <Image
                    src={project.coverImage}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 bg-[#0D0D12]/80 backdrop-blur-md px-2 py-1 rounded-md border border-white/10">
                    <p className="text-[10px] text-purple-400 font-medium uppercase tracking-wider">
                      {project.type}
                    </p>
                  </div>
                </div>

                {/* Informações */}
                <div className="p-5 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm text-slate-400 line-clamp-2 leading-relaxed">
                      {project.shortDescription}
                    </p>
                  </div>
                  <div className="mt-4 pt-4 border-t border-white/5 text-xs text-purple-400 font-semibold group-hover:text-purple-300 transition-colors flex justify-between items-center">
                    Ver detalhes{" "}
                    <span>
                      {" "}
                      <Eye size={16} />
                    </span>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
