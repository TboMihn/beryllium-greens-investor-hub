import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { ReactNode } from "react";

interface Props {
  icon: ReactNode;
  title: string;
  summary: string;
  detail: string;
}

const InfoCard = ({ icon, title, summary, detail }: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.div
        whileHover={{ y: -4 }}
        className="bg-card rounded-xl p-6 shadow-card border border-border cursor-pointer group transition-shadow hover:shadow-elevated"
        onClick={() => setOpen(true)}
      >
        <div className="w-12 h-12 rounded-lg bg-gradient-green flex items-center justify-center text-primary-foreground mb-4">
          {icon}
        </div>
        <h3 className="font-display text-lg font-semibold text-foreground mb-2">{title}</h3>
        <p className="font-body text-sm text-muted-foreground leading-relaxed">{summary}</p>
        <span className="inline-block mt-3 text-xs font-semibold text-primary group-hover:underline">
          Learn more →
        </span>
      </motion.div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-foreground/40 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-background rounded-2xl shadow-elevated max-w-lg w-full p-8 relative border border-border"
            >
              <button
                onClick={() => setOpen(false)}
                className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
                aria-label="Close"
              >
                <X size={20} />
              </button>
              <div className="w-12 h-12 rounded-lg bg-gradient-green flex items-center justify-center text-primary-foreground mb-4">
                {icon}
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-3">{title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
                {detail}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default InfoCard;
