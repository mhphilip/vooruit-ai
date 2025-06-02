import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Brain, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled
        ? "bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-lg"
        : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <motion.div
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <svg width="40" height="40" viewBox="0 0 40 40" className="text-orange-400">
              <defs>
                <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#f97316" />
                  <stop offset="50%" stopColor="#10b981" />
                  <stop offset="100%" stopColor="#8b5cf6" />
                </linearGradient>
              </defs>
              <circle cx="20" cy="20" r="18" fill="none" stroke="url(#logoGradient)" strokeWidth="2" />
              <circle cx="20" cy="20" r="12" fill="none" stroke="url(#logoGradient)" strokeWidth="1.5" />
              <circle cx="20" cy="20" r="6" fill="url(#logoGradient)" />
              <circle cx="20" cy="8" r="2" fill="#f97316" />
              <circle cx="32" cy="20" r="2" fill="#10b981" />
              <circle cx="20" cy="32" r="2" fill="#8b5cf6" />
              <circle cx="8" cy="20" r="2" fill="#f97316" />
            </svg>
            <span className="text-2xl font-black bg-gradient-to-r from-orange-500 to-green-400 bg-clip-text text-transparent">
              VOORUIT.AI
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("diensten")}
              className={`transition-colors duration-300 ${isScrolled ? "text-gray-700 hover:text-orange-600" : "text-white hover:text-orange-400"
                }`}
            >
              Diensten
            </button>
            <button
              onClick={() => scrollToSection("over")}
              className={`transition-colors duration-300 ${isScrolled ? "text-gray-700 hover:text-orange-600" : "text-white hover:text-orange-400"
                }`}
            >
              Over Ons
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className={`transition-colors duration-300 ${isScrolled ? "text-gray-700 hover:text-orange-600" : "text-white hover:text-orange-400"
                }`}
            >
              Contact
            </button>
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-gradient-to-r from-orange-500 to-red-500 text-white hover:scale-105 transition-transform duration-300"
            >
              Plan een gesprek
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden transition-colors duration-300 ${isScrolled ? "text-gray-700 hover:text-orange-600" : "text-white hover:text-orange-400"
              }`}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200"
          >
            <div className="px-4 py-6 space-y-4">
              <button
                onClick={() => scrollToSection("diensten")}
                className="block w-full text-left text-gray-700 hover:text-orange-600 transition-colors duration-300 py-2"
              >
                Diensten
              </button>
              <button
                onClick={() => scrollToSection("over")}
                className="block w-full text-left text-gray-700 hover:text-orange-600 transition-colors duration-300 py-2"
              >
                Over Ons
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block w-full text-left text-gray-700 hover:text-orange-600 transition-colors duration-300 py-2"
              >
                Contact
              </button>
              <Button
                onClick={() => scrollToSection("contact")}
                className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white mt-4"
              >
                Plan een gesprek
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
