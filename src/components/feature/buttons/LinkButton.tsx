interface LinkButton 
{
    text : string,
    href : string,
    cssClass? : string
}

export function LinkButton({text, href, cssClass} : LinkButton)
{
    return(<a className={`defaultLinkButton ${cssClass} flex`} href={href} target="_blank">{text} </a>);
}



export function InStockButton({text, href, cssClass} : LinkButton)
{
    return <>
        <button className={`${cssClass} flex`}><span>{text}</span><span>{`>`}</span> </button>
    </>
}