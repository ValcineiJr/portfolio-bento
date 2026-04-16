"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

import Arsenal from "./components/Arsenal";
import Projects from "./components/Projects";
import Solutions from "./components/Solutions";
import Stats from "./components/Stats";
import Profile from "./components/Profile";
import CTA from "./components/CTA";
import WorkFlow from "./components/WorkFlow";
import Social from "./components/Social";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20,
    },
  },
};

export default function Portfolio() {
  return (
    // Aumentamos o padding lateral na tela grande (md:p-8)
    <main className="min-h-screen p-4 md:p-8 flex items-center justify-center">
      {/* Aumentamos a largura máxima de 1200px para 1350px */}
      <div className="w-full max-w-[1350px]">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          // Aumentamos o espaçamento (gap) de 3 para 5 nas telas grandes
          className="grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-5 items-start"
        >
          {/* =========================================
              COLUNA 1: ARSENAL, PROJETOS E SOLUÇÕES
              ========================================= */}
          <div className="flex flex-col gap-4 lg:gap-5 lg:col-span-1 order-2 lg:order-1">
            <motion.div variants={itemVariants}>
              <Arsenal />
            </motion.div>
            <motion.div variants={itemVariants}>
              <Projects />
            </motion.div>
            <motion.div variants={itemVariants}>
              <Solutions />
            </motion.div>
          </div>

          {/* =========================================
              COLUNA 2 & 3: PERFIL PRINCIPAL & CTA (Centro)
              ========================================= */}
          <div className="flex flex-col gap-4 lg:gap-5 lg:col-span-2 order-1 lg:order-2">
            <motion.div variants={itemVariants}>
              <Stats />
            </motion.div>
            <motion.div variants={itemVariants}>
              <Profile />
            </motion.div>
            <motion.div variants={itemVariants}>
              <CTA />
            </motion.div>
          </div>

          {/* =========================================
              COLUNA 4: WORKFLOW & REDES SOCIAIS (Direita)
              ========================================= */}
          <div className="flex flex-col gap-4 lg:gap-5 lg:col-span-1 order-3">
            <motion.div variants={itemVariants}>
              <WorkFlow />
            </motion.div>
            <motion.div variants={itemVariants}>
              <Social />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
