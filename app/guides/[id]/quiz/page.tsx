import { getGuides } from "@/lib/data/index";
import { GuideQuiz } from "@/components/GuideQuiz";

export async function generateStaticParams() {
    const guides = getGuides('es');
    return guides.map((guide) => ({
        id: guide.id,
    }));
}

export default async function QuizPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    return <GuideQuiz id={id} />;
}
