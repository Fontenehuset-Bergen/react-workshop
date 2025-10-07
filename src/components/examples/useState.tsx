import { useState, type ChangeEvent } from "react"

interface ExampleProps {
    names: string[],
}

export function ExampleUseState({ names }: ExampleProps) {
    const [filteredNames, setFilteredNames] = useState(names)

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        const searchInput = event.currentTarget.value
        const newNames = names.filter((name) => name.includes(searchInput))
        setFilteredNames(newNames)
    }
    return (
        <div className="flex flex-col w-96 bg-amber-200 text-blue-950 ">
            <h2>Available names:</h2>
            <span className="flex gap-2">
                {names.map((name, index) => (
                    <p key={name + index}>{name}</p>
                ))}
            </span>
            <input onChange={handleChange} /> {/* styled in assets-styles-global.css */}
            <h2>Filtered names:</h2>
            <span className="flex gap-2">
                {filteredNames.map((name, index) => (
                    <p key={name + index}>{name}</p>
                ))}
            </span>
        </div>
    )
}