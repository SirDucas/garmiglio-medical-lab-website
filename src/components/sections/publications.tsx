"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const publications = [
    {
        citation: "Migliozzi S.*, Adabbo B.*, Wu F. *, Garofano L.*, Davila P., Komotar J.R., Ivan E.M., Shah A.H., Cortes Bilbao D., Boone M.M., De La Fuente I.M., Gultekin H.S., Ceccarelli M., Iavarone A., Lasorella A. Restraint of cancer cell plasticity by spatial homotypic clustering. Cancer Cell (2025)",
        url: "https://www.cell.com/cancer-cell/fulltext/S1535-6108(25)00366-6"
    },
    {
        citation: "Garofano L.*, Migliozzi S.*, […], et al. Pathway-based classification of glioblastoma uncovers a mitochondrial subtype with therapeutic vulnerabilities. Nature Cancer (2021)",
        url: "https://www.nature.com/articles/s43018-020-00159-4"
    },
    {
        citation: "Migliozzi S.*, Oh Y.T.*, Mohammad H.*, Garofano L.*, […], et al. Integrative multi-omics networks identify PKCd and DNA-PK as master kinases of glioblastoma subtypes and guide targeted cancer therapy. Nature Cancer (2023)",
        url: "https://www.nature.com/articles/s43018-022-00510-x"
    },
    {
        citation: "Kim K.H.*, Migliozzi S.*, […], Garofano L., […], et al. Integrated proteogenomic characterization of glioblastoma evolution. Cancer Cell (2024)",
        url: "https://www.cell.com/cancer-cell/fulltext/S1535-6108(23)00443-9"
    },
    {
        citation: "Garofano L., D’Angelo F., Oh M., Ceccarelli M., Bielle F., Sanson M., Lasorella A, Iavarone A. Identification of distinct tumor-TME ecomodules in glioma from Neurofibromatosis type 1. Nature Medicine (in submission)",
        url: ""
    },
    {
        citation: "D’Angelo F., […], Garofano L., […], et al. The molecular landscape of glioma in patients with Neurofibromatosis 1. Nature Medicine (2019)",
        url: "https://www.nature.com/articles/s41591-018-0263-8"
    },
    {
        citation: "Nomura M.*, Spitzer A.*, Johnson K.C.*, Garofano L.*, Migliozzi S., […], Lasorella A., Verhaak R.G.W., Iavarone A., Suvà M.L., Tirosh I. The Multi-Layered Transcriptional Architecture of Glioblastoma Ecosystems. Nature Genetics (2025)",
        url: "https://www.nature.com/articles/s41588-025-02167-5"
    },
    {
        citation: "Spitzer A.*, Johnson K.C.*, Nomura M.*, Garofano L.*, Migliozzi S., […], Lasorella A., Iavarone A., Verhaak R.G.W., Tirosh I., Suvà M.L. Deciphering the Longitudinal Trajectories of Glioblastoma 1 Ecosystems by Integrative Single-Cell Genomics. Nature Genetics (2025)",
        url: "https://www.nature.com/articles/s41588-025-02168-4"
    },
    {
        citation: "Johnson K.C.*, Spitzer A.*, Varn F.S.*, Nomura M.*, Garofano L.*, Migliozzi S., […],Lasorella A., Suvà M.L., Iavarone A., Tirosh I., Verhaak R.G.W. Acquired genetic and cell state changes underlie IDH-mutant glioma progression. Nature (resubmitted)",
        url: ""
    },
    {
        citation: "Frattini V., […], Garofano L., […], et al. A metabolic function of FGFR3-TACC3 gene fusions in cancer. Nature (2018).",
        url: "https://www.nature.com/articles/nature25171"
    },
    {
        citation: "Venkataramani V., […], Garofano L., […], et al. Glioblastoma hijacks neuronal mechanisms for brain invasion. Cell (2022)",
        url: "https://www.cell.com/cell/pdf/S0092-8674(22)00847-9.pdf"
    },
    {
        citation: "Varn F.S., […], Garofano L., Migliozzi S., […], et al. Glioma progression is shaped by genetic evolution and microenvironment interactions. Cell (2022)",
        url: "https://www.cell.com/cell/fulltext/S0092-8674(22)00536-0"
    },
    {
        citation: "Malta T.M., Sabedot T.S., Morosini N.S.*, Datta I.*, Garofano L.*, Vallentgoed W.R.*, Varn F.S.*, Migliozzi S., […], et al. The epigenetic evolution of gliomas is determined by their IDH1 mutation status and treatment regimen. Cancer Research (2021) (*=co-second authors)",
        url: "https://aacrjournals.org/cancerres/article/84/5/741/734933/The-Epigenetic-Evolution-of-Glioma-Is-Determined"
    },
    {
        citation: "Caruso F.P., Garofano L., […], et al. A map of tumor–host interactions in glioma at single-cell resolution. GigaScience (2020)",
        url: "https://academic.oup.com/gigascience/article/9/10/giaa109/5923174"
    },
    {
        citation: "Ceccarelli M., […], Garofano L., […], et al. Molecular profiling reveals biologically discrete subsets and pathways of progression in diffuse glioma. Cell (2016)",
        url: "https://www.cell.com/cell/references/S0092-8674(15)01692-X"
    },
    {
        citation: "Lee S.B., Garofano L., […], et al. Regulated interaction of ID2 with the anaphase-promoting complex links progression through mitosis with reactivation of cell-type-specific transcription. Nature Communication (2022)",
        url: "https://www.nature.com/articles/s41467-022-29502-2"
    },
    {
        citation: "Wang L., […], Garofano L., Migliozzi S., […], et al. Proteogenomic and metabolomic characterization of human glioblastoma. Cancer cell (2021)",
        url: "https://www.cell.com/cancer-cell/fulltext/S1535-6108(21)00050-7"
    },
    {
        citation: "Colaprico A., […], Garofano L., […], et al. TCGAbiolinks: an R/Bioconductor package for integrative analysis of TCGA data. Nucleic Acids Research (2016)",
        url: "https://academic.oup.com/nar/article/44/8/e71/2465925"
    },
    {
        citation: "Mall R., […], Garofano L., […], et al. RGBM: regularized gradient boosting machines for identification of the transcriptional regulators of discrete glioma subtypes. Nucleic Acids Research (2018)",
        url: "https://academic.oup.com/nar/article/46/7/e39/4817397"
    },
    {
        citation: "Di Iorio B.R., […], Garofano L., […], et al. Treatment of metabolic acidosis with sodium bicarbonate delays progression of chronic kidney disease: the UBI Study. Journal of Nephrology (2019)",
        url: "https://link.springer.com/article/10.1007/s40620-019-00656-5"
    },
    {
        citation: "Blomquist M.R., […], Garofano L., […], et al. Temporospatial genomic profiling in glioblastoma identifies commonly altered core pathways underlying tumor progression. Neuro-oncology advances (2020)",
        url: "https://academic.oup.com/noa/article/2/1/vdaa078/5859580"
    },
    {
        citation: "Gupta P., Dang M., Oberai S., Migliozzi S., […], Bhat K.P. Immune landscape of IDH-classified primary and recurrent human gliomas. Neuro-Oncology (2024)",
        url: "https://academic.oup.com/neuro-oncology/article/26/12/2239/7731280"
    },
    {
        citation: "Peshoff M.M., […], Migliozzi S., […], Bhat K. P. Triggering receptor expressed on myeloid cells 2 (pr) regulates phagocytosis in glioblastoma. Neuro-Oncology (2024)",
        url: "https://academic.oup.com/neuro-oncology/article/26/5/826/7572941?login=true"
    },
    {
        citation: "Liu J., […], Migliozzi S., Garofano L., […]. Multi-scale signaling and tumor evolution in high-grade gliomas. Cancer Cell (2024)",
        url: "https://www.cell.com/cancer-cell/fulltext/S1535-6108(24)00229-0"
    },
    {
        citation: "Huang C., […], Garofano L., Migliozzi S., […]. Proteogenomic insights into the biology and treatment of HPV-negative head and neck squamous cell carcinoma. Cancer cell (2021)",
        url: "https://www.cell.com/cancer-cell/fulltext/S1535-6108(20)30655-3"
    }
];

