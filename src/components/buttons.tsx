type buttonProps = {
    text?: string
}

export function MyButton({text}: buttonProps) {
    return <button type="button" style={{width: 200, backgroundColor: 'teal', color: 'white'}}>{text}</button>
}
