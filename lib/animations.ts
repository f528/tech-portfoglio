import gsap from "gsap";

export const fadeIn = (element: HTMLElement, duration = 0.5) => {
    gsap.fromTo(
        element,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration, ease: "power2.out" }
    );
};

export const fadeInUp = (element: HTMLElement, duration = 0.5, delay = 0) => {
    gsap.fromTo(
        element,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration, delay, ease: "power3.out" }
    );
};

export const scaleIn = (element: HTMLElement, duration = 0.5) => {
    gsap.fromTo(
        element,
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration, ease: "back.out(1.7)" }
    );
};

export const slideInLeft = (element: HTMLElement, duration = 0.5, delay = 0) => {
    gsap.fromTo(
        element,
        { x: -100, opacity: 0 },
        { x: 0, opacity: 1, duration, delay, ease: "power2.out" }
    );
};

export const slideInRight = (element: HTMLElement, duration = 0.5, delay = 0) => {
    gsap.fromTo(
        element,
        { x: 100, opacity: 0 },
        { x: 0, opacity: 1, duration, delay, ease: "power2.out" }
    );
};

// Framer Motion Variants
export const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

export const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
        },
    },
};

export const cardHoverVariants = {
    rest: { scale: 1 },
    hover: {
        scale: 1.05,
        transition: {
            duration: 0.3,
            ease: "easeInOut",
        },
    },
};
