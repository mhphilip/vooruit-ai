import { motion } from "framer-motion";
import { Brain } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="flex items-center space-x-3 mb-4 md:mb-0"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <svg width="40" height="40" viewBox="0 0 40 40" className="text-orange-400">
              <defs>
                <linearGradient id="footerLogoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#f97316" />
                  <stop offset="50%" stopColor="#10b981" />
                  <stop offset="100%" stopColor="#8b5cf6" />
                </linearGradient>
              </defs>
              <circle cx="20" cy="20" r="18" fill="none" stroke="url(#footerLogoGradient)" strokeWidth="2" />
              <circle cx="20" cy="20" r="12" fill="none" stroke="url(#footerLogoGradient)" strokeWidth="1.5" />
              <circle cx="20" cy="20" r="6" fill="url(#footerLogoGradient)" />
              <circle cx="20" cy="8" r="2" fill="#f97316" />
              <circle cx="32" cy="20" r="2" fill="#10b981" />
              <circle cx="20" cy="32" r="2" fill="#8b5cf6" />
              <circle cx="8" cy="20" r="2" fill="#f97316" />
            </svg>
            <span className="text-2xl font-black bg-gradient-to-r from-orange-500 to-green-400 bg-clip-text text-transparent">
              VOORUIT.AI
            </span>
          </motion.div>

          <div className="text-center md:text-right">
            <p className="text-gray-300 mb-2 font-semibold">AI vooruitgedacht.</p>
            <p className="text-sm text-gray-400">Strategie, tooling en AI-begeleiding voor het MKB.</p>
          </div>
        </motion.div>

        <motion.div
          className="mt-8 pt-8 text-center text-sm text-gray-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p>&copy; 2025 VOORUIT.AI. Alle rechten voorbehouden.</p>
        </motion.div>
      </div>
    </footer>
  );
}
