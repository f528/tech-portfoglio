"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Project } from "@/lib/types";
import { STORAGE_URL } from "@/lib/api";
import Image from "next/image";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { FaGithub, FaExternalLinkAlt, FaCode, FaShieldAlt, FaServer } from "react-icons/fa";

interface ProjectsGridProps {
    projects: Project[];
}

const ProjectsGrid = ({ projects }: ProjectsGridProps) => {
    const [filter, setFilter] = useState<Project["category"] | "all">("all");
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    const filteredProjects = projects.filter(
        (p) => filter === "all" || p.category === filter
    );

    return (
        <section id="projects" className="py-20 relative">
            <div className="absolute inset-0 bg-gradient-to-b from-black via-black/50 to-black pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl md:text-5xl font-bold mb-4"
                    >
                        Mission <span className="text-cyber-blue">_Logs</span>
                    </motion.h2>
                    <p className="text-gray-400 max-w-2xl mx-auto mb-8">
                        Selected operations and deployed systems.
                    </p>

                    <div className="flex flex-wrap justify-center gap-4">
                        {["all", "web", "security", "fullstack"].map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat as any)}
                                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${filter === cat
                                    ? "bg-cyber-blue text-white border-cyber-blue shadow-[0_0_15px_rgba(0,102,255,0.4)]"
                                    : "bg-transparent text-gray-400 border-white/10 hover:border-white/30 hover:text-white"
                                    }`}
                            >
                                {cat.charAt(0).toUpperCase() + cat.slice(1)}
                            </button>
                        ))}
                    </div>
                </div>

                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    <AnimatePresence>
                        {filteredProjects.map((project) => (
                            <motion.div
                                key={project.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                            >
                                <Card
                                    variant="glass-dark"
                                    className="h-full flex flex-col p-0 overflow-hidden group hover:border-cyber-blue/50 transition-colors duration-300"
                                    hoverEffect
                                >
                                    <div className="relative h-48 overflow-hidden bg-black/40">
                                        {/* Image Logic: if starts with http use it, otherwise prepend storage or use gradient placeholder */}
                                        {project.image ? (
                                            <Image
                                                src={project.image.startsWith('http') ? project.image : `${STORAGE_URL}/${project.image}`}
                                                alt={project.title}
                                                fill
                                                className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                loading="lazy"
                                                unoptimized
                                            />
                                        ) : (
                                            <div className={`w-full h-full bg-gradient-to-br ${project.category === 'security' ? 'from-green-900 to-black' :
                                                project.category === 'web' ? 'from-blue-900 to-black' : 'from-purple-900 to-black'
                                                } group-hover:scale-110 transition-transform duration-700 ease-out flex items-center justify-center`}>
                                                {project.category === 'security' ? <FaShieldAlt className="text-6xl text-white/20" /> :
                                                    project.category === 'web' ? <FaCode className="text-6xl text-white/20" /> : <FaServer className="text-6xl text-white/20" />}
                                            </div>
                                        )}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10 opacity-60"></div>

                                        <div className="absolute top-4 right-4 z-20">
                                            <span className={`px-3 py-1 text-xs font-bold rounded bg-black/50 backdrop-blur-md border border-white/10 ${project.category === 'security' ? 'text-green-400 border-green-400/30' :
                                                project.category === 'web' ? 'text-cyber-cyan border-cyber-cyan/30' : 'text-cyber-purple border-cyber-purple/30'
                                                }`}>
                                                {project.category.toUpperCase()}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="p-6 flex flex-col flex-grow">
                                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyber-blue transition-colors">
                                            {project.title}
                                        </h3>
                                        <p className="text-gray-400 text-sm mb-6 line-clamp-3">
                                            {project.description}
                                        </p>

                                        <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                                            {(project.technologies || []).slice(0, 3).map((tech, i) => (
                                                <span key={i} className="text-xs px-2 py-1 bg-white/5 rounded text-gray-300 border border-white/5">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>

                                        <div className="flex gap-4">
                                            {project.githubUrl && (
                                                <a href={project.githubUrl} className="text-gray-400 hover:text-white transition-colors">
                                                    <FaGithub size={20} />
                                                </a>
                                            )}
                                            {project.demoUrl && (
                                                <a href={project.demoUrl} className="text-gray-400 hover:text-white transition-colors">
                                                    <FaExternalLinkAlt size={18} />
                                                </a>
                                            )}
                                            <Button
                                                size="sm"
                                                variant="outline"
                                                className="ml-auto"
                                                onClick={() => setSelectedProject(project)}
                                            >
                                                Details
                                            </Button>
                                        </div>
                                    </div>
                                </Card>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>

            {/* Project Details Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedProject(null)}
                            className="absolute inset-0 bg-black/90 backdrop-blur-md"
                        ></motion.div>

                        <motion.div
                            initial={{ scale: 0.95, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.95, opacity: 0, y: 20 }}
                            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto z-10 rounded-xl"
                        >
                            <Card variant="glass-dark" className="border-cyber-blue/30 shadow-[0_0_50px_rgba(0,102,255,0.1)] p-0">
                                <div className="h-64 bg-gradient-to-r from-gray-900 to-black relative flex items-center justify-center">
                                    {selectedProject.image ? (
                                        <Image
                                            src={selectedProject.image.startsWith('http') ? selectedProject.image : `${STORAGE_URL}/${selectedProject.image}`}
                                            alt={selectedProject.title}
                                            fill
                                            className="object-cover opacity-60"
                                            sizes="(max-width: 1024px) 100vw, 1024px"
                                            unoptimized
                                        />
                                    ) : (
                                        <div className={`absolute inset-0 bg-gradient-to-br ${selectedProject.category === 'security' ? 'from-green-900/40 to-black' :
                                            selectedProject.category === 'web' ? 'from-blue-900/40 to-black' : 'from-purple-900/40 to-black'
                                            }`}></div>
                                    )}
                                    <h2 className="text-4xl md:text-5xl font-bold text-white relative z-10">{selectedProject.title}</h2>
                                    <button
                                        onClick={() => setSelectedProject(null)}
                                        className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-white/20 transition-colors"
                                    >
                                        ×
                                    </button>
                                </div>

                                <div className="p-8">
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {(selectedProject.technologies || []).map((tech, i) => (
                                            <span key={i} className="text-sm px-3 py-1 bg-cyber-blue/10 text-cyber-blue rounded-full border border-cyber-blue/20">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                        <div className="md:col-span-2 space-y-4">
                                            <h3 className="text-xl font-bold text-white">Project Overview</h3>
                                            <p className="text-gray-300 leading-relaxed">
                                                {selectedProject.description}
                                            </p>
                                        </div>

                                        <div className="space-y-6">
                                            <Card variant="glass" className="p-6">
                                                <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">Project Links</h4>
                                                <div className="space-y-3">
                                                    {selectedProject.demoUrl && (
                                                        <Button className="w-full" onClick={() => window.open(selectedProject.demoUrl, '_blank')} rightIcon={<FaExternalLinkAlt />}>View Live Demo</Button>
                                                    )}
                                                    {selectedProject.githubUrl && (
                                                        <Button variant="outline" className="w-full" onClick={() => window.open(selectedProject.githubUrl, '_blank')} leftIcon={<FaGithub />}>Source Code</Button>
                                                    )}
                                                </div>
                                            </Card>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default ProjectsGrid;
