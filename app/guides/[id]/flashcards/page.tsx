import { getGuides } from "@/lib/data/index";
import { GuideFlashcards } from "@/components/GuideFlashcards";

export async function generateStaticParams() {
    const guides = getGuides('es');
    return guides.map((guide) => ({
        id: guide.id,
    }));
}

export default async function FlashcardsPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    return <GuideFlashcards id={id} />;
}
