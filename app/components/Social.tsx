"use client";

import { motion } from "framer-motion";
import { IconType } from "react-icons";
import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa6";

type ButtonProps = {
  title: string;
  Icon: IconType;
  link: string;
};

const Button = ({ title, Icon, link }: ButtonProps) => {
  return (
    <motion.button
      whileHover={{ scale: 1.02, x: 4 }}
      whileTap={{ scale: 0.98 }}
      className="w-full cursor-pointer bg-surface-hover hover:bg-white/5 border border-white/5 text-slate-300 py-2 px-3 rounded-xl font-medium transition-colors flex items-center gap-2 text-mini"
    >
      <a href={link} target="_blank" rel="noopener noreferrer">
        {" "}
        <span className="text-white text-sm flex gap-2 items-center">
          <span className="bg-white/5 border border-white/10 px-2 py-1 rounded-md">
            {" "}
            <Icon size={20} />
          </span>

          {title}
        </span>{" "}
      </a>
    </motion.button>
  );
};

export default function Social() {
  return (
    <div className="bg-surface-card border border-white/5 rounded-[20px] p-4">
      <h3 className="text-xs font-semibold text-slate-400 mb-3 flex items-center justify-center gap-2">
        <span className="text-purple-400">🚀</span> Redes
      </h3>
      <div className="space-y-2">
        <Button
          title="ValcineiJr"
          Icon={FaGithub}
          link="https://github.com/ValcineiJr"
        />
        <Button
          title="Valcinei Junior"
          Icon={FaLinkedinIn}
          link="https://www.linkedin.com/in/valcinei-junior/"
        />
        <Button
          title="Valcinei Furtado"
          Icon={FaInstagram}
          link="https://www.instagram.com/valcineifurtado/"
        />
      </div>
    </div>
  );
}
