"use client";
import { motion } from "framer-motion";
import { Button } from "./ui/button";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full flex items-center justify-between px-8 md:px-16 py-8 max-w-[1600px] mx-auto relative z-10"
    >
      <div className="flex flex-col items-center select-none cursor-pointer group">
        <span className="font-cursive text-5xl text-brand leading-none group-hover:scale-105 transition-transform origin-left">
          VIZN
        </span>
        <span className="text-[10px] tracking-[0.2em] font-bold text-brand mt-0.5 ml-1">
          PROTOCOL
        </span>
      </div>

      <div className="hidden md:flex items-center gap-10 text-sm font-bold text-gray-800 tracking-wide">
        <a href="#" className="hover:text-brand transition-colors">Pillars</a>
        <a href="#" className="hover:text-brand transition-colors">Project Highlights</a>
        <a href="#" className="hover:text-brand transition-colors">Research</a>
        <a href="#" className="hover:text-brand transition-colors">About Us</a>
      </div>

      <Button className="hidden md:flex bg-brand hover:bg-brand-hover text-white px-8 rounded-lg font-bold tracking-wide">
        Open App
      </Button>
    </motion.nav>
  );
}