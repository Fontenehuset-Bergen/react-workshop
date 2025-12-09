import { type ReactNode } from "react"

interface StyledSection 
{
    title : string,
    text: string,
    background : "light" | "dark",
    children : ReactNode
    

}

const darkMode : string = "rgba(20, 20, 20, 1)"
const lightMode : string = "rgba(221, 221, 221, 1)"


export function StyledSection({ title, text, background, children} : StyledSection )
{
    return(
        <>
            <div className="styledSection" style={background === "dark" ? {backgroundColor : darkMode} : {backgroundColor : lightMode}}>
                <h2 className="alternatives">{title}</h2>
                <p className="alternativesText">{text}</p>
                <div className="alternativesChildren">
                    {children}
                </div>
            </div>
        </>
    )
}