"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import Link from "next/link";

const tools = [
    {
        name: "scBiPaD",
        full_name: "single-cell Biological Pathway Deconvolution",
        description: "Identifies functional cellular states across multiple tumors by integrating single cell transcriptomics data and biological pathway activities.",
        link: "https://github.com/miccec/GBMstates",
        paper: "https://rdcu.be/e3l4J",
        image: "/images/Software&Tools_img1.png"
    },
    {
        name: "SPHINKS",
        full_name: "Substrate PHosphosite-based Inference for Network of KinaseS",
        description: "Reconstructs tissue-specific kinase-phosphosubstrate networks using machine learning to integrate proteomics and phosphoproteomics data.",
        link: "https://github.com/miccec/MAKINA",
        paper: "https://rdcu.be/e3mgD",
        image: "/images/Software&Tools_img2.png"
    },
    {
        name: "Tumor Classifier",
        full_name: "Multinomial GLM-based tumor classifier",
        description: "Probabilistic classifier taking bulk tumor RNA-seq data to calculate probability of belonging to functional subtypes (GBM, lung, breast, pediatric).",
        link: "https://lucgar88.shinyapps.io/GBMclassifier",
        paper: "https://rdcu.be/e3mgD",
        image: "/images/Software&Tools_img3.png"
    }
];

export function Software() {
    return (
        <section id="software" className="py-24 bg-slate-900 text-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold mb-4"
                    >
                        Software & <span className="text-teal-400">Tools</span>
                    </motion.h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        Open source computational tools developed by our lab for the scientific community.
                    </p>
                </div>

                <div className="space-y-12">
                    {tools.map((tool, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700 flex flex-col md:flex-row gap-8 items-center"
                        >
                            <div className="w-full md:w-1/3 aspect-video bg-slate-900 rounded-xl overflow-hidden border border-slate-700">
                                <img src={tool.image} alt={tool.name} className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity" />
                            </div>

                            <div className="flex-1">
                                <div className="flex items-baseline gap-3 mb-2">
                                    <h3 className="text-2xl font-bold text-white">{tool.name}</h3>
                                    <span className="text-teal-400 text-sm font-mono hidden sm:inline-block">{tool.full_name}</span>
                                </div>
                                <p className="text-slate-300 mb-6 leading-relaxed">
                                    {tool.description}
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    {tool.link && (
                                        <Link href={tool.link} target="_blank">
                                            <Button variant="primary" size="sm" className="gap-2 bg-teal-600 hover:bg-teal-700 border-none">
                                                <Github className="w-4 h-4" /> Code / App
                                            </Button>
                                        </Link>
                                    )}
                                    {tool.paper && (
                                        <Link href={tool.paper} target="_blank">
                                            <Button variant="outline" size="sm" className="gap-2 text-teal-300 border-teal-500/30 hover:bg-teal-500/10 hover:text-white">
                                                <ExternalLink className="w-4 h-4" /> Read Paper
                                            </Button>
                                        </Link>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
