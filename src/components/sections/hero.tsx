"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function Hero() {
    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden bg-slate-900">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-900/80 via-slate-900/80 to-slate-900/90 z-10" />
                <img
                    src="/images/Home_img1_new.png"
                    alt="GarMiglioLab Research"
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="container relative z-20 px-6 mx-auto text-center md:text-left">
                <div className="max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-teal-500/20 border border-teal-500/30 text-teal-300 text-sm font-medium mb-6">
                            GarMiglioLab @ TGen
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
                    >
                        Unraveling the complexity of <span className="text-teal-400">Cancer Evolution</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="text-lg md:text-xl text-slate-200 mb-8 max-w-2xl leading-relaxed"
                    >
                        Deciphering the molecular mechanisms of cancer progression, metastasis, and resistance to therapy in brain cancer and solid tumors.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
                    >
                        <Link href="#contact">
                            <Button size="lg" className="w-full sm:w-auto gap-2 text-md">
                                Join Us <ArrowRight className="w-4 h-4" />
                            </Button>
                        </Link>
                        <Link href="#projects">
                            <Button variant="outline" size="lg" className="w-full sm:w-auto text-white border-slate-500 hover:bg-slate-800 hover:text-white text-md">
                                Our Projects
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
