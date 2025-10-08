import type { ReactNode } from "react"


interface SectionLayoutProps {
    children: ReactNode;
}

export function SectionLayout({children}:SectionLayoutProps) {
    return <section className="flex flex-gol gap-2">{children}</section>
}