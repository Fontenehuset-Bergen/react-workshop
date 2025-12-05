
interface TextButton
{
    text : string,
    cssClass? : string

}

export function TextButton({ text, cssClass} : TextButton) 
{
    return( <button className={`defaultTextButton ${cssClass}`}>{text}</button> );
}