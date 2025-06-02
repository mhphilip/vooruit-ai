import { motion } from "framer-motion";

const steps = [
  {
    number: "1",
    title: "Strategiesessie",
    description: "We starten met een grondige analyse van jouw bedrijf en AI-mogelijkheden.",
    gradient: "from-blue-500 to-cyan-400"
  },
  {
    number: "2",
    title: "Roadmap & Tools",
    description: "Concrete stappenplan met de juiste toolkeuzes voor jouw organisatie.",
    gradient: "from-purple-500 to-green-400"
  },
  {
    number: "3",
    title: "Begeleiding & Groei",
    description: "Doorlopende ondersteuning en optimalisatie van je AI-implementatie.",
    gradient: "from-cyan-400 to-blue-500"
  }
];

export default function ProcessSection() {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080" 
          alt="Abstract network visualization with glowing connections and data nodes" 
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/90 to-black/80" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ons{" "}
            <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
              Proces
            </span>
          </h2>
          <p className="text-xl text-gray-300">Effectiviteit en snelheid — geen eindeloze PowerPoints</p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              className="text-center group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="relative mb-8">
                <motion.div 
                  className={`w-20 h-20 bg-gradient-to-br ${step.gradient} rounded-full flex items-center justify-center mx-auto relative z-10`}
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <span className="text-2xl font-bold text-white">{step.number}</span>
                </motion.div>
                
                {/* Connection Line */}
                {index < steps.length - 1 && (
                  <div className="absolute top-10 left-1/2 w-full h-px bg-gradient-to-r from-blue-500 to-cyan-400 hidden lg:block transform -translate-x-1/2 z-0" />
                )}
              </div>
              
              <motion.h3 
                className="text-2xl font-bold mb-4 group-hover:text-cyan-400 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
              >
                {step.title}
              </motion.h3>
              <p className="text-gray-300 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
