"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const publications = [
    {
        title: "Dissecting glioma ecosystem during evolution",
        journal: "Cancer Cell",
        year: "2023",
        doi: "https://doi.org/10.1016/j.ccell.2023.12.015",
        authors: "Garofano L, Migliozzi S, [Placeholder Authors]"
    },
    {
        title: "scBiPaD: single-cell biological pathway deconvolution",
        journal: "Nature Communications (Placeholder Journal)",
        year: "2024",
        doi: "https://rdcu.be/e3l4J",
        authors: "Migliozzi S, Garofano L, et al."
    },
    {
        title: "SPHINKS: Substrate PHosphosite-based Inference for Network of KinaseS",
        journal: "Nature Communications (Placeholder Journal)",
        year: "2024",
        doi: "https://rdcu.be/e3mgD",
        authors: "Garofano L, Migliozzi S, et al."
    }
];

export function Publications() {
    return (
        <section id="publications" className="py-24 bg-slate-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold text-slate-900 mb-4"
                    >
                        Selected <span className="text-teal-700">Publications</span>
                    </motion.h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Key research findings and scientific contributions.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto space-y-6">
                    {publications.map((pub, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white p-6 rounded-lg border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
                        >
                            <h3 className="text-xl font-bold text-slate-900 mb-2">
                                {pub.title}
                            </h3>
                            <p className="text-slate-600 mb-1 italic">{pub.authors}</p>
                            <div className="flex flex-wrap gap-4 text-sm items-center mt-3">
                                <span className="font-semibold text-teal-700 bg-teal-50 px-2 py-1 rounded">{pub.journal}</span>
                                <span className="text-slate-500">{pub.year}</span>
                                {pub.doi && (
                                    <Link href={pub.doi} target="_blank" className="text-teal-600 hover:text-teal-800 underline underline-offset-4 decoration-teal-600/30 flex items-center gap-1">
                                        Read Paper <ArrowUpRight className="w-3 h-3" />
                                    </Link>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
