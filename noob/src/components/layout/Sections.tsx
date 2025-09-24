import type { ReactNode } from "react"


interface SectionLayoutProps {
    children: ReactNode;
}

export function SectionLayout({children}:SectionLayoutProps) {
    return <section>{children}</section>
}