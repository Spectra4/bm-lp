"use client";

import { motion } from "framer-motion";
import { Send, User, Phone, Sparkles, Zap, ArrowRight } from "lucide-react";

export default function HorizontalCTA() {
  return (
    <section className="py-8 relative overflow-hidden bg-white" id="contact">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Main Container */}
        <div className="relative bg-[#FFF5F5] rounded-[3.5rem] p-8 md:p-10 overflow-hidden border border-red-100 shadow-xl shadow-red-500/10">
          
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-[#EB433D]/20 to-orange-200/20 rounded-full blur-[100px] -mr-40 -mt-40" />
          <div className="absolute bottom-0 left-0 w-60 h-60 bg-blue-100 rounded-full blur-[80px] -ml-30 -mb-30 opacity-60" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
            
            {/* 1. Header Section */}
            <div className="lg:w-2/5 text-center lg:text-left space-y-6">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white shadow-sm border border-red-100 text-[#EB433D] text-[10px] font-black uppercase tracking-[0.2em]"
              >
                <Sparkles className="w-3.5 h-3.5" /> Fast Response
              </motion.div>
              
              <h2 className="text-4xl md:text-6xl font-black leading-[1.1] tracking-tighter">
                <h3 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-[#EB433D] to-black bg-clip-text text-transparent leading-tight mb-6">
                    Ready to Elevate Your Brand?
                </h3>
              </h2>
              
              <p className="text-slate-600 text-base md:text-lg font-medium leading-relaxed">
                Join 100+ brands growing with our 
                <span className="text-black font-bold"> Strategical Framework.</span>
              </p>
            </div>

            {/* 2. Form Section */}
            <div className="lg:w-3/5 w-full">
              <div className="relative p-2 md:p-3 bg-white rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.04)] border border-slate-100">
                <div className="grid md:grid-cols-[1fr_1fr_auto] gap-3">
                  
                  {/* Name Input */}
                  <div className="relative group">
                    <div className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#EB433D] transition-colors">
                      <User className="w-5 h-5" />
                    </div>
                    <input 
                      type="text" 
                      placeholder="Full Name"
                      className="w-full bg-slate-50 border-transparent rounded-2xl py-5 pl-14 pr-4 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#EB433D]/20 focus:bg-white transition-all font-bold"
                    />
                  </div>

                  {/* Phone Input */}
                  <div className="relative group">
                    <div className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#EB433D] transition-colors">
                      <Phone className="w-5 h-5" />
                    </div>
                    <input 
                      type="tel" 
                      placeholder="Phone Number"
                      className="w-full bg-slate-50 border-transparent rounded-2xl py-5 pl-14 pr-4 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#EB433D]/20 focus:bg-white transition-all font-bold"
                    />
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="relative overflow-hidden bg-red-500 text-white font-black rounded-2xl py-5 px-10 flex items-center justify-center gap-3 transition-all group"
                  >
                    <span className="relative z-10">PROCEED</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
                    
                    {/* Hover Background Effect */}
                    <div className="absolute inset-0 bg-gradient-to-b from-red-300 to-red-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                  </motion.button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}