"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export function About() {
    return (
        <section id="about" className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-12 items-start">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                            Our <span className="text-teal-700">Mission</span>
                        </h2>
                        <div className="text-lg text-slate-600 mb-6 space-y-4 leading-relaxed">
                            <p>
                                The <strong>GarMiglio Lab’s</strong> mission is deciphering the molecular mechanisms of cancer progression,
                                metastasis, and resistance to therapy in both adult and pediatric brain cancer as well as in other
                                solid tumors including lung, breast and melanoma.
                            </p>
                            <p>
                                We combine computational approaches and experimental models to:
                            </p>
                        </div>

                        <ul className="space-y-4 mt-6">
                            <li className="flex items-start gap-3 text-slate-700">
                                <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0 mt-1" />
                                <span>
                                    <strong>Dissect the complexity</strong> of the tumor ecosystem by identifying functionally relevant
                                    cell subpopulations and decipher their molecular traits, functions, spatial organization
                                    and cell-cell interaction through single cell and spatial technologies.
                                </span>
                            </li>
                            <li className="flex items-start gap-3 text-slate-700">
                                <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0 mt-1" />
                                <span>
                                    <strong>Define clinically relevant subtypes</strong> of tumors by integrating bulk-level multi-omics
                                    including transcriptomics, epigenetics, genomics, phospho-proteomics profiles from hundreds to
                                    thousands tumors using machine learning approaches and reconstruction of gene/protein regulatory networks.
                                </span>
                            </li>
                            <li className="flex items-start gap-3 text-slate-700">
                                <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0 mt-1" />
                                <span>
                                    <strong>Implement experimental models</strong> to recapitulate the human tumor ecosystem to translate
                                    our findings into real-world applications and develop novel therapeutic strategies for cancer patients.
                                </span>
                            </li>
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-slate-50 p-8 rounded-2xl border border-slate-100 italic flex flex-col justify-center h-full"
                    >
                        <p className="text-lg text-slate-700 leading-relaxed mb-6">
                            "Our team embraces a collaborative approach, working closely with researchers and clinicians.
                            Our final aim is to develop more effective therapies and improve the survival outcome of patients
                            including children affected by this deadly disease."
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
