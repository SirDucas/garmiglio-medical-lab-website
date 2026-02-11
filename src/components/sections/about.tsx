"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export function About() {
    const objectives = [
        "Dissecting tumor ecosystem complexity",
        "Identifying functional cell subpopulations",
        "Defining clinically relevant tumor subtypes through Multi-omics",
        "Translating findings into novel therapeutic strategies"
    ];

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
                                The <strong>GarMiglio Lab</strong> mission is to enlighten the molecular mechanisms of cancer progression,
                                metastasis, and resistance to therapy in both adult and pediatric brain cancer and other
                                solid tumors including lung, breast, and melanoma.
                            </p>
                            <p>
                                We combine computational approaches and experimental models to dissect the complexity of the tumor ecosystem.
                                Our team embraces a collaborative approach, working closely with researchers and clinicians to improve precision medicine.
                            </p>
                        </div>

                        <ul className="space-y-3 mt-8">
                            {objectives.map((obj, index) => (
                                <li key={index} className="flex items-start gap-3 text-slate-700">
                                    <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0 mt-1" />
                                    <span>{obj}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-slate-50 p-8 rounded-2xl border border-slate-100 italic"
                    >
                        <h3 className="text-xl font-bold text-slate-900 mb-4">Integrated Approach</h3>
                        <p className="text-slate-600 mb-4">
                            We integrate <strong>Single Cell & Spatial Technologies</strong> with <strong>Machine Learning</strong> to define
                            clinically relevant subtypes of tumors. By analyzing transcriptomics, epigenetics, genomics, and
                            phospho-proteomics profiles from hundreds to thousands of tumors, we reconstruct gene/protein regulatory networks.
                        </p>
                        <p className="text-slate-600">
                            Our goal is to recapitulate human tumor disease in experimental models and develop real-world applications for cancer patients.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
