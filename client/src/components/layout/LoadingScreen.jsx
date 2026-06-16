import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen({ loading }) {
  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-white dark:bg-slate-950"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col items-center gap-4"
          >
            <span className="text-2xl font-bold text-gradient">SW</span>
            <motion.span
              animate={{ width: ["0%", "100%"] }}
              transition={{ duration: 1.1, ease: "easeInOut" }}
              className="block h-0.5 rounded-full bg-accent-500"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
