interface LinkButton 
{
    text : string,
    href : string,
    cssClass? : string
}

export function LinkButton({text, href, cssClass} : LinkButton)
{
    return(<a className={`defaultLinkButton ${cssClass}`} href={href}>{text}</a>);
}