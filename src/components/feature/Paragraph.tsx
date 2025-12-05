interface Paragraph 
{
    text: string,
    textSize : string
}

export function Paragraph({text, textSize} : Paragraph)
{
    return(<p style={{fontSize:textSize}}>{text}</p> );
}