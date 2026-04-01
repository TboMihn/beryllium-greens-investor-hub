import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  id: string;
  children: ReactNode;
  className?: string;
}

const SectionWrapper = ({ id, children, className = "" }: Props) => (
  <section id={id} className={`py-20 md:py-28 ${className}`}>
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className="container mx-auto px-4 lg:px-8"
    >
      {children}
    </motion.div>
  </section>
);

export default SectionWrapper;
