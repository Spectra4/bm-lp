"use client";

import { motion } from "framer-motion";
import { ListChecks, Zap, ShieldCheck, Repeat } from "lucide-react";

const sops = [
  {
    title: "Audit",
    desc: "360° deep dive into data infrastructure.",
    icon: <ListChecks className="w-5 h-5" />,
  },
  {
    title: "Sync",
    desc: "Aligning brand goals with execution.",
    icon: <Zap className="w-5 h-5" />,
  },
  {
    title: "Control",
    desc: "Zero-error QA for brand protection.",
    icon: <ShieldCheck className="w-5 h-5" />,
  },
  {
    title: "Scale",
    desc: "Infinite optimization for returns.",
    icon: <Repeat className="w-5 h-5" />,
  },
];

export default function ChevronSOP() {
  return (
    <section className="py-8 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* The Chevron Row */}
        <div className="flex flex-col md:flex-row items-stretch gap-2 md:gap-0">
          {sops.map((sop, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative flex-1 group"
            >
              {/* Chevron Shape Container */}
              <div 
                className={`relative h-full min-h-[150px] p-6 transition-all duration-500 
                  ${index % 2 === 0 ? 'bg-slate-900 text-white' : 'bg-[#EB433D] text-white'}
                  group-hover:bg-black group-hover:z-10 group-hover:scale-[1.02] shadow-xl`}
                style={{
                  clipPath: typeof window !== 'undefined' && window.innerWidth > 768 
                    ? "polygon(90% 0%, 100% 50%, 90% 100%, 0% 100%, 10% 50%, 0% 0%)"
                    : "none",
                  marginLeft: index === 0 ? "0" : "-2%"
                }}
              >
                <div className="relative z-10 flex flex-col items-center text-center justify-center h-full space-y-4">
                  {/* Icon Area */}
                  <div className="bg-white/10 p-3 rounded-full mb-2">
                    {sop.icon}
                  </div>

                  {/* Text Area */}
                  <div className="space-y-1">
                    <h4 className="text-xl font-black uppercase tracking-tighter">
                      {sop.title}
                    </h4>
                    <p className="text-sm font-medium opacity-70 leading-snug max-w-[150px] mx-auto">
                      {sop.desc}
                    </p>
                  </div>
                </div>

                {/* Decorative End-Cap for the first and last item to make them look cleaner */}
                {index === 0 && (
                  <div className="absolute inset-y-0 left-0 w-4 bg-inherit -translate-x-full hidden md:block" />
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}