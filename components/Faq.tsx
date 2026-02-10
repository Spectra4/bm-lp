"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqData = [
  {
    question: "How long does it take to build a website?",
    answer: "The Website Development timeline depends on the project scope and complexity. On average, static sites take 2–4 weeks, while dynamic or e-commerce websites take 6–8 weeks."
  },
  {
    question: "Do you offer website maintenance and support?",
    answer: "Yes, we provide ongoing maintenance, updates, and technical support to ensure your website stays secure, optimized, and up to date."
  },
  {
    question: "What technologies do you use for website development?",
    answer: "We use modern technologies like React.js, Next.js, Node.js, Tailwind CSS, and CMS platforms such as WordPress or Webflow, depending on your needs."
  },
  {
    question: "How much does a website cost?",
    answer: "The cost varies based on design complexity, functionality, and features. We offer flexible packages to fit every business need and budget."
  },
  {
    question: "Can you redesign my existing website?",
    answer: "Yes, we can modernize your current website with a fresh design, improved performance, and better user experience without losing existing data."
  }
];

const FAQItem = ({ question, answer, index }: { question: string, answer: string, index: number }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Animation variants for the individual items appearing on scroll
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.div 
      variants={itemVariants}
      className="mb-4 overflow-hidden rounded-2xl border border-red-50 bg-white shadow-sm transition-all hover:shadow-md"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between p-3 text-left md:p-4"
      >
        <div className="flex items-center gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-50 text-red-600">
            <HelpCircle size={20} />
          </div>
          <span className="text-lg font-bold text-slate-800 md:text-lg">
            {question}
          </span>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          className="text-slate-400"
        >
          <ChevronDown size={24} />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="border-t border-slate-50 p-5 pt-0 text-slate-600 md:p-6 md:pt-0">
              <p className="leading-relaxed">{answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default function FAQSection() {
  return (
    <section className="relative overflow-hidden bg-[#FDFEFF] py-10 px-6">
      {/* Abstract Background Decoration */}
      <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-red-500/5 blur-3xl" />
      <div className="absolute -left-24 -bottom-24 h-64 w-64 rounded-full bg-blue-500/5 blur-3xl" />

      <div className="mx-auto max-w-4xl">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-black tracking-tight text-slate-900 md:text-4xl">
            Frequently Asked <span className="text-red-600">Questions</span>
          </h2>
          <div className="mt-4 h-1 w-12 bg-red-600 mx-auto rounded-full" />
        </div>

        {/* This container handles the stagger effect as you scroll into view */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.15 }} // 0.15s delay between each item
          className="flex flex-col"
        >
          {faqData.map((faq, index) => (
            <FAQItem key={index} index={index} {...faq} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}