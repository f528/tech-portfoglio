"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Certification } from "@/lib/types";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { FaTimes, FaExternalLinkAlt, FaAward, FaShieldAlt, FaLock, FaTerminal } from "react-icons/fa";
import { SiLaravel, SiGoogle, SiSplunk, SiAmazon, SiTryhackme } from "react-icons/si";
import Image from "next/image";
import { STORAGE_URL } from "@/lib/api";

// Icon mapping for certification logos
const iconMap: { [key: string]: React.ElementType } = {
    SiLaravel: SiLaravel,
    SiGoogle: SiGoogle,
    FaShieldAlt: FaShieldAlt,
    FaTerminal: FaTerminal,
    FaLock: FaLock,
    SiSplunk: SiSplunk,
    SiAmazon: SiAmazon,
    SiTryhackme: SiTryhackme,
};

interface CertificationCardsProps {
    certifications: Certification[];
}

const CertificationCards = ({ certifications }: CertificationCardsProps) => {
    const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-white flex items-center">
                    <span className="w-2 h-8 bg-cyber-blue mr-3 rounded-full shadow-[0_0_10px_#0066ff]"></span>
                    Certifications & Badges
                </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {certifications.map((cert, index) => (
                    <motion.div
                        key={cert.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        viewport={{ once: true }}
                        onClick={() => setSelectedCert(cert)}
                        className="cursor-pointer"
                    >
                        <Card
                            variant="glass"
                            className="h-full flex flex-col items-center text-center overflow-hidden hover:border-cyber-cyan/50 hover:bg-white/10 transition-all duration-300 group relative"
                            hoverEffect
                        >
                            {/* Decorative background glow */}
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-cyber-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                            {/* Image/Icon Container - Full Width */}
                            <motion.div
                                whileHover={{
                                    scale: 1.05,
                                }}
                                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                className="relative w-full h-48 bg-gray-900/50 flex items-center justify-center overflow-hidden"
                            >
                                {(() => {
                                    const IconComponent = cert.icon ? iconMap[cert.icon] : FaAward;

                                    if (cert.badge && !cert.badge.includes("placeholder")) {
                                        const badgeSrc = cert.badge.startsWith('http') || cert.badge.startsWith('/')
                                            ? cert.badge
                                            : `${STORAGE_URL}/${cert.badge}`;
                                        return (
                                            <Image
                                                src={badgeSrc}
                                                alt={cert.name}
                                                fill
                                                className="object-cover"
                                                unoptimized
                                            />
                                        );
                                    }

                                    return <IconComponent className="text-6xl text-cyber-cyan group-hover:text-cyber-pink transition-colors" />;
                                })()}

                                {/* Overlay gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60"></div>
                            </motion.div>

                            {/* Content Section */}
                            <div className="p-4 flex-1 flex flex-col justify-between w-full">
                                <div>
                                    <h4 className="font-bold text-white text-base mb-1 line-clamp-2 group-hover:text-cyber-cyan transition-colors">
                                        {cert.name}
                                    </h4>
                                    <p className="text-xs text-gray-400 mb-2">{cert.issuer}</p>
                                </div>
                                <div className="mt-auto">
                                    <span className="text-[10px] bg-cyber-blue/10 text-cyber-blue px-2 py-0.5 rounded border border-cyber-blue/20">
                                        {cert.date}
                                    </span>
                                </div>
                            </div>
                        </Card>
                    </motion.div>
                ))}
            </div>

            {/* Modal Detail View */}
            <AnimatePresence>
                {selectedCert && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedCert(null)}
                            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                        ></motion.div>

                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            className="relative w-full max-w-2xl z-10"
                        >
                            <Card variant="glass-dark" className="border-cyber-cyan/30 shadow-[0_0_50px_rgba(0,240,255,0.15)] overflow-hidden">
                                <button
                                    onClick={() => setSelectedCert(null)}
                                    className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-10 bg-gray-900/80 rounded-full p-2"
                                >
                                    <FaTimes size={20} />
                                </button>

                                {/* Hero Image Section */}
                                <div className="relative w-full h-64 bg-gray-900/50 flex items-center justify-center overflow-hidden">
                                    {selectedCert.badge && !selectedCert.badge.includes("placeholder") ? (
                                        <>
                                            <Image
                                                src={selectedCert.badge.startsWith('http') || selectedCert.badge.startsWith('/')
                                                    ? selectedCert.badge
                                                    : `${STORAGE_URL}/${selectedCert.badge}`}
                                                alt={selectedCert.name}
                                                fill
                                                className="object-cover"
                                                unoptimized
                                            />
                                            {/* Overlay gradient */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
                                        </>
                                    ) : (
                                        <FaShieldAlt className="text-8xl text-cyber-cyan" />
                                    )}
                                </div>

                                {/* Content Section */}
                                <div className="p-6">
                                    <h3 className="text-2xl font-bold text-white mb-2">{selectedCert.name}</h3>
                                    <p className="text-cyber-blue font-mono mb-6">{selectedCert.issuer} • {selectedCert.date}</p>

                                    <div className="w-full bg-white/5 rounded-lg p-4 text-left border border-white/5 mb-6">
                                        <h5 className="text-xs uppercase tracking-wider text-gray-500 mb-2">Description</h5>
                                        <p className="text-gray-300 text-sm leading-relaxed">
                                            {selectedCert.description}
                                        </p>
                                    </div>

                                    {selectedCert.credentialUrl && (
                                        <Button
                                            onClick={() => window.open(selectedCert.credentialUrl, "_blank")}
                                            rightIcon={<FaExternalLinkAlt />}
                                            glow
                                        >
                                            Verify Credential
                                        </Button>
                                    )}
                                </div>
                            </Card>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default CertificationCards;
