import { Project, Skill, Certification, TimelineEvent, Stat, SocialLink } from "./types";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import { SiLaravel, SiReact, SiVuedotjs, SiTailwindcss, SiTypescript, SiDocker, SiAmazon, SiMysql, SiKalilinux, SiWireshark, SiSplunk } from "react-icons/si";

export const personalInfo = {
    name: "Fouzi",
    title: "Full Stack Developer & Cybersecurity Specialist",
    email: "fouzi@example.com",
    location: "Milan, Italy",
    bio: "Full Stack Developer with a strong passion for Cyber Security and Pentesting. I specialize in building secure, scalable, and visually high-impact web applications. By combining the power of Laravel in the backend with the agility of React in the frontend, I ensure every line of code is protected by security best practices.",
    avatar: "/images/profile_avatar.png", // Added placeholder avatar
    socials: [
        { name: "GitHub", url: "https://github.com", icon: "FaGithub" },
        { name: "LinkedIn", url: "https://linkedin.com", icon: "FaLinkedin" },
        { name: "Twitter", url: "https://twitter.com", icon: "FaTwitter" },
        { name: "Email", url: "mailto:alex.cyber@example.com", icon: "FaEnvelope" },
    ] as SocialLink[],
};

export const skills: Skill[] = [
    // Frontend
    { name: "React / Next.js", level: 90, category: "frontend", icon: "SiReact" },
    { name: "Vue.js", level: 85, category: "frontend", icon: "SiVuedotjs" },
    { name: "TypeScript", level: 88, category: "frontend", icon: "SiTypescript" },
    { name: "Tailwind CSS", level: 95, category: "frontend", icon: "SiTailwindcss" },

    // Backend
    { name: "Laravel", level: 98, category: "backend", icon: "SiLaravel" },
    { name: "PHP", level: 95, category: "backend" },
    { name: "MySQL / PostgreSQL", level: 90, category: "backend", icon: "SiMysql" },
    { name: "Node.js", level: 80, category: "backend" },

    // Cybersecurity
    { name: "Penetration Testing", level: 85, category: "cybersecurity", icon: "SiKalilinux" },
    { name: "Network Security", level: 88, category: "cybersecurity", icon: "SiWireshark" },
    { name: "SIEM (Splunk)", level: 80, category: "cybersecurity", icon: "SiSplunk" },
    { name: "Secure Coding", level: 92, category: "cybersecurity" },

    // Cloud & Tools
    { name: "AWS", level: 75, category: "cloud", icon: "SiAmazon" },
    { name: "Docker", level: 85, category: "tools", icon: "SiDocker" },
    { name: "Git / CI/CD", level: 90, category: "tools" },
    { name: "Linux Administration", level: 85, category: "tools" },

    // Spoken Languages
    { name: "Arabic", level: 100, category: "languages" },
    { name: "Italian", level: 95, category: "languages" },
    { name: "English", level: 85, category: "languages" },

    // Programming Languages
    { name: "Python", level: 92, category: "programming" },
    { name: "C++", level: 80, category: "programming" },
    { name: "Go", level: 75, category: "programming" },
    { name: "JavaScript", level: 95, category: "programming" },

    // Debugging
    { name: "Xdebug", level: 90, category: "debugging" },
    { name: "Chrome DevTools", level: 95, category: "debugging" },
    { name: "GDB", level: 70, category: "debugging" },
];

export const certifications: Certification[] = [
    {
        id: "cert-1",
        name: "Full Stack Developer Laravel Framework",
        issuer: "Laravel Daily",
        date: "2023-11",
        description: "Mastery of modern Laravel ecosystem, including Eloquent, Queues, and Jobs.",
        badge: "/images/certs/laravel-badge.png",
        icon: "SiLaravel",
    },
    {
        id: "cert-2",
        name: "Google Cybersecurity Professional Certificate",
        issuer: "Google",
        date: "2024-01",
        description: "Hands-on training in Python, Linux, SQL, SIEM tools, and intrusion detection.",
        badge: "/images/certs/google-cyber-badge.png",
        icon: "SiGoogle",
    },
    {
        id: "cert-3",
        name: "Certified in Cybersecurity (CC)",
        issuer: "ISC2",
        date: "2024-03",
        description: "Foundational knowledge of industry-standard security practices and policies.",
        badge: "/images/certs/isc2-cc-badge.png",
        icon: "FaShieldAlt",
    },
    {
        id: "cert-4",
        name: "Pentester Path",
        issuer: "TryHackMe",
        date: "2023-09",
        description: "Practical offensive security skills including web exploitation and privilege escalation.",
        badge: "/images/certs/thm-pentester-badge.png",
        icon: "FaTerminal",
    },
    {
        id: "cert-5",
        name: "CompTIA Security+",
        issuer: "CompTIA",
        date: "2023-06",
        description: "Core cybersecurity knowledge and skills required for security professionals.",
        badge: "/images/certs/security-plus-badge.png",
        icon: "FaLock",
    },
    {
        id: "cert-6",
        name: "Splunk Core Certified Power User",
        issuer: "Splunk",
        date: "2023-12",
        description: "Basic searching and reporting commands, creating knowledge objects, and using alerts.",
        badge: "/images/certs/splunk-badge.png",
        icon: "SiSplunk",
    },
    {
        id: "cert-7",
        name: "AWS Certified Cloud Practitioner",
        issuer: "Amazon Web Services",
        date: "2024-02",
        description: "Overall understanding of the AWS Cloud platform and basic security concepts.",
        badge: "/images/certs/aws-cp-badge.png",
        icon: "SiAmazon",
    },
];

export const projects: Project[] = [
    {
        id: "proj-1",
        title: "SecureVault API",
        description: "A secure file storage API built with Laravel, featuring end-to-end encryption and audit logging.",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2070",
        technologies: ["Laravel", "PHP", "Encryption", "PostgreSQL"],
        category: "security",
        featured: true,
    },
    {
        id: "proj-2",
        title: "CyberDashboard",
        description: "Real-time threat monitoring dashboard visualizing SIEM data from Splunk.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070",
        technologies: ["React", "D3.js", "Splunk", "WebSocket"],
        category: "web",
        featured: true,
    },
    {
        id: "proj-3",
        title: "VulnScanner Pro",
        description: "Automated vulnerability scanner for web applications using Python and Docker.",
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=2070",
        technologies: ["Python", "Docker", "FastAPI", "Redis"],
        category: "security",
        featured: true,
    },
    {
        id: "proj-4",
        title: "E-Commerce Monolith",
        description: "High-performance e-commerce platform with complex inventory management.",
        image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=1932",
        technologies: ["Laravel", "Vue.js", "MySQL", "Redis"],
        category: "fullstack",
    },
];

export const timeline: TimelineEvent[] = [
    {
        id: "tl-1",
        title: "Self-Taught Developer",
        organization: "Home Lab",
        date: "2018",
        description: "Started journey with PHP, HTML/CSS and building local servers.",
        type: "education",
    },
];

export const stats: Stat[] = [
    { label: "Years Experience", value: 5, suffix: "+", icon: "FaBriefcase" },
    { label: "Projects Completed", value: 40, suffix: "+", icon: "FaCode" },
    { label: "Certifications", value: 7, icon: "FaCertificate" },
    { label: "Vulnerabilities Found", value: 120, suffix: "+", icon: "FaShieldAlt" },
];
