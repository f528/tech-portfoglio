export interface Skill {
    name: string;
    level: number; // 0-100
    category: "frontend" | "backend" | "cybersecurity" | "cloud" | "tools" | "languages" | "programming" | "debugging";
    icon?: string;
}

export interface Certification {
    id: string;
    name: string;
    issuer: string;
    date: string;
    credentialId?: string;
    credentialUrl?: string;
    description: string;
    badge?: string;
    icon?: string;
}

export interface Project {
    id: string;
    title: string;
    description: string;
    longDescription?: string;
    image: string;
    technologies: string[];
    category: "web" | "security" | "fullstack" | "other";
    demoUrl?: string;
    githubUrl?: string;
    featured?: boolean;
}

export interface TimelineEvent {
    id: string;
    title: string;
    organization: string;
    date: string;
    endDate?: string;
    description: string;
    type: "education" | "work" | "certification";
    icon?: string;
}

export interface Stat {
    label: string;
    value: number;
    suffix?: string;
    icon?: string;
}

export interface SocialLink {
    name: string;
    url: string;
    icon: string;
}

export interface PersonalInfo {
    name: string;
    title: string;
    email: string;
    location: string;
    bio: string;
    avatar: string;
    socials: SocialLink[];
}
