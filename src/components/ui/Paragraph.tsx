/*
ParagraphThis is a <p>section where you will receive the following props: textand textSize. In this component you will be able to control the size of the text by sending props to <p>the tag's style attribute.

Paragraph
    - text
    - text size
*/

interface ParaProps {
    textcontent: string,
    textsize: number,
    sizeunit?: "px" | "rem" | "em",
}

export function ParaStyle( { textcontent, textsize, sizeunit="px" }: ParaProps ) {
    return(
        <p style={{fontSize: textsize + sizeunit}} >{textcontent}</p>
    )
}