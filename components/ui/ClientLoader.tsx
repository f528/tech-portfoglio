"use client";

import { useEffect, useState } from "react";
import Loading from "@/components/ui/Loading";

interface ClientLoaderProps {
    children: React.ReactNode;
}

export default function ClientLoader({ children }: ClientLoaderProps) {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate minimum loading time for better UX
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 800);

        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return <Loading message="Initializing Portfolio..." />;
    }

    return <>{children}</>;
}
