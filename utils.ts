"use client";
import { motion } from "framer-motion";

export default function NorthStar() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="max-w-[1400px] mx-auto px-6 md:px-12 mt-20 mb-32"
    >
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 tracking-tight">
        Our North Star
      </h2>
      <p className="text-gray-500 text-sm md:text-base">
        The goal and purpose of our ecosystem
      </p>
    </motion.div>
  );
}