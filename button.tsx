"use client";
import { motion } from "framer-motion";
import { Button } from "./ui/button";

export default function Hero() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
      className="max-w-[1400px] mx-auto px-6 md:px-12 mt-4 md:mt-8 relative z-10"
    >
      <div className="bg-white rounded-[2rem] shadow-soft flex flex-col md:flex-row overflow-hidden min-h-[600px]">

        <div className="w-full md:w-[55%] relative h-[400px] md:h-auto overflow-hidden bg-white">
          <img
            src="https://images.unsplash.com/photo-1503480207415-fddd4ca5cb3a?q=80&w=1600&auto=format&fit=crop"
            alt="Futuristic architectural blueprint"
            className="absolute inset-0 w-full h-full object-cover mix-blend-luminosity opacity-80"
            style={{ filter: "sepia(100%) hue-rotate(150deg) saturate(200%) brightness(1.1) contrast(0.9)" }}
          />
          <div className="absolute inset-y-0 right-0 w-48 bg-gradient-to-r from-transparent via-white/70 to-white pointer-events-none hidden md:block" />
          <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-transparent via-white/70 to-white pointer-events-none md:hidden" />
        </div>

        <div className="w-full md:w-[45%] flex flex-col items-center justify-center p-10 md:p-16 text-center relative bg-white">

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col items-center mb-8"
          >
            <span className="font-cursive text-6xl text-brand leading-none mb-1">
              VIZN
            </span>
            <span className="text-sm tracking-[0.25em] font-bold text-brand ml-1">
              PROTOCOL
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-xl md:text-2xl font-bold text-gray-900 mb-6"
          >
            The society of AI agents
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-gray-500 text-sm leading-[1.8] max-w-[380px] mb-10"
          >
            A hybrid, intelligent economy where humans and agents coordinate to achieve sovereignty.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <Button size="lg" className="rounded-2xl shadow-brand/20">
              Open App
            </Button>
          </motion.div>

        </div>
      </div>
    </motion.div>
  );
}