"use client";

import { motion } from "framer-motion";

export function People() {
    return (
        <section id="people" className="py-24 bg-slate-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold text-slate-900 mb-4"
                    >
                        Our <span className="text-teal-700">Team</span>
                    </motion.h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Led by principal investigators dedicated to precision oncology and computational biology.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
                    {/* Member 1: Luciano Garofano */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col md:flex-row gap-8 items-start"
                    >
                        <div className="shrink-0 w-full md:w-48 aspect-[3/4] bg-slate-200 rounded-xl overflow-hidden shadow-md">
                            <img src="/images/People_lucianogarofano.png" alt="Luciano Garofano, PhD" className="w-full h-full object-cover" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-slate-900">Luciano Garofano, PhD</h3>
                            <p className="text-teal-700 font-medium mb-4">Principal Investigator</p>
                            <div className="prose prose-sm text-slate-600 text-justify">
                                <p className="mb-2">
                                    Dr. Luciano Garofano earned his Ph.D. in Bioinformatics in 2019 at the University of Sannio, Italy.
                                    His research focuses on machine learning approaches for reconstructing gene- and protein- regulatory networks
                                    to unravel biological mechanisms in solid tumors.
                                </p>
                                <p>
                                    Mentored by Dr. Antonio Iavarone during his postdoc, Dr. Garofano designed computational tools like
                                    <strong> RGBM</strong>, <strong>scBiPaD</strong>, and <strong>SPHINKs</strong>, identifying key therapeutic
                                    vulnerabilities in adult and pediatric brain tumors.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Member 2: Simona Migliozzi */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-col md:flex-row gap-8 items-start"
                    >
                        <div className="shrink-0 w-full md:w-48 aspect-[3/4] bg-slate-200 rounded-xl overflow-hidden shadow-md">
                            <img src="/images/People_simonamigliozzi.png" alt="Simona Migliozzi, PhD" className="w-full h-full object-cover" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-slate-900">Simona Migliozzi, PhD</h3>
                            <p className="text-teal-700 font-medium mb-4">Principal Investigator</p>
                            <div className="prose prose-sm text-slate-600 text-justify">
                                <p className="mb-2">
                                    Assistant Professor at TGen. Native of Italy, she completed her Ph.D. in Molecular Oncology at University of Catanzaro (2019).
                                    She focuses on computational approaches to integrate NGS data for solid tumor characterization (glioma, ovarian, colon, breast).
                                </p>
                                <p>
                                    As a postdoctoral fellow in Dr. Iavarone’s lab (Columbia/Miami), she developed machine learning approaches
                                    using single cell and multi-omics data to dissect glioblastoma heterogeneity.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
