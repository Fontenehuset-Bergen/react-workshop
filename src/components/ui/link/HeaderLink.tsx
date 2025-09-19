import style from"./HeaderLink.css"

interface iHeaderLink {
    href: string
    label: string
}


export function HeaderLink(props: iHeaderLink) {
    return <a className="bg-purple-200" href={"props.href"}>{props.label}</a>
}