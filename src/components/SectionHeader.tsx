import { motion } from "framer-motion";

const SectionHeader = ({ text }: { text: string }) => (
  <motion.h2
    initial={{ opacity: 0, x: -30 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="font-mono text-primary text-sm mb-12 tracking-wider relative"
  >
    <motion.span
      initial={{ width: 0 }}
      whileInView={{ width: "2rem" }}
      viewport={{ once: true }}
      transition={{ delay: 0.3, duration: 0.4 }}
      className="inline-block h-px bg-primary mr-3 align-middle"
    />
    {text}
  </motion.h2>
);

export default SectionHeader;
