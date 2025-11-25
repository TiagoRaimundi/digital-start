"use client";

import { motion } from "framer-motion";
import { MessageCircle, X } from "lucide-react";
import { useState } from "react";

export default function WhatsAppFloat() {
  const [showTooltip, setShowTooltip] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  // Show tooltip after 3 seconds, hide after 10 seconds
  useState(() => {
    const showTimer = setTimeout(() => setShowTooltip(true), 3000);
    const hideTimer = setTimeout(() => setShowTooltip(false), 10000);
    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  });

  if (isDismissed) return null;

  return (
    <>
      {/* Tooltip */}
      <motion.div
        initial={{ opacity: 0, x: 20, scale: 0.8 }}
        animate={{
          opacity: showTooltip ? 1 : 0,
          x: showTooltip ? 0 : 20,
          scale: showTooltip ? 1 : 0.8,
        }}
        className="fixed bottom-24 right-6 z-50 pointer-events-none"
      >
        {showTooltip && (
          <div className="relative">
            <div className="bg-gradient-to-r from-blue-900 via-purple-900 to-pink-900 text-white px-6 py-4 rounded-2xl shadow-2xl max-w-xs border-2 border-white/20 backdrop-blur-sm">
              <button
                onClick={() => setShowTooltip(false)}
                className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center pointer-events-auto hover:scale-110 transition-transform"
              >
                <X size={14} />
              </button>
              <p className="text-sm font-semibold mb-1">💬 Precisa de ajuda?</p>
              <p className="text-xs text-white/90">
                Fale conosco agora pelo WhatsApp!
              </p>
            </div>
            {/* Arrow */}
            <div className="absolute -bottom-2 right-8 w-4 h-4 bg-gradient-to-br from-pink-900 to-purple-900 transform rotate-45 border-r-2 border-b-2 border-white/20" />
          </div>
        )}
      </motion.div>

      {/* Main Button */}
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{
          delay: 1.5,
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
        className="fixed bottom-6 right-6 z-50"
      >
        <motion.a
          href="https://wa.me/5549999238553"
          target="_blank"
          rel="noopener"
          whileHover={{ scale: 1.15, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
          className="relative block"
          aria-label="Fale conosco no WhatsApp"
        >
          {/* Animated Rings */}
          <span className="absolute inset-0 rounded-full bg-green-400 opacity-75 animate-ping" />
          <span className="absolute inset-0 rounded-full bg-green-400 opacity-50 animate-pulse" />

          {/* Glow Effect */}
          <motion.div
            animate={{
              boxShadow: [
                "0 0 20px rgba(34, 197, 94, 0.5)",
                "0 0 40px rgba(34, 197, 94, 0.8)",
                "0 0 20px rgba(34, 197, 94, 0.5)",
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center shadow-2xl border-4 border-white"
          >
            <MessageCircle
              className="w-8 h-8 sm:w-10 sm:h-10 text-white"
              strokeWidth={2.5}
            />
          </motion.div>

          {/* Notification Badge */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 2, type: "spring" }}
            className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg border-2 border-white"
          >
            1
          </motion.div>
        </motion.a>

        {/* Floating Text */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2 }}
          className="absolute -top-12 right-0 bg-white px-4 py-2 rounded-lg shadow-xl border border-gray-200 whitespace-nowrap hidden sm:block"
        >
          <p className="text-xs font-bold text-gray-900">Fale Conosco!</p>
          <div className="absolute -bottom-1 right-6 w-3 h-3 bg-white transform rotate-45 border-r border-b border-gray-200" />
        </motion.div>
      </motion.div>
    </>
  );
}
