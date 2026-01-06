export const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api";
export const STORAGE_URL = process.env.NEXT_PUBLIC_STORAGE_URL || "http://localhost:8000/storage";
export const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:8000";

export async function fetchPortfolioData() {
    try {
        const res = await fetch(`${API_URL}/portfolio`, { cache: 'no-store' }); // Ensure fresh data
        if (!res.ok) throw new Error('Failed to fetch data');
        return await res.json();
    } catch (error) {
        console.error("API Fetch Error:", error);
        return null;
    }
}
