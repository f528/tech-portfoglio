"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { FaPaperPlane, FaUser, FaEnvelope, FaCommentAlt, FaCheckCircle, FaExclamationCircle } from "react-icons/fa";
import { API_URL } from "@/lib/api";

const ContactForm = () => {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormState({ ...formState, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("submitting");

        try {
            const res = await fetch(`${API_URL}/contact`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify(formState),
            });

            const data = await res.json();

            if (res.ok && data.success) {
                setStatus("success");
                setFormState({ name: "", email: "", subject: "", message: "" });
            } else {
                console.error("Submission error:", data);
                setStatus("error");
            }
        } catch (error) {
            console.error("Contact form error:", error);
            setStatus("error");
        }

        // Reset status after 5 seconds if not in submitting state
        setTimeout(() => setStatus("idle"), 5000);
    };

    return (
        <section id="contact" className="py-20 relative">
            <div className="max-w-4xl mx-auto px-4">
                <div className="text-center mb-12">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl md:text-5xl font-bold mb-4"
                    >
                        Initialize <span className="text-cyber-pink">_Handshake</span>
                    </motion.h2>
                    <p className="text-gray-400">
                        Ready to collaborate on secure, high-performance systems? Transmit your message.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                    {/* Contact Info / Decor */}
                    <div className="md:col-span-2 space-y-6">
                        <Card variant="glass" className="p-6 h-full flex flex-col justify-between">
                            <div>
                                <h3 className="text-xl font-bold text-white mb-6">Comm Channels</h3>
                                <div className="space-y-4">
                                    <div className="flex items-center text-gray-300">
                                        <div className="w-10 h-10 rounded-full bg-cyber-blue/10 flex items-center justify-center mr-4 text-cyber-blue">
                                            <FaEnvelope />
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-500 uppercase">Email</p>
                                            <p className="text-sm">faouzi_ee@hotmail.it</p>
                                        </div>
                                    </div>
                                    {/* Add more channels if needed */}
                                </div>
                            </div>

                            <div className="mt-8 p-4 bg-cyber-blue/5 rounded border border-cyber-blue/10 text-xs text-cyber-blue font-mono">
                                <p className="mb-2">$ status check</p>
                                <p className="text-green-400">System Online</p>
                                <p className="text-green-400">Encryption Active</p>
                                <p className="text-green-400">Ready for transmission...</p>
                            </div>
                        </Card>
                    </div>

                    {/* Form */}
                    <div className="md:col-span-3">
                        <Card variant="glass-dark" className="p-8 border-cyber-pink/20">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-xs uppercase tracking-wider text-gray-500">Codename / Name</label>
                                        <div className="relative">
                                            <FaUser className="absolute left-3 top-3.5 text-gray-600 group-focus-within:text-cyber-pink transition-colors" />
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formState.name}
                                                onChange={handleChange}
                                                required
                                                className="w-full bg-black/40 border border-white/10 rounded-md py-3 pl-10 pr-4 text-white focus:outline-none focus:border-cyber-pink focus:shadow-[0_0_10px_rgba(255,0,110,0.3)] transition-all"
                                                placeholder="John Doe"
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-xs uppercase tracking-wider text-gray-500">Frequency / Email</label>
                                        <div className="relative">
                                            <FaEnvelope className="absolute left-3 top-3.5 text-gray-600" />
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formState.email}
                                                onChange={handleChange}
                                                required
                                                className="w-full bg-black/40 border border-white/10 rounded-md py-3 pl-10 pr-4 text-white focus:outline-none focus:border-cyber-pink focus:shadow-[0_0_10px_rgba(255,0,110,0.3)] transition-all"
                                                placeholder="john@example.com"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="subject" className="text-xs uppercase tracking-wider text-gray-500">Subject</label>
                                    <div className="relative">
                                        <FaCommentAlt className="absolute left-3 top-3.5 text-gray-600" />
                                        <input
                                            type="text"
                                            id="subject"
                                            name="subject"
                                            value={formState.subject}
                                            onChange={handleChange}
                                            required
                                            className="w-full bg-black/40 border border-white/10 rounded-md py-3 pl-10 pr-4 text-white focus:outline-none focus:border-cyber-pink focus:shadow-[0_0_10px_rgba(255,0,110,0.3)] transition-all"
                                            placeholder="Project Inquiry"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-xs uppercase tracking-wider text-gray-500">Message Payload</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formState.message}
                                        onChange={handleChange}
                                        required
                                        rows={5}
                                        className="w-full bg-black/40 border border-white/10 rounded-md p-4 text-white focus:outline-none focus:border-cyber-pink focus:shadow-[0_0_10px_rgba(255,0,110,0.3)] transition-all"
                                        placeholder="Details about your project or inquiry..."
                                    ></textarea>
                                </div>

                                {status === "success" && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        className="p-4 bg-green-500/10 border border-green-500/20 rounded-md flex items-center gap-3 text-green-400 text-sm"
                                    >
                                        <FaCheckCircle className="text-xl shrink-0" />
                                        <p>Transmission successful! I will respond to your frequency shortly.</p>
                                    </motion.div>
                                )}

                                {status === "error" && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        className="p-4 bg-red-500/10 border border-red-500/20 rounded-md flex items-center gap-3 text-red-400 text-sm"
                                    >
                                        <FaExclamationCircle className="text-xl shrink-0" />
                                        <p>Transmission failed. Check your connection and try again.</p>
                                    </motion.div>
                                )}

                                <Button
                                    type="submit"
                                    className="w-full bg-cyber-pink hover:bg-pink-600 text-white border-none"
                                    isLoading={status === "submitting"}
                                    rightIcon={status === "success" ? <FaCheckCircle /> : <FaPaperPlane />}
                                    disabled={status === "success"}
                                >
                                    {status === "idle" && "Transmit Message"}
                                    {status === "submitting" && "Transmitting..."}
                                    {status === "success" && "Transmission Complete"}
                                    {status === "error" && "Retry Transmission"}
                                </Button>
                            </form>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
