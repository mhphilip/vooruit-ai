import { motion } from "framer-motion";
import { Check } from "lucide-react";

const benefits = [
  {
    title: "Strategisch Focus",
    description: "Geen technische implementatie, maar strategische begeleiding die écht impact heeft.",
    gradient: "from-blue-500 to-cyan-400"
  },
  {
    title: "Cutting-edge Kennis",
    description: "We volgen de nieuwste ontwikkelingen in AI agents, A2A-interacties en orkestratie.",
    gradient: "from-purple-500 to-green-400"
  },
  {
    title: "MKB-gericht",
    description: "Specifiek ontworpen voor middelgrote bedrijven die snel willen schakelen.",
    gradient: "from-cyan-400 to-blue-500"
  }
];

export default function AboutSection() {
  return (
    <section id="over" className="py-24 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative w-full h-96 light-glassmorphism rounded-2xl border border-orange-500/20 overflow-hidden shadow-xl">
              {/* AI Circuit Board Design */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-gray-100 p-8">
                <svg className="w-full h-full" viewBox="0 0 400 320" fill="none">
                  <defs>
                    <linearGradient id="circuitGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#f97316" />
                      <stop offset="100%" stopColor="#ea580c" />
                    </linearGradient>
                    <linearGradient id="circuitGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#10b981" />
                      <stop offset="100%" stopColor="#059669" />
                    </linearGradient>
                    <linearGradient id="circuitGradient3" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#8b5cf6" />
                      <stop offset="100%" stopColor="#7c3aed" />
                    </linearGradient>
                  </defs>
                  
                  {/* Circuit Board Traces */}
                  <g opacity="0.7">
                    {/* Horizontal Lines */}
                    <path d="M50 80 L350 80" stroke="url(#circuitGradient1)" strokeWidth="3" />
                    <path d="M30 120 L280 120" stroke="url(#circuitGradient2)" strokeWidth="2" />
                    <path d="M80 160 L370 160" stroke="url(#circuitGradient1)" strokeWidth="3" />
                    <path d="M20 200 L320 200" stroke="url(#circuitGradient3)" strokeWidth="2" />
                    <path d="M100 240 L380 240" stroke="url(#circuitGradient2)" strokeWidth="3" />
                    
                    {/* Vertical Lines */}
                    <path d="M120 40 L120 280" stroke="url(#circuitGradient1)" strokeWidth="2" />
                    <path d="M200 20 L200 300" stroke="url(#circuitGradient2)" strokeWidth="3" />
                    <path d="M280 60 L280 260" stroke="url(#circuitGradient3)" strokeWidth="2" />
                    
                    {/* Circuit Connections */}
                    <path d="M120 80 L200 80 L200 120 L280 120" stroke="url(#circuitGradient1)" strokeWidth="2" fill="none" />
                    <path d="M120 160 L150 160 L150 200 L200 200" stroke="url(#circuitGradient2)" strokeWidth="2" fill="none" />
                    <path d="M200 240 L280 240 L280 200" stroke="url(#circuitGradient3)" strokeWidth="2" fill="none" />
                  </g>
                  
                  {/* Circuit Components */}
                  <g>
                    {/* Central AI Processor */}
                    <rect x="170" y="130" width="60" height="60" rx="8" fill="url(#circuitGradient1)" opacity="0.9" />
                    <rect x="180" y="140" width="40" height="40" rx="4" fill="white" opacity="0.8" />
                    <text x="200" y="165" textAnchor="middle" fontSize="12" fill="#f97316" fontFamily="monospace" fontWeight="bold">AI</text>
                    
                    {/* Microchips */}
                    <rect x="90" y="60" width="30" height="20" rx="3" fill="url(#circuitGradient2)" opacity="0.8" />
                    <rect x="250" y="100" width="30" height="20" rx="3" fill="url(#circuitGradient3)" opacity="0.8" />
                    <rect x="70" y="180" width="30" height="20" rx="3" fill="url(#circuitGradient1)" opacity="0.8" />
                    <rect x="310" y="220" width="30" height="20" rx="3" fill="url(#circuitGradient2)" opacity="0.8" />
                    
                    {/* Data Nodes */}
                    <circle cx="120" cy="80" r="6" fill="url(#circuitGradient1)" />
                    <circle cx="200" cy="80" r="6" fill="url(#circuitGradient2)" />
                    <circle cx="280" cy="120" r="6" fill="url(#circuitGradient3)" />
                    <circle cx="120" cy="160" r="6" fill="url(#circuitGradient2)" />
                    <circle cx="200" cy="200" r="6" fill="url(#circuitGradient1)" />
                    <circle cx="280" cy="240" r="6" fill="url(#circuitGradient3)" />
                    
                    {/* Connection Points */}
                    <circle cx="50" cy="80" r="3" fill="#f97316" />
                    <circle cx="350" cy="80" r="3" fill="#f97316" />
                    <circle cx="30" cy="120" r="3" fill="#10b981" />
                    <circle cx="280" cy="120" r="3" fill="#10b981" />
                    <circle cx="80" cy="160" r="3" fill="#f97316" />
                    <circle cx="370" cy="160" r="3" fill="#f97316" />
                  </g>
                </svg>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
                Waarom{" "}
                <span className="bg-gradient-to-r from-orange-500 to-green-500 bg-clip-text text-transparent">
                  VOORUIT.AI
                </span>
                ?
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Strategisch advies, geen implementatie. Focus op resultaat voor MKB.
              </p>
            </div>

            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  className="flex items-start space-x-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <motion.div 
                    className={`w-8 h-8 bg-gradient-to-br ${benefit.gradient} rounded-full flex items-center justify-center mt-1 flex-shrink-0`}
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <Check className="w-4 h-4 text-white" />
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
