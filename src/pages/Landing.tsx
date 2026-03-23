import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import profileImg from "@/assets/profile.jpg";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate("/cv")}
      className="min-h-screen bg-background flex items-center justify-center cursor-pointer select-none overflow-hidden relative"
    >
      {/* Ambient floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-primary/30"
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 0.6, 0],
            y: [0, -200],
            x: [0, (i % 2 === 0 ? 1 : -1) * 40],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            delay: i * 0.8,
            ease: "easeOut",
          }}
          style={{
            left: `${15 + i * 14}%`,
            bottom: "10%",
          }}
        />
      ))}

      <div className="flex flex-col items-center gap-8 px-6">
        {/* Profile image with ring animation */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.2 }}
          className="relative"
        >
          <motion.div
            className="absolute -inset-2 rounded-full border-2 border-primary/40"
            animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.1, 0.4] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          <img
            src={profileImg}
            alt="Twinemukama Innocent"
            className="w-36 h-36 md:w-44 md:h-44 rounded-full object-cover border-2 border-primary/50 shadow-lg shadow-primary/20"
          />
        </motion.div>

        {/* Name reveal */}
        <motion.div className="text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="font-mono text-primary text-xs tracking-[0.3em] uppercase mb-3"
          >
            Hello, I'm
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.7 }}
            className="text-5xl md:text-7xl font-display font-bold tracking-tight"
          >
            Twinemukama
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.7 }}
            className="text-5xl md:text-7xl font-display font-bold tracking-tight text-primary"
          >
            Innocent
          </motion.h1>
        </motion.div>

        {/* Animated line */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "6rem" }}
          transition={{ delay: 1.3, duration: 0.8, ease: "easeInOut" }}
          className="h-0.5 bg-primary/40"
        />

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="text-muted-foreground text-lg md:text-xl font-light tracking-wide"
        >
          Software Engineer
        </motion.p>

        {/* CTA hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2 }}
          className="mt-8"
        >
          <motion.p
            animate={{ opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="font-mono text-xs text-muted-foreground tracking-widest uppercase"
          >
            Click anywhere to enter
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default Landing;
