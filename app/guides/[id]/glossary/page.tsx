import { getGuides } from "@/lib/data/index";
import { GuideGlossary } from "@/components/GuideGlossary";

export async function generateStaticParams() {
    const guides = getGuides('es');
    return guides.map((guide) => ({
        id: guide.id,
    }));
}

export default async function GlossaryPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    return <GuideGlossary id={id} />;
}
