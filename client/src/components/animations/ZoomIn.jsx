import { motion } from "framer-motion";

function ZoomIn({ children, delay = 0 }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.8,
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 0.6,
        delay,
      }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}

export default ZoomIn;