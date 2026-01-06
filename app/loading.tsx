import Loading from "@/components/ui/Loading";

export default function SuspenseFallback() {
    return <Loading message="Loading content..." fullscreen={false} />;
}
