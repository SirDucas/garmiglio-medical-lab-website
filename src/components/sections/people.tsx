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
                            <img src="/images/People_lucianogarofano_updated.jpg" alt="Luciano Garofano, PhD" className="w-full h-full object-cover" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-slate-900">Luciano Garofano, PhD</h3>
                            <p className="text-teal-700 font-medium mb-4">Principal Investigator</p>
                            <div className="prose prose-sm text-slate-600 text-justify">
                                <p className="mb-2">
                                    Luciano Garofano is an Assistant Professor at The <strong>Translational Genomics Research Institute (TGen)</strong>.
                                    He earned his Ph.D. in Bioinformatics in 2019 at the <strong>University of Sannio, Italy</strong>. His PhD focused on the development of machine learning approaches
                                    for the <strong>reconstruction of gene- and protein-regulatory networks</strong> to unravel the heterogenous biological and genetic mechanisms underlying distinct
                                    subgroups of solid tumors.
                                </p>
                                <p>
                                    During his post-doctoral journey mentored by Dr. Antonio Iavarone, Dr. Garofano has designed several computational tools, including <strong>RGBM</strong> (Regularized Gradient Boosting Machine), <strong>scBiPaD</strong> (single-cell Biological Pathway Deconvolution) and <strong>SPHINKs</strong> (Substrate PHosphosite-based Inference for Network of Kinases)
                                    and informed key therapeutic vulnerabilities and functionally-relevant features of adult and pediatric brain tumors.
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
                            <img src="/images/People_simonamigliozzi_updated.jpg" alt="Simona Migliozzi, PhD" className="w-full h-full object-cover" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-slate-900">Simona Migliozzi, PhD</h3>
                            <p className="text-teal-700 font-medium mb-4">Principal Investigator</p>
                            <div className="prose prose-sm text-slate-600 text-justify">
                                <p className="mb-2">
                                    Assistant Professor at The <strong>Translational Genomics Research Institute (TGen)</strong>. Native of Italy, she completed her Ph.D. in <strong>Molecular Oncology</strong> at <strong>University of Catanzaro (2019)</strong>.
                                    Her dissertation work focused on the development of computational approaches to integrate NGS data for the <strong>molecular characterization</strong> of different subtypes of solid tumors (glioma, ovarian, colon, breast cancers).
                                </p>
                                <p>
                                    In 2019, she joined Dr. Antonio Iavarone’s laboratory at <strong>Columbia University</strong> and <strong>University of Miami</strong> as a postdoctoral fellow.
                                    Her work focused on developing machine learning approaches using single cell and multi-omics data to dissect heterogeneity of <strong>glioblastoma multiforme</strong>
                                    and identify clinically-relevant subtypes.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
