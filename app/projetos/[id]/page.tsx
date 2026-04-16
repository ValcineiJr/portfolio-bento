"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Monitor,
  X,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { useProjectStore } from "@/app/store/useProjectStore";

export default function ProjectMonitor() {
  const params = useParams();
  const router = useRouter();
  const projectId = params.id as string;

  const allProjects = useProjectStore((state) => state.projects);
  const currentIndex = allProjects.findIndex((p) => p.id === projectId);
  const project = allProjects[currentIndex];

  const [currentImg, setCurrentImg] = useState(0);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-white">
        <h1 className="text-2xl mb-4 text-white">Projeto não encontrado.</h1>
        <Link href="/projetos" className="text-purple-400">
          Voltar para listagem
        </Link>
      </div>
    );
  }

  const nextImg = () =>
    setCurrentImg((prev) =>
      prev === project.gallery.length - 1 ? 0 : prev + 1,
    );
  const prevImg = () =>
    setCurrentImg((prev) =>
      prev === 0 ? project.gallery.length - 1 : prev - 1,
    );

  const prevProject =
    allProjects[currentIndex === 0 ? allProjects.length - 1 : currentIndex - 1];
  const nextProject =
    allProjects[currentIndex === allProjects.length - 1 ? 0 : currentIndex + 1];

  return (
    <main className="min-h-screen flex items-center justify-center p-4 py-12 relative overflow-x-hidden">
      <button
        onClick={() => router.push("/projetos")}
        className="absolute cursor-pointer top-6 right-6 md:top-12 md:right-12 bg-surface-card border border-white/10 p-3 rounded-full text-slate-400 hover:text-white hover:bg-white/5 transition-all z-50"
      >
        <X size={24} />
      </button>

      <div className="w-full max-w-6xl">
        <motion.div
          key={project.id}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="bg-surface-card border-2 border-white/5 rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row relative w-full lg:h-[650px]"
        >
          {/* Lado Esquerdo: Fundo mais claro (surface-hover) para parecer um estúdio */}
          <div className="lg:w-[55%] bg-[#1A1A24] relative aspect-video lg:aspect-auto h-full border-b lg:border-b-0 lg:border-r border-white/5 flex items-center justify-center">
            <AnimatePresence mode="wait">
              {/* Adicionado padding para a imagem não colar nas bordas */}
              <motion.div
                key={currentImg}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 p-6 md:p-12 flex items-center justify-center"
              >
                {/* CORREÇÃO: object-contain para mostrar TUDO sem cortar laterais */}
                <Image
                  src={project.gallery[currentImg]}
                  alt={`${project.title} screenshot`}
                  fill
                  className="w-full h-full object-contain drop-shadow-2xl opacity-95 hover:opacity-100 transition-opacity"
                />
              </motion.div>
            </AnimatePresence>

            {project.gallery.length > 1 && (
              <>
                <button
                  onClick={prevImg}
                  className="absolute left-6 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white p-2.5 rounded-full backdrop-blur-md transition-colors z-10"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={nextImg}
                  className="absolute right-6 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white p-2.5 rounded-full backdrop-blur-md transition-colors z-10"
                >
                  <ChevronRight size={20} />
                </button>
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 bg-black/40 px-4 py-2 rounded-full backdrop-blur-md z-10">
                  {project.gallery.map((_, idx) => (
                    <div
                      key={idx}
                      className={`w-2 h-2 rounded-full ${idx === currentImg ? "bg-purple-500" : "bg-white/30"}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Lado Direito: Informações */}
          <div className="lg:w-[45%] flex flex-col h-full p-8 lg:p-12">
            <div className="mb-8 flex items-center gap-4 flex-shrink-0">
              <div className="bg-purple-500/10 text-purple-400 p-3 rounded-2xl border border-purple-500/20">
                <Monitor size={24} />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-1">
                  Detalhes do Projeto
                </p>
                <h1 className="text-3xl font-bold text-white tracking-tight">
                  {project.title}
                </h1>
              </div>
            </div>

            <div className="flex-grow overflow-y-auto pr-2">
              <p className="text-slate-400 text-sm leading-loose">
                {project.fullDescription}
              </p>
            </div>

            <div className="mt-6 flex-shrink-0">
              <div className="grid grid-cols-1 gap-3 h-[108px] content-end">
                {project.links.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-between bg-surface-hover hover:bg-white/10 border border-white/5 py-3.5 px-6 rounded-xl text-white font-medium text-sm transition-colors group"
                  >
                    <span className="flex items-center gap-3">
                      <span className="text-xl">{link.icon}</span> {link.label}
                    </span>
                    <span className="text-slate-500 group-hover:text-purple-400 transition-colors transform group-hover:translate-x-1">
                      →
                    </span>
                  </a>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
                <Link
                  href={`/projetos/${prevProject.id}`}
                  className="flex items-center gap-2 text-xs font-medium text-slate-400 hover:text-white transition-colors group"
                >
                  <ArrowLeft
                    size={16}
                    className="transform group-hover:-translate-x-1 transition-transform"
                  />
                  Anterior
                </Link>

                <span className="text-[10px] text-slate-500 font-bold tracking-widest">
                  {currentIndex + 1} / {allProjects.length}
                </span>

                <Link
                  href={`/projetos/${nextProject.id}`}
                  className="flex items-center gap-2 text-xs font-medium text-slate-400 hover:text-white transition-colors group"
                >
                  Próximo
                  <ArrowRight
                    size={16}
                    className="transform group-hover:translate-x-1 transition-transform"
                  />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="w-1/3 h-4 bg-gradient-to-b from-white/10 to-transparent mx-auto rounded-b-3xl opacity-50"></div>
      </div>
    </main>
  );
}
