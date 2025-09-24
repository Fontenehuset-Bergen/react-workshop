interface HeaderLinkProps {
    href: string
    label: string
}

export function HeaderLink(props: HeaderLinkProps) {
    return <a className="text-white text-2xl hover:underline" href={props.href}>{props.label}</a>
}