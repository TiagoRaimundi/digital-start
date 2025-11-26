"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, MessageCircle, Check, Sparkles, Star, Palette } from "lucide-react";

interface ProductModalProps {
  product: any;
  onClose: () => void;
}

export default function ProductModal({ product, onClose }: ProductModalProps) {
  if (!product) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-50 bg-gradient-to-br from-blue-900/95 via-purple-900/95 to-pink-900/95 backdrop-blur-xl flex items-center justify-center p-4 overflow-y-auto"
      >
        {/* Animated Background Orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-20 left-20 w-64 h-64 bg-yellow-500/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute bottom-20 right-20 w-72 h-72 bg-pink-500/20 rounded-full blur-3xl"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          onClick={(e) => e.stopPropagation()}
          className="relative bg-white/95 backdrop-blur-xl rounded-3xl max-w-4xl w-full overflow-hidden shadow-2xl border-2 border-white/20 my-8"
        >
          {/* Close Button */}
          <motion.button
            onClick={onClose}
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            className="absolute top-4 right-4 z-20 w-12 h-12 rounded-full bg-gradient-to-r from-red-500 to-pink-500 text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all"
          >
            <X size={24} />
          </motion.button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Image Section */}
            <div className="relative h-96 lg:h-full bg-gradient-to-br from-gray-100 to-gray-200">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />

              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* Floating Badges */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.2, type: "spring" }}
                className={`absolute top-6 left-6 px-4 py-2 rounded-full bg-gradient-to-r ${product.gradient} text-white text-sm font-bold shadow-2xl flex items-center gap-2`}
              >
                <Star className="w-4 h-4" fill="currentColor" />
                {product.badge}
              </motion.div>

              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, type: "spring" }}
                className="absolute bottom-6 left-6 px-5 py-3 rounded-full bg-white/95 backdrop-blur-sm text-gray-900 font-bold shadow-2xl flex items-center gap-2 border-2 border-white/50"
              >
                <Palette className="w-5 h-5 text-orange-500" />
                {product.colors}
              </motion.div>
            </div>

            {/* Content Section */}
            <div className="p-8 lg:p-10 flex flex-col">
              {/* Category Badge */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className={`inline-flex items-center gap-2 text-xs font-bold uppercase mb-4 px-4 py-2 rounded-full bg-gradient-to-r ${product.gradient} text-white w-fit shadow-lg`}
              >
                <Sparkles className="w-3.5 h-3.5" />
                {product.category}
              </motion.div>

              {/* Title */}
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-900 via-purple-900 to-pink-900 bg-clip-text text-transparent"
              >
                {product.name}
              </motion.h3>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-lg text-gray-700 mb-8 leading-relaxed"
              >
                {product.description}
              </motion.p>

              {/* Features */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex-1"
              >
                <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <div
                    className={`w-1 h-6 rounded-full bg-gradient-to-b ${product.gradient}`}
                  />
                  Características
                </h4>
                <ul className="space-y-3 mb-8">
                  {product.features.map((feature: string, i: number) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 + i * 0.1 }}
                      className="flex items-start gap-3 text-gray-700 group"
                    >
                      <div
                        className={`mt-0.5 w-6 h-6 rounded-lg bg-gradient-to-br ${product.gradient} flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform`}
                      >
                        <Check className="w-4 h-4 text-white" strokeWidth={3} />
                      </div>
                      <span className="text-base">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="space-y-3"
              >
                <motion.a
                  href="https://wa.me/5549999238553"
                  target="_blank"
                  rel="noopener"
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 20px 60px rgba(251, 191, 36, 0.4)",
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 font-bold text-lg shadow-2xl hover:shadow-yellow-500/50 transition-all duration-300"
                >
                  <MessageCircle size={24} />
                  Fazer Pedido
                </motion.a>

                <motion.button
                  onClick={onClose}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full inline-flex items-center justify-center gap-3 px-8 py-3 rounded-xl bg-white/50 backdrop-blur-sm border-2 border-gray-200 text-gray-700 font-semibold hover:bg-white/70 transition-all duration-300"
                >
                  Continuar Navegando
                </motion.button>
              </motion.div>
            </div>
          </div>

          {/* Decorative Element */}
          <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500" />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
