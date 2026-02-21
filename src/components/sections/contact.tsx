"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Loader2, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useForm, ValidationError } from "@formspree/react";

export function Contact() {
    // Replace "YOUR_FORM_ID" with your actual Formspree Form ID
    // You can create a free form at https://formspree.io
    const [state, handleSubmit] = useForm("mbdaadya");

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
