"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaWhatsapp,
  FaInstagram,
  FaDownload,
  FaWebAwesome,
} from "react-icons/fa6";

export default function Profile() {
  return (
    <div className="bg-surface-card border border-white/5 rounded-[20px] p-5 glow-purple">
      <div className="flex justify-between items-start mb-3">
        <div className="w-30 h-30 bg-gradient-to-br from-purple-600/30 to-blue-500/20 rounded-2xl border border-purple-500/40 flex-shrink-0">
          <Image
            src={"https://i.imgur.com/s6fmlKP.jpeg"}
            className="rounded-2xl "
            width={120}
            height={120}
            alt="Foto de Perfil"
          />
        </div>

        <div className="flex flex-wrap justify-end gap-2">
          <div className="flex items-center gap-1.5 bg-surface-hover border border-white/5 px-3 py-1.5 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-micro text-slate-300 font-medium">
              Disponível
            </span>
          </div>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/curriculo.pdf" // Caminho do arquivo que está na pasta public
            download="Curriculo ValcineiJr.pdf" // Nome que o arquivo terá quando baixar
            className="bg-surface-hover hover:bg-white/10 border border-white/5 text-slate-300 px-3 py-1.5 rounded-full text-micro font-medium transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            Currículo{" "}
            <span className="text-purple-400 ">
              <FaDownload size={15} />
            </span>
          </motion.a>
        </div>
      </div>

      <div className="mb-3 text-center md:text-left">
        <h1 className="text-4xl font-bold text-white tracking-tight">
          Valcinei Junior
        </h1>
        <p className="text-xs font-medium text-slate-400 mt-0.5">
          Engenheiro Front-End & <span className="text-purple-400">UI</span>
        </p>
      </div>

      <div className="bg-surface-hover border border-white/5 rounded-2xl p-2.5 flex flex-wrap justify-center md:justify-start gap-2 mb-4">
        <span className="px-2 py-1 bg-white/5 rounded-lg text-micro text-slate-300 flex items-center gap-1.5">
          <span className="text-purple-400">📍</span> Rio de Janeiro, BR
        </span>
        <span className="px-2 py-1 bg-white/5 rounded-lg text-micro text-slate-300 flex items-center gap-1.5">
          <span className="text-purple-400">🎓</span> Univ. São José
        </span>
        <span className="px-2 py-1 bg-white/5 rounded-lg text-micro text-slate-300 flex items-center gap-1.5">
          <span className="text-purple-400">
            <FaWebAwesome size={10} />
          </span>{" "}
          Engenheiro Front-End & UI
        </span>
      </div>

      <div className="flex gap-2">
        {/* Lembrete: Trocar para o seu usuário do Instagram e número do WhatsApp */}
        <motion.a
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          href="https://ig.me/m/valcineifurtado"
          target="_blank"
          className="flex-1 bg-surface-hover hover:bg-white/10 text-slate-300 py-2.5 rounded-xl font-medium transition-colors border border-white/5 text-mini flex items-center justify-center gap-2"
        >
          <span className="text-pink-500">
            {" "}
            <FaInstagram size={20} />
          </span>{" "}
          Mande uma DM (Instagram)
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          href="https://wa.me/5521988800405"
          target="_blank"
          className="flex-1 bg-surface-hover hover:bg-white/10 text-slate-300 py-2.5 rounded-xl font-medium transition-colors border border-white/5 text-mini flex items-center justify-center gap-2"
        >
          <span className="text-green-400">
            <FaWhatsapp size={20} />
          </span>{" "}
          Fale comigo no WhatsApp
        </motion.a>
      </div>
    </div>
  );
}
