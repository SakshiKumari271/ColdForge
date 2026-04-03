"use client";

import { motion } from "framer-motion";

export function GridBackground() {
  return (
    <div className="absolute inset-0 -z-20 overflow-hidden">
      <div className="absolute inset-0 grid-subtle mask-radial-faded opacity-30" />
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-[10%] -left-[10%] h-[40%] w-[40%] rounded-full bg-primary/10 blur-[120px]"
      />
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute -bottom-[10%] -right-[10%] h-[50%] w-[50%] rounded-full bg-accent/10 blur-[120px]"
      />
    </div>
  );
}