export function Publications() {
    const [showAll, setShowAll] = useState(false);
    const initialCount = 4;
    const displayPublications = showAll ? publications : publications.slice(0, initialCount);

    return (
        <section id="publications" className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-100">
                    <div className="text-center mb-12">
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

                    <div className="max-w-4xl mx-auto space-y-4">
                        <AnimatePresence mode="wait">
                            {displayPublications.map((pub, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ delay: index < initialCount ? index * 0.1 : 0 }}
                                    className="bg-white p-5 rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
                                >
                                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                                        <p className="text-slate-800 text-sm leading-relaxed font-medium">
                                            {pub.citation}
                                        </p>
                                        {pub.url && (
                                            <Link href={pub.url} target="_blank" className="shrink-0 text-teal-600 hover:text-teal-800 flex items-center gap-1 text-xs font-bold uppercase tracking-wide">
                                                Paper <ArrowUpRight className="w-3 h-3" />
                                            </Link>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>

                    <div className="mt-10 text-center">
                        <Button
                            onClick={() => setShowAll(!showAll)}
                            variant="outline"
                            className="bg-white border-teal-200 text-teal-700 hover:bg-teal-50 gap-2"
                        >
                            {showAll ? (
                                <>Show Less <ChevronUp className="w-4 h-4" /></>
                            ) : (
                                <>Show All Publications <ChevronDown className="w-4 h-4" /></>
                            )}
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
