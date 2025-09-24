interface HeaderLinkProps {
    href: string
    label: string
}

export function HeaderLink(props: HeaderLinkProps) {
    return <a className="bg-amber-50" href={props.href}>{props.label}</a>
}