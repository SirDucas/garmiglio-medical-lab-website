"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Loader2, CheckCircle2, ChevronRight, Briefcase, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Contact() {
    const [subject, setSubject] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSucceeded, setIsSucceeded] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const API_ENDPOINT = "/api/contact";

    const customHandleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setErrorMessage("");

        const formData = new FormData(e.currentTarget);

        try {
            const response = await fetch(API_ENDPOINT, {
                method: "POST",
                body: formData
            });

            if (response.ok) {
                setIsSucceeded(true);
            } else {
                const data = await response.json();
                setErrorMessage(data.error || "Something went wrong sending the email. Please try again later.");
            }
        } catch (error) {
            setErrorMessage("Network error. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const MAX_SIZE = 10 * 1024 * 1024; // 10MB
        const files = e.target.files;
        if (files) {
            for (let i = 0; i < files.length; i++) {
                if (files[i].size > MAX_SIZE) {
                    alert(`Il file "${files[i].name}" supera il limite di 10MB. Si prega di caricare un file più piccolo.`);
                    e.target.value = ''; // Reset the input
                    return;
                }
            }
        }
    };

    if (isSucceeded) {
        return (
            <section id="contact" className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="max-w-md mx-auto text-center p-8 bg-teal-50 rounded-2xl border border-teal-100"
                    >
                        <div className="w-16 h-16 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                            <CheckCircle2 className="w-8 h-8" />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-2">Message Sent!</h3>
                        <p className="text-slate-600 mb-6">
                            Thank you for contacting GarMiglioLab. We will get back to you as soon as possible.
                        </p>
                        <Button
                            variant="outline"
                            onClick={() => {
                                setIsSucceeded(false);
                                setSubject("");
                            }}
                            className="text-teal-700 border-teal-200 hover:bg-teal-100"
                        >
                            Send Another Message
                        </Button>
                    </motion.div>
                </div>
            </section>
        );
    }

    return (
        <section id="contact" className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16">
                    {/* Join Us / Info Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                            Join Our <span className="text-teal-700">Team</span>
                        </h2>
                        <div className="prose text-slate-600 mb-8 leading-relaxed text-justify">
                            <p className="mb-4">
                                We are looking for passionate, highly motivated and talented staff computational scientists or postdoctoral researchers.
                                Candidates with PhD or Master’s Degree in statistics, mathematics, computational biology, bioinformatics and informatics
                                with strong passion for cancer biology are welcome to contact us and potentially join our team.
                                One to two years research lab experience are required.
                            </p>

                            <div className="my-6 p-4 bg-teal-50 rounded-lg border-l-4 border-teal-500">
                                <h4 className="font-bold text-teal-800 mb-2">Contacts</h4>
                                <a href="mailto:smigliozzi@tgen.org" className="block text-slate-700 hover:text-teal-700">smigliozzi@tgen.org</a>
                                <a href="mailto:lgarofano@tgen.org" className="block text-slate-700 hover:text-teal-700">lgarofano@tgen.org</a>
                            </div>

                            <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">Lab’s mission and values</h3>

                            <div className="space-y-4">
                                <div>
                                    <h4 className="font-semibold text-slate-800">Professional Development</h4>
                                    <p className="text-sm">
                                        Our role as PIs is to support your professional development through individualized training plan and help you reach your career goals.
                                        We will help you promoting your work, establishing a network, and be an advocate for larger administrative issues.
                                    </p>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-slate-800">Regular Meetings</h4>
                                    <p className="text-sm">
                                        We will have regular weekly lab meetings to review the data generated, troubleshoot any technical problems, brainstorm together
                                        and establish research plans for the subsequent week. Everyone’s opinion is valuable.
                                    </p>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-slate-800">Collaboration & Teamwork</h4>
                                    <p className="text-sm">
                                        Collaboration and teamwork are the keys to impactful research. We seek candidates who are willing to help others as well as
                                        work together with researchers with different expertise and clinicians to achieve scientific excellence.
                                    </p>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-slate-800">Open Communication</h4>
                                    <p className="text-sm">
                                        Our lab has open door policy to encourage open communication. You can talk to us about any professional or personal issues.
                                    </p>
                                </div>
                                <div>
                                    <p className="text-sm italic font-medium mt-2">
                                        "Our lab is committed to fostering a respectful, collaborative, and welcoming environment where individuals from all backgrounds can thrive and contribute meaningfully to scientific discovery."
                                    </p>
                                </div>
                            </div>

                            <div className="mt-12">
                                <h3 className="text-2xl font-bold text-slate-900 mb-6">Current Openings</h3>
                                <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                                    <div className="p-6">
                                        <div className="flex items-start justify-between mb-4">
                                            <div>
                                                <h4 className="text-xl font-bold text-teal-800">Computational Scientist Roles</h4>
                                                <p className="text-slate-500 font-medium text-sm mt-1">GarMiglio Lab</p>
                                            </div>
                                            <span className="bg-teal-50 text-teal-700 px-3 py-1 rounded-full text-xs font-semibold border border-teal-100 whitespace-nowrap">Full-time</span>
                                        </div>

                                        <div className="space-y-2 mb-6 text-sm text-slate-600">
                                            <div className="flex items-center gap-2">
                                                <MapPin className="w-4 h-4 text-slate-400 shrink-0" />
                                                <span>The Translational Genomics Research Institute (TGen), Phoenix</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Briefcase className="w-4 h-4 text-slate-400 shrink-0" />
                                                <span>Bioinnovation and Genome Sciences & Clinical Genomics and Therapeutics Divisions</span>
                                            </div>
                                        </div>

                                        <div className="prose prose-sm text-slate-600 mb-6 max-w-none text-justify">
                                            <p>
                                                The <a href="https://garmigliolab.com/" className="text-teal-600 hover:text-teal-700" target="_blank" rel="noopener noreferrer">GarMiglio Lab</a> led by Dr. Luciano Garofano and Dr. Simona Migliozzi at <a href="https://www.tgen.org/" className="text-teal-600 hover:text-teal-700" target="_blank" rel="noopener noreferrer">The Translational Genomics Research Institute</a> is an interdisciplinary research group aimed at understanding the molecular mechanisms of cancer progression, metastasis, and resistance to therapy in solid tumors, with particular focus on adult and pediatric brain tumors, lung, breast, melanoma, and brain metastasis.
                                            </p>
                                            <p>
                                                Our groups combine patient biospecimens, computational approaches, and experimental models to dissect cancer heterogeneity, identify functional and clinically relevant tumor subtypes, and extract targetable molecular nodes, with the final aim of developing more effective therapies that improve survival outcomes for cancer patients.
                                            </p>

                                            <h5 className="font-bold text-slate-800 mt-4 mb-2">Ongoing projects include:</h5>
                                            <ul className="list-disc pl-5 space-y-1 mb-4">
                                                <li>Dissecting glioma ecosystem during evolution</li>
                                                <li>Role of neurons-cancer crosstalk in non-CNS tumor progression</li>
                                                <li>Reconstructing the spatiotemporal proteomic mosaicism in pediatric brain tumors</li>
                                            </ul>

                                            <p>
                                                We are looking for talented researchers to develop computational pipelines and implement analytical models to integrate multi-omics data. Candidates with expertise in machine learning approaches and reconstruction of gene/protein regulatory networks, and with knowledge of or strong interest in cancer biology, are encouraged to apply.
                                            </p>

                                            <p>
                                                The successful candidate will take a leadership role in ongoing projects as well as develop new research ideas. Specific duties will include data analysis, interpretation of results, presentation of findings, and preparation of peer-reviewed manuscripts and grant proposals.
                                            </p>

                                            <div className="grid md:grid-cols-2 gap-6 mt-6">
                                                <div>
                                                    <h5 className="font-bold text-slate-800 flex items-center gap-2 mb-3">
                                                        <GraduationCap className="w-4 h-4 text-teal-600" /> Required
                                                    </h5>
                                                    <ul className="list-disc pl-5 space-y-1 text-slate-600">
                                                        <li>Master's or PhD in Computational Biology, Bioinformatics, Computer Science, Statistics, or related</li>
                                                        <li>Deep proficiency or strong interest in molecular cancer biology</li>
                                                        <li>Excellent communication and organizational skills</li>
                                                        <li>Ability to manage time and multitask effectively</li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <h5 className="font-bold text-slate-800 flex items-center gap-2 mb-3">
                                                        <CheckCircle2 className="w-4 h-4 text-teal-600" /> Preferred
                                                    </h5>
                                                    <ul className="list-disc pl-5 space-y-1 text-slate-600">
                                                        <li>At least 1 year of research experience</li>
                                                        <li>Experience coding in bash, Python and/or R</li>
                                                        <li>Experience with Bioconductor packages</li>
                                                        <li>Confidence operating cluster systems (SLURM/PBS)</li>
                                                    </ul>
                                                </div>
                                            </div>

                                            <div className="mt-6 p-4 bg-slate-50 rounded-lg border border-slate-200">
                                                <h5 className="font-bold text-slate-800 mb-2">Application instructions</h5>
                                                <p className="text-sm">
                                                    Please apply by emailing a cover letter (Statement of Research, optional), your CV, and contact information for two references to: <a href="mailto:smigliozzi@tgen.org" className="text-teal-600 hover:underline">smigliozzi@tgen.org</a> &amp; <a href="mailto:lgarofano@tgen.org" className="text-teal-600 hover:underline">lgarofano@tgen.org</a>.
                                                </p>
                                            </div>
                                        </div>

                                        <Button
                                            className="w-full bg-slate-900 hover:bg-slate-800 text-white shadow-sm"
                                            onClick={() => {
                                                const form = document.getElementById('application-form');
                                                if (form) {
                                                    const topOffset = form.getBoundingClientRect().top + window.scrollY - 100;
                                                    window.scrollTo({ top: topOffset, behavior: 'smooth' });
                                                    setSubject("Application: Computational Scientist Role");
                                                }
                                            }}
                                        >
                                            Apply for this position <ChevronRight className="w-4 h-4 ml-1" />
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-sm sticky top-24"
                    >
                        <h3 className="text-2xl font-bold text-slate-900 mb-6">Send us a message</h3>

                        {errorMessage && (
                            <div className="mb-4 p-3 bg-red-50 text-red-600 text-sm rounded-md border border-red-200">
                                {errorMessage}
                            </div>
                        )}

                        <form id="application-form" onSubmit={customHandleSubmit} className="space-y-4" encType="multipart/form-data">
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium text-slate-700">Name</label>
                                    <input
                                        id="name"
                                        name="name"
                                        placeholder="Your name"
                                        required
                                        className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white text-sm"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium text-slate-700">Email</label>
                                    <input
                                        id="email"
                                        type="email"
                                        name="email"
                                        placeholder="john@example.com"
                                        required
                                        className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white text-sm"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-sm font-medium text-slate-700">Subject</label>
                                <input
                                    id="subject"
                                    name="subject"
                                    value={subject}
                                    onChange={(e) => setSubject(e.target.value)}
                                    placeholder="Application / Inquiry"
                                    required
                                    className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white text-sm focus:bg-teal-50/50 transition-colors"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-slate-700">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    placeholder="How can we help you?"
                                    required
                                    className="w-full min-h-[150px] px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white text-sm resize-y"
                                />
                            </div>

                            <div className="space-y-4 pt-4 border-t border-slate-200">
                                <h4 className="text-sm font-bold text-slate-800">Attachments (Optional / If applying)</h4>
                                <p className="text-xs text-slate-500 mb-2">Max file size: 10MB per file.</p>

                                <div className="space-y-2">
                                    <label htmlFor="cv" className="block text-sm font-medium text-slate-700">
                                        Curriculum Vitae (CV)
                                    </label>
                                    <input
                                        id="cv"
                                        type="file"
                                        name="cv"
                                        accept=".pdf,.doc,.docx"
                                        onChange={handleFileChange}
                                        className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-teal-50 file:text-teal-700 hover:file:bg-teal-100 cursor-pointer"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="coverLetter" className="block text-sm font-medium text-slate-700">
                                        Cover Letter
                                    </label>
                                    <input
                                        id="coverLetter"
                                        type="file"
                                        name="coverLetter"
                                        accept=".pdf,.doc,.docx"
                                        onChange={handleFileChange}
                                        className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-teal-50 file:text-teal-700 hover:file:bg-teal-100 cursor-pointer"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="otherFiles" className="block text-sm font-medium text-slate-700">
                                        Other Documents
                                    </label>
                                    <input
                                        id="otherFiles"
                                        type="file"
                                        name="otherFiles"
                                        multiple
                                        accept=".pdf,.doc,.docx,.zip"
                                        onChange={handleFileChange}
                                        className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-teal-50 file:text-teal-700 hover:file:bg-teal-100 cursor-pointer"
                                    />
                                    <p className="text-xs text-slate-500 mt-1">You can attach multiple extra files if needed (Max 10MB each).</p>
                                </div>
                            </div>

                            <Button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-teal-600 hover:bg-teal-700 text-white font-medium py-2.5 disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? (
                                    <span className="flex items-center gap-2">
                                        <Loader2 className="w-4 h-4 animate-spin" /> Sending...
                                    </span>
                                ) : (
                                    "Send Message"
                                )}
                            </Button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
