"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navItems = [
        { name: "Home", href: "/" },
        { name: "About", href: "#about" },
        { name: "People", href: "#people" },
        { name: "Projects", href: "#projects" },
        { name: "Software", href: "#software" },
        { name: "Publications", href: "#publications" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                scrolled ? "bg-white/80 backdrop-blur-md shadow-md py-4" : "bg-transparent py-6"
            )}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="w-10 h-10 bg-teal-600 rounded-xl flex items-center justify-center text-white font-bold text-xl group-hover:scale-105 transition-transform">
                        GM
                    </div>
                    <div className="flex flex-col">
                        <span className={cn("text-xl font-bold leading-none", scrolled ? "text-slate-900" : "text-white")}>
                            GarMiglioLab
                        </span>
                        <span className={cn("text-xs leading-none opacity-80", scrolled ? "text-slate-500" : "text-slate-200")}>
                            Precision Medicine
                        </span>
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={cn(
                                "text-sm font-medium transition-colors hover:text-teal-500",
                                scrolled ? "text-slate-600" : "text-slate-200"
                            )}
                        >
                            {item.name}
                        </Link>
                    ))}
                    <Link href="#contact">
                        <Button
                            variant={scrolled ? "primary" : "secondary"}
                            className={cn(
                                "font-semibold",
                                !scrolled && "bg-white text-teal-900 hover:bg-slate-100"
                            )}
                        >
                            Get in Touch
                        </Button>
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 text-slate-400 hover:text-white transition-colors"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X className={cn("w-6 h-6", scrolled && "text-slate-900")} /> : <Menu className={cn("w-6 h-6", scrolled && "text-slate-900")} />}
                </button>
            </div>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-t border-slate-100"
                    >
                        <div className="container mx-auto px-6 py-4 flex flex-col gap-4">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="text-slate-600 font-medium py-2 hover:text-teal-600 transition-colors"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <div className="pt-4 border-t border-slate-100">
                                <Link href="#contact" onClick={() => setIsOpen(false)}>
                                    <Button className="w-full">Get in Touch</Button>
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
