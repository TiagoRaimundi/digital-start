"use client";

import { motion } from "framer-motion";
import { Paintbrush, ArrowRight, Sparkles, Star } from "lucide-react";

interface ProductsProps {
  onProductClick: (product: any) => void;
}

export default function Products({ onProductClick }: ProductsProps) {
  const products = [
    {
      id: 1,
      name: "Coral Decora Seda",
      category: "Tintas Internas",
      image:
        "https://images.tcdn.com.br/img/img_prod/1223004/tinta_acrilica_rende_muito_fosco_base_pm_cores_coral_18l_553_1_273cc6deaea7077aee0ea8ab52b69865.jpg",
      description: "Tinta acrílica acetinada premium para interiores",
      features: [
        "Acabamento sedoso",
        "Alto rendimento",
        "Lavável",
        "Fácil aplicação",
      ],
      colors: "2000+ cores",
      badge: "Mais Vendido",
      gradient: "from-pink-500 to-purple-600",
    },
    {
      id: 2,
      name: "Coral Premium",
      category: "Tintas Externas",
      image:
        "https://www.bigcorestintas.com.br/lojas/00044051/prod/Fosco-Master-36L.jpg",
      description: "Proteção máxima contra intempéries",
      features: [
        "Resistente ao tempo",
        "Anti-mofo",
        "Secagem rápida",
        "Durabilidade",
      ],
      colors: "Todas as cores",
      badge: "Premium",
      gradient: "from-blue-500 to-cyan-600",
    },
    {
      id: 3,
      name: "Montana",
      category: "Linha Premium",
      image:
        "https://cdn.awsli.com.br/600x450/941/941759/produto/139855668/coralar-branco-00-0fq7vshf96.png",
      description: "Qualidade superior para projetos exigentes",
      features: [
        "Alta cobertura",
        "Acabamento perfeito",
        "Durabilidade extrema",
        "Cores intensas",
      ],
      colors: "Cartela exclusiva",
      badge: "Premium",
      gradient: "from-indigo-500 to-purple-600",
    },
    {
      id: 4,
      name: "Sparlack",
      category: "Tintas Especiais",
      image:
        "https://images.tcdn.com.br/img/img_prod/551909/tinta_acrilica_coralar_cores_18_litros_coral_a_vista_1043_1_6666271686d2d455a701e7ab7b132727.jpg",
      description: "Acabamentos especiais e diferenciados",
      features: [
        "Efeitos únicos",
        "Alta qualidade",
        "Fácil aplicação",
        "Durabilidade",
      ],
      colors: "Variações exclusivas",
      badge: "Exclusivo",
      gradient: "from-purple-500 to-pink-600",
    },
    {
      id: 5,
      name: "Futura Premium",
      category: "Alta Performance",
      image:
        "https://images.tcdn.com.br/img/img_prod/727726/grafite_claro_coral_3_6l_657_1_20200122151607.jpg",
      description: "Tecnologia avançada em tintas",
      features: [
        "Tecnologia premium",
        "Resistência máxima",
        "Acabamento superior",
        "Longa duração",
      ],
      colors: "Linha completa",
      badge: "Tecnologia",
      gradient: "from-cyan-500 to-blue-600",
    },
    {
      id: 6,
      name: "Anjo Tintas",
      category: "Linha Econômica",
      image:
        "https://images.tcdn.com.br/img/img_prod/1076270/tinta_acrilica_rende_muito_3_2l_azul_profundo_fosco_coral_167637669_1_67fbf3b0bd9e8e8c44d60ada70de0cd8.png",
      description: "Qualidade com o melhor custo-benefício",
      features: [
        "Ótimo preço",
        "Boa cobertura",
        "Rendimento",
        "Cores vibrantes",
      ],
      colors: "Cartela completa",
      badge: "Melhor Custo",
      gradient: "from-yellow-500 to-orange-600",
    },
  ];

  return (
    <section
      id="produtos"
      className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-gray-50 via-white to-gray-50 overflow-hidden"
    >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 right-[10%] w-64 h-64 sm:w-72 sm:h-72 bg-yellow-400/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-20 left-[15%] w-72 h-72 sm:w-96 sm:h-96 bg-purple-400/10 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-gradient-to-r from-yellow-400/20 to-orange-500/20 border-2 border-yellow-400/30 backdrop-blur-sm mb-6 shadow-lg"
          >
            <Paintbrush className="w-4 h-4 sm:w-5 sm:h-5 text-orange-600" />
            <span className="text-xs sm:text-sm font-bold text-orange-700">
              Nossos Produtos
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4"
          >
            <span className="bg-gradient-to-r from-blue-900 via-purple-800 to-pink-800 bg-clip-text text-transparent">
              Catálogo Completo
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto"
          >
            As melhores marcas do mercado com{" "}
            <span className="font-bold bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
              preços imbatíveis
            </span>
          </motion.p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => onProductClick(product)}
              className="group cursor-pointer relative"
            >
              {/* Glow Effect on Hover */}
              <div
                className={`absolute -inset-0.5 bg-gradient-to-r ${product.gradient} rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`}
              />

              {/* Card */}
              <div className="relative bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2 sm:group-hover:-translate-y-3 border-2 border-transparent group-hover:border-gray-100">
                {/* Image Container */}
                <div className="relative h-56 sm:h-64 lg:h-72 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />

                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Badge */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.2, type: "spring" }}
                    className={`absolute top-3 sm:top-4 left-3 sm:left-4 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-gradient-to-r ${product.gradient} text-white text-xs font-bold shadow-lg flex items-center gap-1.5`}
                  >
                    <Star
                      className="w-3 h-3 sm:w-3.5 sm:h-3.5"
                      fill="currentColor"
                    />
                    {product.badge}
                  </motion.div>

                  {/* Colors Badge */}
                  <div className="absolute top-3 sm:top-4 right-3 sm:right-4 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/95 backdrop-blur-sm text-gray-900 text-xs font-bold shadow-lg border border-gray-200">
                    {product.colors}
                  </div>

                  {/* Hover Icon */}
                  <div className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4 w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 shadow-xl">
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-900" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-6">
                  {/* Category */}
                  <div
                    className={`inline-flex items-center gap-1.5 text-xs font-bold uppercase mb-3 px-3 py-1 rounded-full bg-gradient-to-r ${product.gradient} bg-clip-text text-transparent border border-gray-200`}
                  >
                    <Sparkles className="w-3 h-3" />
                    {product.category}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 group-hover:bg-gradient-to-r group-hover:from-blue-900 group-hover:to-purple-900 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                    {product.name}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-gray-600 mb-4 line-clamp-2">
                    {product.description}
                  </p>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {product.features.slice(0, 4).map((feature, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-1.5 text-xs text-gray-600"
                      >
                        <div
                          className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${product.gradient}`}
                        />
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="text-xs sm:text-sm font-bold bg-gradient-to-r from-blue-900 to-purple-900 bg-clip-text text-transparent">
                      Ver detalhes
                    </span>
                    <div
                      className={`p-2 rounded-lg bg-gradient-to-r ${product.gradient} bg-opacity-10 transform group-hover:translate-x-1 transition-transform duration-300`}
                    >
                      <ArrowRight
                        className={`w-4 h-4 bg-gradient-to-r ${product.gradient} bg-clip-text text-transparent`}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12 sm:mt-16"
        >
          <motion.a
            href="https://wa.me/5549999238553"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 60px rgba(251, 191, 36, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 font-bold text-base sm:text-lg shadow-2xl hover:shadow-yellow-500/50 transition-all duration-300"
          >
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
            Solicite um Orçamento
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
