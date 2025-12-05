import "../../assets/styles/buttons.css"

interface LinkButtonProps {
    label: string, 
    ref: string
}

export default function LinkButton ({label, ref}: LinkButtonProps) {
return (
    <div>
        <a href={ref}  className="link-button">{label}</a>
    </div>
)
}