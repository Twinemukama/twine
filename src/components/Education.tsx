import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";

const Education = () => (
  <section className="py-20 px-6" id="education">
    <div className="max-w-4xl mx-auto">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="font-mono text-primary text-sm mb-12 tracking-wider"
      >
        // EDUCATION & CERTIFICATES
      </motion.h2>
      <div className="grid md:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card p-6 rounded-xl border border-border"
        >
          <GraduationCap className="text-primary mb-4" size={28} />
          <h3 className="text-lg font-semibold mb-1">BSc. Information Systems and Technology</h3>
          <p className="text-muted-foreground text-sm">Makerere University</p>
          <p className="font-mono text-primary text-xs mt-2">2021 — 2023</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="bg-card p-6 rounded-xl border border-border"
        >
          <Award className="text-primary mb-4" size={28} />
          <h3 className="text-lg font-semibold mb-3">Certificates</h3>
          <ul className="space-y-2">
            <li className="text-secondary-foreground text-sm flex gap-2">
              <span className="text-primary">▸</span> CCNA Networking Associate
            </li>
            <li className="text-secondary-foreground text-sm flex gap-2">
              <span className="text-primary">▸</span> Google Digital Marketing
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  </section>
);

export default Education;
