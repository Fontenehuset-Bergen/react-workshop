import { ReactNode } from "react"

interface SectionLayoutProps {
    children: ReactNode
}

export function SectionLayout({children}: SectionLayoutProps) {
    return <section className="flex flex-col gap-2">{children}</section>
}