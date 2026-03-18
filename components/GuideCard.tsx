"use client";

import Link from "next/link";
import { type Guide } from "@/lib/data";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/components/LanguageProvider";

interface GuideCardProps {
    guide: Guide;
    index: number;
}

export function GuideCard({ guide, index }: GuideCardProps) {
    const { t } = useLanguage();

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className="h-full"
        >
            <Card className="h-full flex flex-col overflow-hidden transition-all duration-500 group
                border border-transparent bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)]
                hover:shadow-[0_20px_40px_-15px_rgba(67,56,202,0.15)] hover:-translate-y-1.5
                dark:border-slate-800 dark:bg-slate-900/40 dark:backdrop-blur-md dark:shadow-none
                dark:hover:border-indigo-500/50 dark:hover:shadow-[0_0_20px_rgba(99,102,241,0.15)]">
                <CardHeader className="
                    bg-transparent border-b-0
                    dark:bg-slate-900/50 dark:border-b dark:border-slate-800
                    pb-4">
                    <div className="flex justify-between items-start gap-4">
                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 text-white text-xs font-bold ring-2 ring-white dark:ring-slate-900 shadow-sm">
                            {guide.id}
                        </div>
                        <BookOpen className="w-5 h-5 text-slate-400 group-hover:text-indigo-400 transition-colors dark:text-slate-500" />
                    </div>
                    <CardTitle className="mt-4 text-xl line-clamp-2 leading-tight min-h-[3rem] transition-colors
                        text-slate-800 group-hover:text-indigo-600
                        dark:text-slate-100 dark:group-hover:text-indigo-300">
                        {guide.title}
                    </CardTitle>
                </CardHeader>
                <CardContent className="flex-1 pt-6">
                    <CardDescription className="line-clamp-4 text-base text-slate-600 dark:text-slate-400">
                        {guide.summary}
                    </CardDescription>
                </CardContent>
                <CardFooter className="pt-2 pb-6">
                    <Button asChild className="w-full transition-all border
                        bg-slate-50 text-indigo-700 border-transparent shadow-none hover:shadow-md
                        hover:bg-indigo-600 hover:text-white
                        dark:bg-slate-800 dark:text-white dark:border-slate-700
                        dark:hover:bg-indigo-600 dark:hover:border-indigo-500">
                        <Link href={`/guides/${guide.id}`}>
                            {t.common.startGuide}
                            <ArrowRight className="ml-2 w-4 h-4 opacity-50 group-hover:translate-x-1 group-hover:opacity-100 transition-all" />
                        </Link>
                    </Button>
                </CardFooter>
            </Card>
        </motion.div>
    );
}
