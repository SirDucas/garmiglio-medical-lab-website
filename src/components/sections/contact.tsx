"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Loader2, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useForm, ValidationError } from "@formspree/react";

export function Contact() {
    // Replace "YOUR_FORM_ID" with your actual Formspree Form ID
    // You can create a free form at https://formspree.io
    const [state, handleSubmit] = useForm("YOUR_FORM_ID");

    if (state.succeeded) {
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
                            onClick={() => window.location.reload()}
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
                        <div className="prose text-slate-600 mb-8 leading-relaxed">
                            <p className="mb-4">
                                We are looking for passionate, highly motivated, and talented staff computational scientists or postdoctoral researchers.
                            </p>
                            <p className="mb-4">
                                <strong>Requirements:</strong> PhD or Master’s Degree in statistics, mathematics, computational biology, bioinformatics,
                                or informatics with strong passion for cancer biology. One to two years research lab experience required.
                            </p>
                            <h4 className="text-lg font-bold text-slate-900 mt-6 mb-2">Our Values</h4>
                            <p className="italic text-slate-500 mb-4">
                                &quot;Our role as PIs is to support your professional development through individualized training plans and help you reach your career goals.&quot;
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <Mail className="w-6 h-6 text-teal-600 mt-1" />
                                <div>
                                    <p className="font-bold text-slate-900">Email Us</p>
                                    <a href="mailto:si.migliozzi@gmail.com" className="block text-slate-600 hover:text-teal-600">si.migliozzi@gmail.com</a>
                                    <a href="mailto:lucianogarofano88@gmail.com" className="block text-slate-600 hover:text-teal-600">lucianogarofano88@gmail.com</a>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <MapPin className="w-6 h-6 text-teal-600 mt-1" />
                                <div>
                                    <p className="font-bold text-slate-900">Laboratory</p>
                                    <p className="text-slate-600">GarMiglioLab</p>
                                    <p className="text-slate-600">United States</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-sm"
                    >
                        <h3 className="text-2xl font-bold text-slate-900 mb-6">Send us a message</h3>
                        <form onSubmit={handleSubmit} className="space-y-4">
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
                                    <ValidationError prefix="Name" field="name" errors={state.errors} className="text-red-500 text-xs" />
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
                                    <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-xs" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-sm font-medium text-slate-700">Subject</label>
                                <input
                                    id="subject"
                                    name="subject"
                                    placeholder="Application / Inquiry"
                                    required
                                    className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white text-sm"
                                />
                                <ValidationError prefix="Subject" field="subject" errors={state.errors} className="text-red-500 text-xs" />
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
                                <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-500 text-xs" />
                            </div>
                            <Button
                                type="submit"
                                disabled={state.submitting}
                                className="w-full bg-teal-600 hover:bg-teal-700 text-white font-medium py-2.5 disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {state.submitting ? (
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
