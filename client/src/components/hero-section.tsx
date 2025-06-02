import { motion } from "framer-motion";
import { Mail, Zap, Brain, Network, ArrowRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-gray-50 to-white">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-100 via-green-50 to-purple-100" />
      </div>

      {/* Subtle Pattern Elements */}
      <motion.div
        className="absolute top-20 right-20 w-8 h-8 bg-orange-200 rounded-full opacity-30"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <motion.div
        className="absolute bottom-32 left-16 w-6 h-6 bg-green-200 rounded-full opacity-25"
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.25, 0.5, 0.25]
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
      />
      
      <motion.div
        className="absolute top-1/2 right-32 w-4 h-4 bg-purple-200 rounded-full opacity-20"
        animate={{ 
          scale: [1, 1.4, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight text-gray-900"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="block">AI TRANSFORMEERT</span>
              <span className="relative block">
                <span className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent">
                  JOUW BEDRIJF
                </span>
                <motion.div
                  className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-orange-500 to-green-500 rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                />
              </span>
              <span className="block mt-4 text-3xl md:text-5xl lg:text-6xl">
                WIJ HELPEN{" "}
                <span className="bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent">
                  VOORUIT
                </span>
              </span>
            </motion.h1>

            <motion.p 
              className="text-xl md:text-2xl text-gray-600 leading-relaxed font-light max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Strategisch AI-advies voor MKB. Van roadmap tot implementatie.
            </motion.p>

            <motion.div 
              className="light-glassmorphism p-6 md:p-8 rounded-2xl border border-orange-500/20 shadow-xl max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-6">
                <Brain className="w-8 h-8 text-orange-600" />
                <p className="text-lg font-bold text-gray-800 text-center sm:text-left">
                  <span className="text-orange-600 font-mono">INTERIM CHIEF AI OFFICER</span>
                  <span className="block sm:inline sm:ml-2">vast bedrag per maand</span>
                </p>
              </div>
              
              <motion.a
                href="mailto:hello@vooruit.ai"
                className="inline-flex items-center space-x-3 bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 md:px-8 py-3 md:py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto justify-center"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Mail className="w-6 h-6" />
                <span>hello@vooruit.ai</span>
                <Zap className="w-5 h-5" />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
