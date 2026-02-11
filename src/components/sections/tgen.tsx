"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

export function TGen() {
    return (
        <section className="py-16 bg-white border-t border-slate-100">
            <div className="container mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <p className="text-slate-500 mb-4 font-medium tracking-wide uppercase text-sm">Proudly Affiliated With</p>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
                        The Translational Genomics Research Institute
                    </h2>
                    <div className="flex justify-center">
                        <Link href="https://www.tgen.org" target="_blank">
                            <Button variant="outline" size="lg" className="gap-2 border-slate-200 text-slate-700 hover:text-teal-700 hover:border-teal-200">
                                Visit TGen Website <ExternalLink className="w-4 h-4" />
                            </Button>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
