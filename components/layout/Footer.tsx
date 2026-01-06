import React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaHeart, FaLock } from "react-icons/fa";
import Container from "@/components/ui/Container";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-white/10 bg-black/40 backdrop-blur-sm pt-16 pb-8">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-1">
                        <Link href="/" className="text-2xl font-bold font-mono mb-4 block">
                            <span className="text-cyber-cyan">&lt;</span>
                            <span className="text-white">Fouzi</span>
                            <span className="text-cyber-cyan">/&gt;</span>
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6">
                            Building secure, scalable, and futuristic web experiences.
                            Bridging the gap between creative frontend and robust backend security.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="p-2 rounded-lg bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] transition-all duration-300">
                                <FaGithub size={18} />
                            </a>
                            <a href="#" className="p-2 rounded-lg bg-[#0077b5]/10 border border-[#0077b5]/30 text-[#0077b5] hover:bg-[#0077b5]/20 hover:shadow-[0_0_20px_rgba(0,119,181,0.5)] transition-all duration-300">
                                <FaLinkedin size={18} />
                            </a>
                            <a href="#" className="p-2 rounded-lg bg-[#1da1f2]/10 border border-[#1da1f2]/30 text-[#1da1f2] hover:bg-[#1da1f2]/20 hover:shadow-[0_0_20px_rgba(29,161,242,0.5)] transition-all duration-300">
                                <FaTwitter size={18} />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-white font-bold mb-6">Navigation</h3>
                        <ul className="space-y-3 text-sm">
                            <li><Link href="#about" className="text-gray-400 hover:text-cyber-cyan transition-colors">About Me</Link></li>
                            <li><Link href="#skills" className="text-gray-400 hover:text-cyber-cyan transition-colors">Skills & Tech</Link></li>
                            <li><Link href="#projects" className="text-gray-400 hover:text-cyber-cyan transition-colors">Portfolio</Link></li>
                            <li><Link href="#certifications" className="text-gray-400 hover:text-cyber-cyan transition-colors">Certifications</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-bold mb-6">Services</h3>
                        <ul className="space-y-3 text-sm">
                            <li><a href="#" className="text-gray-400 hover:text-cyber-cyan transition-colors">Full Stack Development</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-cyber-cyan transition-colors">Cybersecurity Audits</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-cyber-cyan transition-colors">Penetration Testing</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-cyber-cyan transition-colors">Cloud Architecture</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-bold mb-6">Contact</h3>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-center text-gray-400">
                                <FaEnvelope className="mr-2 text-cyber-cyan" />
                                faouzi_ee@hotmail.it
                            </li>
                            <li className="text-gray-400">
                                Milan, Italy
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
                    <p>&copy; {currentYear} Fouzi. All rights reserved.</p>
                    <p className="flex items-center mt-2 md:mt-0">
                        Made with <FaHeart className="text-cyber-pink mx-1" /> using Next.js & Tailwind
                    </p>
                    <a href="http://127.0.0.1:8000/admin" target="_blank" rel="noopener noreferrer" className="ml-4 text-gray-700 hover:text-cyber-cyan transition-colors" title="Admin Access">
                        <FaLock size={12} />
                    </a>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;
