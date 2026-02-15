import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-slate-900 text-slate-300 py-12">
            <div className="container mx-auto px-6 grid md:grid-cols-4 gap-8">
                <div>
                    <h3 className="text-white text-xl font-bold mb-4">GarMiglioLab</h3>
                    <p className="text-sm leading-relaxed">
                        Scientific innovation at the service of health. A private center of excellence for advanced medical research.
                    </p>
                </div>

                <div>
                    <h4 className="text-white font-semibold mb-4">Quick Links</h4>
                    <ul className="space-y-2 text-sm">
                        <li><Link href="#about" className="hover:text-teal-400">About Us</Link></li>
                        <li><Link href="#research" className="hover:text-teal-400">Research Areas</Link></li>
                        <li><Link href="#publications" className="hover:text-teal-400">Publications</Link></li>
                        <li><Link href="#contact" className="hover:text-teal-400">Work with us</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-white font-semibold mb-4">Contact</h4>
                    <ul className="space-y-3 text-sm">
                        <li className="flex items-start gap-3">
                            <MapPin className="w-5 h-5 text-teal-500 shrink-0" />
                            <span>The Translational Genomics Research Institute (TGen)<br />445 N 5th St 5th Floor,<br />Phoenix, AZ 85004, USA</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Phone className="w-5 h-5 text-teal-500 shrink-0" />
                            <span>+1 (555) 123-4567</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Mail className="w-5 h-5 text-teal-500 shrink-0" />
                            <span>info@garmigliolab.com</span>
                        </li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-white font-semibold mb-4">Legal</h4>
                    <ul className="space-y-2 text-sm">
                        <li><Link href="#" className="hover:text-teal-400">Privacy Policy</Link></li>
                        <li><Link href="#" className="hover:text-teal-400">Cookie Policy</Link></li>
                        <li><span className="text-slate-500">VAT/Tax ID Placeholder</span></li>
                    </ul>
                </div>
            </div>
            <div className="container mx-auto px-6 mt-12 pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
                &copy; {new Date().getFullYear()} GarMiglioLab LLC - All rights reserved.
            </div>
        </footer>
    );
}
