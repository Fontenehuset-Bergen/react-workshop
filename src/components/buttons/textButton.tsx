import "../../assets/styles/buttons.css"

interface TextButtonProps {
    textcontent: string
}

export default function TextButton({textcontent}: TextButtonProps) {
    return ( 
        <>
        <div>
            <button className="text-button">{textcontent}</button>
        </div>
        </>
    )
}