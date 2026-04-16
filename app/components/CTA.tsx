"use client";

import { motion } from "framer-motion";

export default function CTA() {
  return (
    <div className="bg-surface-card border border-white/5 rounded-[20px] p-5 flex flex-col items-center justify-center text-center">
      <div className="w-8 h-8 bg-purple-500/10 rounded-full flex items-center justify-center mb-2 border border-purple-500/20">
        <span className="text-purple-400 text-sm">👑</span>
      </div>
      <h2 className="text-sm font-bold text-white mb-1">
        Vamos Trabalhar Juntos
      </h2>
      <p className="text-mini text-slate-400 mb-4 max-w-xs">
        Transformando designs densos em código limpo.
      </p>

      {/* Ajustado para centralizar um botão único com elegância */}
      <div className="w-full flex justify-center mt-2">
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="mailto:valcineifurtadotrab@gmail.com?subject=Contato via Portfólio"
          target="_blank" // <-- Adicione isso
          rel="noopener noreferrer" // <-- Adicione isso por segurança
          className="w-full sm:w-2/3 bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-xl font-medium transition-colors flex items-center justify-center gap-2 text-mini shadow-[0_0_15px_rgba(168,85,247,0.3)]"
        >
          <span className="text-white">✉️</span> Me envie um E-mail
        </motion.a>
      </div>
    </div>
  );
}
