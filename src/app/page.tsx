"use client";

import { motion } from "framer-motion";
import { Construction, Mail } from "lucide-react";

export default function MaintenancePage() {
  return (
    <main className="min-h-screen bg-white flex items-center justify-center p-6 bg-gradient-to-br from-slate-50 to-teal-50">
      <div className="max-w-2xl w-full text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-slate-100"
        >
          <div className="w-20 h-20 bg-teal-100 text-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-inner">
            <Construction className="w-10 h-10" />
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 font-plus-jakarta tracking-tight">
            GarMiglio<span className="text-teal-600">Lab</span>
          </h1>

          <div className="h-1 w-20 bg-teal-500 mx-auto mb-8 rounded-full" />

          <h2 className="text-2xl font-semibold text-slate-800 mb-6">
            Website Under Construction
          </h2>

          <p className="text-slate-600 text-lg mb-10 leading-relaxed">
            We are working hard to bring you a new digital home for our medical research lab.
            Check back soon for updates on our projects, publications, and tools.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6 border-t border-slate-100">
            <div className="flex items-start gap-3 text-slate-700">
              <Mail className="w-5 h-5 text-teal-600 mt-1" />
              <div className="text-left flex flex-col gap-1">
                <p className="text-[10px] uppercase tracking-wider font-bold text-slate-400">Inquiries</p>
                <a href="mailto:smigliozzi@tgen.org" className="text-sm font-medium hover:text-teal-600 transition-colors">
                  smigliozzi@tgen.org
                </a>
                <a href="mailto:lgarofano@tgen.org" className="text-sm font-medium hover:text-teal-600 transition-colors">
                  lgarofano@tgen.org
                </a>
              </div>
            </div>

            <div className="hidden sm:block w-px h-8 bg-slate-200" />

            <div className="flex items-center gap-3 text-slate-700 text-left">
              <div>
                <p className="text-[10px] uppercase tracking-wider font-bold text-slate-400">Institutional Affiliation</p>
                <p className="text-sm font-medium">TGen @ City of Hope</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-8 text-slate-400 text-xs"
        >
          © 2026 GarMiglioLab. All rights reserved.
        </motion.p>
      </div>
    </main>
  );
}
