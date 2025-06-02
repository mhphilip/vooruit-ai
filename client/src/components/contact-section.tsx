import { motion } from "framer-motion";
import { Mail, Zap, Brain, Network, ArrowRight } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-32 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-green-50 to-purple-50" />
      </div>

      {/* Subtle Pattern Elements */}
      <motion.div
        className="absolute top-20 left-20 w-6 h-6 bg-orange-200 rounded-full opacity-20"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-32 right-32 w-4 h-4 bg-green-200 rounded-full opacity-15"
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.15, 0.3, 0.15]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      <motion.div
        className="absolute top-1/3 right-16 w-3 h-3 bg-purple-200 rounded-full opacity-18"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.18, 0.35, 0.18]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      <div className="relative max-w-6xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-6xl lg:text-8xl font-black mb-12 tracking-tight text-gray-900"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            KLAAR VOOR{" "}
            <span className="relative">
              <span className="bg-gradient-to-r from-orange-500 to-green-500 bg-clip-text text-transparent">
                DE TOEKOMST
              </span>
              <motion.div
                className="absolute bottom-0 left-0 w-full h-3 bg-gradient-to-r from-orange-500 to-green-500 rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ delay: 1, duration: 1 }}
                viewport={{ once: true }}
              />
            </span>
            ?
          </motion.h2>

          <motion.p
            className="text-2xl text-gray-600 mb-16 max-w-4xl mx-auto leading-relaxed font-light"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Wij zijn er om je te begeleiden in deze transformatie en zorgen ervoor dat kosten en tijdsinvestering in lijn zijn met de waarde die AI jouw bedrijf kan bieden. Geen hype, maar praktische oplossingen die direct resultaat opleveren.
          </motion.p>

          {/* Main CTA Card */}
          <motion.div
            className="light-glassmorphism p-12 rounded-3xl border border-orange-500/20 shadow-xl max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-center justify-center space-x-4 mb-8">
              <Brain className="w-12 h-12 text-orange-600" />
              <Network className="w-10 h-10 text-green-600" />
              <Zap className="w-8 h-8 text-purple-600" />
            </div>

            <h3 className="text-3xl font-black mb-6 text-gray-900 font-mono">
              START DE TRANSITIE NAAR AI
            </h3>

            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              Plan een vrijblijvende digitale afspraak zodat we elkaar beter leren kennen en kunnen bespreken hoe AI jouw organisatie kan versterken. Geen verplichtingen, alleen een open gesprek over de mogelijkheden.
            </p>

            <motion.a
              href="mailto:hello@vooruit.ai"
              className="inline-flex items-center space-x-4 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-white px-12 py-6 rounded-2xl font-black text-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
              whileHover={{
                scale: 1.05
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="w-8 h-8" />
              <span>hello@vooruit.ai</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className="w-6 h-6" />
              </motion.div>
            </motion.a>

            <motion.p
              className="text-sm text-gray-500 mt-8 font-mono"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              viewport={{ once: true }}
            >
              PERSOONLIJK (EN MENSELIJK) ANTWOORD BINNEN 24 UUR
            </motion.p>
          </motion.div>


        </motion.div>
      </div>
    </section>
  );
}