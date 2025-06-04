import { motion } from "framer-motion";
import { Calendar, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CTASection() {
  const scrollToContact = () => {
    const element = document.getElementById("transition");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          className="w-full h-full bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-cyan-400/20"
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            backgroundSize: "400% 400%",
          }}
        />
      </div>

      <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-4xl lg:text-6xl font-bold mb-8 leading-tight lg:leading-[1.2] leading-snug"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Wil je{" "}
          <span className="relative">
            <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
              richting
            </span>
            <motion.div
              className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              viewport={{ once: true }}
            />
          </span>
          {" "}in plaats van ruis?
        </motion.h2>

        <motion.p
          className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Laten we samen kijken hoe AI strategisch ingezet kan worden in jouw organisatie.
          Plan direct een gesprek en neem contact op.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Button
            onClick={scrollToContact}
            className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white hover:scale-105 transition-transform duration-300 px-10 py-5 text-lg flex items-center space-x-3"
            size="lg"
          >
            <Calendar className="w-5 h-5" />
            <span>Plan een gesprek</span>
          </Button>

          <motion.a
            href="mailto:hello@vooruit.ai?subject=Ik%20wil%20graag%20een%20gesprek%20met%20vooruit.ai&body=Laat%20hier%20je%20naam%20en%20eventueel%20telefoonnummer%20achter%20en%20wat%20opties%20wanneer%20je%20zou%20kunnen"
            className="text-cyan-400 hover:text-white transition-colors duration-300 flex items-center space-x-3 text-lg font-medium"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Mail className="w-5 h-5" />
            <span>hello@vooruit.ai</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
