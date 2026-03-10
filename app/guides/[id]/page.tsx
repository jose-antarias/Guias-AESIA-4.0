import { getGuides } from "@/lib/data";
import { GuideDetails } from "@/components/GuideDetails";

export async function generateStaticParams() {
    const guides = getGuides('es');
    return guides.map((guide) => ({
        id: guide.id,
    }));
}

export default async function GuidePage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    // We fetch the data on the server. For now, we default to Spanish.
    // The client component will handle the translation swapping.
    const initialGuide = getGuides('es').find(g => g.id === id);

    if (!initialGuide) {
        return <div>Guía no encontrada</div>;
    }

    return <GuideDetails id={id} initialGuide={initialGuide} />;
}
