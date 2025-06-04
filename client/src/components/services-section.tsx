import { motion } from "framer-motion";
import { Compass, Wrench, Brain, Users, Settings, Zap, Network, Target } from "lucide-react";

const services = [
  {
    icon: Compass,
    title: "STRATEGISCH AI-ADVIES",
    description: "AI-roadmaps en planning: voor een vast bedrag per maand",
    gradient: "from-orange-500 to-red-500",
    accent: "border-orange-500/30"
  },
  {
    icon: Wrench,
    title: "TOOLING & ORCHESTRATIE",
    description: "Juiste tools kiezen: slimme workflows, chatbots en agents",
    gradient: "from-green-400 to-emerald-500",
    accent: "border-green-500/30"
  },
  {
    icon: Brain,
    title: "AI-AGENT ARCHITECTUUR",
    description: "Volg de laatste ontwikkelingen: A2A, MCP, RAG en meer",
    gradient: "from-purple-500 to-pink-500",
    accent: "border-purple-500/30"
  },
  {
    icon: Users,
    title: "AI-ENABLED TEAMS",
    description: "Persoonlijke begeleiding: zelfstandig werken met AI",
    gradient: "from-cyan-400 to-blue-500",
    accent: "border-cyan-500/30"
  }
];

export default function ServicesSection() {
  return (
    <section id="diensten" className="py-24 bg-white relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-green-50 to-purple-50" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-5xl lg:text-7xl font-black mb-8 tracking-tight text-gray-900"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            DE {" "}
            <span className="bg-gradient-to-r from-orange-500 to-green-500 bg-clip-text text-transparent">
              DIENSTEN
            </span>
          </motion.h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
            AI-advies en begeleiding voor MKB
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className={`light-glassmorphism p-8 rounded-2xl border ${service.accent} hover:border-gray-300 transition-all duration-500 group relative overflow-hidden shadow-lg`}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              {/* Background Glow Effect */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`}
                initial={false}
              />

              <motion.div
                className={`w-20 h-20 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-8 shadow-lg`}
                whileHover={{
                  scale: 1.1,
                  rotate: [0, -5, 5, 0]
                }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <service.icon className="w-10 h-10 text-white" />
              </motion.div>

              <h3 className="text-2xl font-black mb-6 text-gray-900 group-hover:text-orange-600 transition-colors duration-500 font-mono">
                {service.title}
              </h3>

              <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                {service.description}
              </p>

              {/* Animated Corner Accent */}
              <motion.div
                className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${service.gradient} opacity-10 rounded-bl-full`}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                viewport={{ once: true }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
