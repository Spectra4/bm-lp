"use client";

import { motion } from "framer-motion";
import { Target, Leaf, LineChart, TrendingUp } from "lucide-react";

const brandPoints = [
  {
    title: "Strategical",
    icon: <Target className="w-5 h-5" />,
    gradient: "from-emerald-500 to-teal-400",
  },
  {
    title: "Trackable",
    icon: <LineChart className="w-5 h-5" />,
    gradient: "from-blue-500 to-cyan-400",
  },
  {
    title: "Sustainable",
    icon: <Leaf className="w-5 h-5" />,
    gradient: "from-orange-500 to-[#EB433D]",
  },
];

export default function About() {
  return (
    <section className="py-10 relative overflow-hidden bg-white" id="about">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content Column */}
          <div className="space-y-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-4xl md:text-6xl font-black leading-[1.1] tracking-tighter">
                <h3 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-[#EB433D] to-black bg-clip-text text-transparent leading-tight mb-6">
                  Redefining the Digital Standard
                </h3>
              </h2>
              
              <p className="text-gray-600 text-lg leading-relaxed max-w-lg border-l-4 border-[#EB433D] pl-6">
                Brand Make is a Pune-based digital marketing agency focused on driving strategic, data-driven growth. We craft ROI-focused solutions across web design, SEO, PPC, and social media—helping startups and established businesses scale sustainably with measurable results.
              </p>
            </motion.div>

            {/* Brand Points - Minimalist Grid */}
            <div className="flex flex-wrap gap-4">
              {brandPoints.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group flex items-center gap-3 px-6 py-4 rounded-2xl border border-slate-100 bg-[#FCFCFC] transition-all duration-300 hover:shadow-xl hover:shadow-red-500/10 hover:border-red-100 cursor-default"
                >
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${'from-slate-100 to-slate-200'} flex items-center justify-center text-slate-700 group-hover:bg-[#EB433D] group-hover:text-white transition-all duration-300 shadow-sm`}>
                    {point.icon}
                  </div>
                  <span className="font-bold text-slate-900 group-hover:text-[#EB433D] transition-colors">
                    {point.title}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Image Column */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-red-50 rounded-full blur-3xl opacity-60 animate-pulse" />
            
            <div className="relative z-10 rounded-[3rem] overflow-hidden border-[12px] border-white shadow-2xl transform lg:rotate-2 hover:rotate-0 transition-transform duration-700 group">
              <img 
                src="/team_strategy.avif" 
                alt="Our Team Strategy"
                className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Floating Overlay Card */}
              <div className="absolute bottom-8 left-8 right-8 p-6 bg-white/90 backdrop-blur-md rounded-2xl shadow-lg border border-white/20">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[#EB433D] font-black text-2xl">100%</p>
                    <p className="text-slate-600 text-[10px] font-bold uppercase tracking-tighter">Transparency</p>
                  </div>
                  <div className="h-10 w-[1px] bg-slate-200" />
                  <div className="text-right">
                    <p className="text-slate-900 font-black text-2xl">24/7</p>
                    <p className="text-slate-600 text-[10px] font-bold uppercase tracking-tighter">Live Support</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute top-1/4 -right-4 w-12 h-12 bg-[#EB433D] rounded-xl rotate-12 z-20 flex items-center justify-center text-white shadow-lg shadow-red-500/40">
              <TrendingUp className="w-6 h-6" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}