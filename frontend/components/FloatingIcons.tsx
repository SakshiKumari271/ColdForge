"use client";

import { motion } from "framer-motion";
import { Mail, Shield, Zap, Search, Code, Globe } from "lucide-react";

const icons = [
  { Icon: Mail, x: "-20%", y: "15%", color: "text-blue-500", scale: 1.2, delay: 0 },
  { Icon: Shield, x: "25%", y: "-10%", color: "text-indigo-500", scale: 1, delay: 2 },
  { Icon: Zap, x: "-15%", y: "45%", color: "text-purple-500", scale: 0.8, delay: 4 },
  { Icon: Search, x: "30%", y: "40%", color: "text-slate-400", scale: 1.1, delay: 1 },
  { Icon: Code, x: "10%", y: "60%", color: "text-primary/40", scale: 0.9, delay: 3 },
  { Icon: Globe, x: "-25%", y: "-5%", color: "text-accent/30", scale: 1.3, delay: 5 },
];

export function FloatingIcons() {
  return (
    <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden select-none">
      {icons.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 0.2, 0.1, 0],
            scale: [0.8, item.scale, 0.8],
            x: [item.x, `${parseInt(item.x) + 5}%`, item.x],
            y: [item.y, `${parseInt(item.y) - 5}%`, item.y],
            rotate: [0, 20, -20, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: item.delay,
          }}
          className={`absolute left-1/2 top-1/2 ${item.color}`}
          style={{ transform: `translate(${item.x}, ${item.y})` }}
        >
          <item.Icon size={48} strokeWidth={1} />
        </motion.div>
      ))}
    </div>
  );
}
