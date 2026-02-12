"use client";

import { motion } from "framer-motion";
import { Microscope, Dna, Brain, Activity } from "lucide-react";
import { cn } from "@/lib/utils";

// Simple Card components since I didn't install shadcn/ui fully yet
// Wait, I can just inline them or create a simple card structure here since I haven't created the UI component file yet.
// To keep it clean I'll just use div with tailwind classes directly or create a quick local component.

const projects = [
    {
        title: "Dissecting glioma ecosystem during evolution",
        description: "Our previous studies have shown that glioma ecosystem is dramatically changing during evolution. We want seek the biological mechanisms driving changes in tumor composition, tumor microenvironment and their spatial patterns to identify new therapeutic vulnerabilities.",
        image: "/images/Projects_img1.png",
        tags: ["Glioma", "Evolution", "TME"]
    },
    {
        title: "Role of neurons-cancer cross-talk in non-CNS tumor progression",
        description: "We showed the existence of a tumor neuronal-like program in lung and breast cancer. We test whether the innervation of non-CNS tumors (gastrointestinal, pancreatic, prostate) by peripheral nerves regulates cancer progression, seeking molecular mechanisms driving neuron-cancer interactions.",
        image: "/images/Projects_img2.png",
        tags: ["Neuro-Oncology", "Cross-talk", "Non-CNS"]
    },
    {
        title: "Reconstructing spatiotemporal proteomic mosaicism in pediatric brain tumors",
        description: "We have shown an evolutionary trajectory of distinct tumor cellular states and TME cell subpopulations from low to high-grade pediatric tumors. We seek to identify critical post-translational regulators (kinases, ubiquitin ligases) responsible for the biological make-up of children's brain tumors.",
        image: null, // No 3rd image provided
        tags: ["Pediatric", "Proteomics", "Spatio-temporal"]
    }
];

export function Projects() {
    return (
        <section id="projects" className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold text-slate-900 mb-4"
                    >
                        Research <span className="text-teal-700">Projects</span>
                    </motion.h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Exploring the frontiers of cancer biology through specific lines of inquiry.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="flex flex-col bg-slate-50 rounded-xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
                        >
                            {project.image ? (
                                <div className="h-40 bg-white flex items-center justify-center p-4 overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="max-w-full max-h-full object-contain transition-transform hover:scale-105 duration-500"
                                    />
                                </div>
                            ) : (
                                <div className="h-40 bg-gradient-to-br from-teal-50 to-slate-100 flex items-center justify-center">
                                    <Dna className="w-10 h-10 text-teal-300" />
                                </div>
                            )}

                            <div className="p-6 flex flex-col flex-grow">
                                <div className="flex gap-2 mb-3 flex-wrap">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="text-xs font-semibold px-2 py-1 bg-white border border-slate-200 rounded text-slate-500">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3 leading-tight">{project.title}</h3>
                                <p className="text-slate-600 text-sm leading-relaxed flex-grow">{project.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
